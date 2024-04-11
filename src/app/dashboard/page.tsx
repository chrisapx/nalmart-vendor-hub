import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
export const metadata: Metadata = {
  
  title:
    "Nalmart Vendor Hub",
  description: "Nalmart, Naturing the Authentic Legacy",
};

export default function Dashboard() {
  return (
    <>

      <DefaultLayout>
        <ECommerce />
      </DefaultLayout>
    </>
  );
}
