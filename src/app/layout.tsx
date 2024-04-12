"use client";
import "jsvectormap/dist/css/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import 'primeicons/primeicons.css';
import React, { useEffect, useState } from "react";
import Loader from "@/components/common/Loader";
import {StateProvider} from "../redux/Provider";
import {ToastProvider} from "../components/ToastWrapper/ToastProvider";
import {LoaderProvider} from "../components/Loader/LoaderProvider";
import Cookies from 'js-cookie'
import {useRouter} from "next/navigation";
import apiService from "@/helpers/apiService";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [loading, setLoading] = useState<boolean>(true);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const router = useRouter();
  

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
    checkLogin();

    if(isLoggedIn) {
      getProfile();
    }

    document.title = "Nalmart Vendor Hub"
  }, []);

  const checkLogin = () => {
    let token = Cookies.get('token');
    if (token !== null || token !== '') {
      setIsLoggedIn(true); 
    } else {
      router.push('/auth/signin', { scroll: false });
    }
  } 

  const getProfile = () => {
    const username = Cookies.get('userID');

    try{
      if(username && isLoggedIn ){
        apiService.get(`users/user/${username}`)
        .then((response) => {
          if (response.status === 200){
            Cookies.set("profile", JSON.stringify(response.data), { expires: 1 } );
          }
        }).catch((error) => {
          console.log(error.message);
        })
      }
    }catch(e){
      console.log(e);
    }
  }

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
          <StateProvider>
            <ToastProvider>
                <LoaderProvider/>
                {loading ? <Loader /> : ( isLoggedIn ? children : null )}
                {/* {children} */}
            </ToastProvider>
          </StateProvider>
        </div>
      </body>
    </html>
  );
}
