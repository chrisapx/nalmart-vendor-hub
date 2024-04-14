"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Image from "next/image";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import {useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";
import {setLoading} from "../../../redux/slices/LoaderSlice";
import apiService from "@/helpers/apiService";
import { useToast } from "@/components/ToastWrapper/ToastProvider";
import {useDispatch} from "react-redux";
import {Divider} from "primereact/divider";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
const Details = () => {
  const dispatch = useDispatch();
  const [contractorData, setContractorData] = useState({});
  const { showSuccess, showError } = useToast();
  const getContractorDetails=()=>{
    apiService.get(`contractors/${1}`).then((response) => {
      console.log(response)
      if (response.statusCode === 200){
        setContractorData(response.data)
      }else {
        showError(response.message)
      }
    }).catch((error) => {
      showError(error.message)
    }).finally(()=>{
      dispatch(setLoading(false));
    })
  }
  useEffect(()=>{
    getContractorDetails()
  },[])
  return (
    <DefaultLayout>
      <div>
        {/*<Breadcrumb pageName="Contractor Details" />*/}

        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-5 xl:col-span-3">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Contractor Information
                </h3>
              </div>
              <div className="p-7">
                <form action="#">

                  <Divider type="dashed"><span className="text-black">Address Info</span></Divider>

                  <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                    <div className="w-full sm:w-1/2">
                      <label
                          className="mb-3 block text-sm font-medium text-black dark:text-white"
                          htmlFor="fullName"
                      >
                        Region
                      </label>
                      <div className="relative">

                        <input
                            className="w-full rounded border border-stroke bg-gray py-3 pl-2 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                            type="text"
                            disabled
                            // value={contractorData?.address?.Region?.name}
                        />
                      </div>
                    </div>

                    <div className="w-full sm:w-1/2">
                      <label
                          className="mb-3 block text-sm font-medium text-black dark:text-white"
                          htmlFor="phoneNumber"
                      >
                        District
                      </label>
                      <input
                          className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                          type="text"
                          disabled
                          // value={contractorData?.address?.District?.name}
                      />
                    </div>


                    <div className="w-full sm:w-1/2">
                      <label
                          className="mb-3 block text-sm font-medium text-black dark:text-white"
                          htmlFor="phoneNumber"
                      >
                        Country
                      </label>
                      <input
                          className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                          type="text"
                          disabled
                          // value={contractorData?.address?.County?.name}
                      />
                    </div>

                  </div>

                  <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                    <div className="w-full sm:w-1/2">
                      <label
                          className="mb-3 block text-sm font-medium text-black dark:text-white"
                          htmlFor="fullName"
                      >
                        Sub County
                      </label>
                      <div className="relative">

                        <input
                            className="w-full rounded border border-stroke bg-gray py-3 pl-2 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                            type="text"
                            disabled
                            // value={contractorData?.address?.SubCounty?.name}
                        />
                      </div>
                    </div>

                    <div className="w-full sm:w-1/2">
                      <label
                          className="mb-3 block text-sm font-medium text-black dark:text-white"
                          htmlFor="phoneNumber"
                      >
                        Parish
                      </label>
                      <input
                          className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                          type="text"
                          disabled
                          // value={contractorData?.address?.Parish?.name}
                      />
                    </div>


                    <div className="w-full sm:w-1/2">
                      <label
                          className="mb-3 block text-sm font-medium text-black dark:text-white"
                          htmlFor="phoneNumber"
                      >
                        Village
                      </label>
                      <input
                          className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                          type="text"
                          disabled
                          // value={contractorData?.address?.village}
                      />
                    </div>

                  </div>
                  <Divider type="dashed"><span className="text-black">Referees</span></Divider>
                    {/* <DataTable value={contractorData?.referees} tableStyle={{ minWidth: '50rem' }}>
                      <Column field="name" header="Name"></Column>
                      <Column field="email" header="Email"></Column>
                      <Column field="phoneNumber" header="Phone Number"></Column>
                      <Column field="address" header="Address"></Column>
                    </DataTable> */}
                  <Divider type="dashed"><span className="text-black">Payment Info</span></Divider>
                  <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                    <div className="w-full sm:w-1/2">
                      <label
                          className="mb-3 block text-sm font-medium text-black dark:text-white"
                          htmlFor="fullName"
                      >
                        TIN
                      </label>
                      <div className="relative">

                        <input
                            className="w-full rounded border border-stroke bg-gray py-3 pl-2 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                            type="text"
                            disabled
                            // value={contractorData?.paymentInfo?.tin}
                        />
                      </div>
                    </div>

                    <div className="w-full sm:w-1/2">
                      <label
                          className="mb-3 block text-sm font-medium text-black dark:text-white"
                          htmlFor="phoneNumber"
                      >
                        Bank Name
                      </label>
                      <input
                          className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                          type="text"
                          disabled
                          // value={contractorData?.paymentInfo?.bankName}
                      />
                    </div>


                    <div className="w-full sm:w-1/2">
                      <label
                          className="mb-3 block text-sm font-medium text-black dark:text-white"
                          htmlFor="phoneNumber"
                      >
                        Account Title
                      </label>
                      <input
                          className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                          type="text"
                          disabled
                          // value={contractorData?.paymentInfo?.bankAccountName}
                      />
                    </div>

                  </div>
                  <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                    <div className="w-full sm:w-1/2">
                      <label
                          className="mb-3 block text-sm font-medium text-black dark:text-white"
                          htmlFor="fullName"
                      >
                        Account Number
                      </label>
                      <div className="relative">

                        <input
                            className="w-full rounded border border-stroke bg-gray py-3 pl-2 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                            type="text"
                            disabled
                            // value={contractorData?.paymentInfo?.bankAccountNo}
                        />
                      </div>
                    </div>

                    <div className="w-full sm:w-1/2">
                      <label
                          className="mb-3 block text-sm font-medium text-black dark:text-white"
                          htmlFor="phoneNumber"
                      >
                        Momo Number
                      </label>
                      <input
                          className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                          type="text"
                          disabled
                          // value={contractorData?.paymentInfo?.momoNumber}
                      />
                    </div>


                    <div className="w-full sm:w-1/2">
                      <label
                          className="mb-3 block text-sm font-medium text-black dark:text-white"
                          htmlFor="phoneNumber"
                      >
                        Momo Names
                      </label>
                      <input
                          className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                          type="text"
                          disabled
                          // value={contractorData?.paymentInfo?.momoNames}
                      />
                    </div>

                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-span-5 xl:col-span-2">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">

                </h3>
              </div>
              <div className="p-7">
                <form action="#">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="h-14 w-14 rounded-full">
                      <Image
                        src={"/images/user/user-03.png"}
                        width={55}
                        height={55}
                        alt="User"
                      />
                    </div>
                    <div>
                      <span className="mb-1.5 text-black dark:text-white">
                        {/* {contractorData.fullName} */}
                      </span>
                      <span className="flex gap-2.5">
                        <button className="text-sm hover:text-primary">
                          Delete
                        </button>
                        <button className="text-sm hover:text-primary">
                          Update
                        </button>
                      </span>
                    </div>
                  </div>
                  <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                    <div className="w-full sm:w-1/2">
                      <label
                          className="mb-3 block text-sm font-medium text-black dark:text-white"
                          htmlFor="fullName"
                      >
                        Full Name
                      </label>
                      <div className="relative">

                        <input
                            className="w-full rounded border border-stroke bg-gray py-3 pl-2 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                            type="text"
                            name="fullName"
                            id="fullName"
                            disabled
                            // value={contractorData.fullName}
                        />
                      </div>
                    </div>

                    <div className="w-full sm:w-1/2">
                      <label
                          className="mb-3 block text-sm font-medium text-black dark:text-white"
                          htmlFor="phoneNumber"
                      >
                        Contractor Number
                      </label>
                      <input
                          className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                          type="text"
                          disabled
                          // value={contractorData.contractorNo}
                      />
                    </div>

                  </div>
                  <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                    <div className="w-full sm:w-1/2">
                      <label
                          className="mb-3 block text-sm font-medium text-black dark:text-white"
                          htmlFor="phoneNumber"
                      >
                        Phone Number
                      </label>
                      <input
                          className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                          type="text"
                          disabled
                          // value={contractorData.phoneNumber}
                      />
                    </div>
                    <div className="w-full sm:w-1/2">
                      <label
                          className="mb-3 block text-sm font-medium text-black dark:text-white"
                          htmlFor="fullName"
                      >
                        Email
                      </label>
                      <div className="relative">

                        <input
                            className="w-full rounded border border-stroke bg-gray py-3 pl-2 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                            type="text"
                            name="fullName"
                            id="fullName"
                            disabled
                            // value={contractorData.email}
                        />
                      </div>
                    </div>

                  </div>
                  <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                    <div className="w-full sm:w-1/2">
                      <label
                          className="mb-3 block text-sm font-medium text-black dark:text-white"
                          htmlFor="phoneNumber"
                      >
                        Gender
                      </label>
                      <input
                          className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                          type="text"
                          disabled
                          // value={contractorData.gender}
                      />
                    </div>


                    <div className="w-full sm:w-1/2">
                      <label
                          className="mb-3 block text-sm font-medium text-black dark:text-white"
                          htmlFor="phoneNumber"
                      >
                        Next Of Kin
                      </label>
                      <input
                          className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                          type="text"
                          disabled
                          // value={contractorData.nextOfKin}
                      />
                    </div>

                  </div>
                  <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                    <div className="w-full sm:w-1/2">
                      <label
                          className="mb-3 block text-sm font-medium text-black dark:text-white"
                          htmlFor="fullName"
                      >
                        Next Of Kin Contact
                      </label>
                      <div className="relative">

                        <input
                            className="w-full rounded border border-stroke bg-gray py-3 pl-2 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                            type="text"
                            disabled
                            // value={contractorData.nextOfKinContact}
                        />
                      </div>
                    </div>

                    <div className="w-full sm:w-1/2">
                      <div
                          className="mb-3 block text-sm font-medium text-black dark:text-white"
                      >
                        Date Created
                      </div>
                      <div>
                        {/* <span>{contractorData.createdAt}</span> */}
                      </div>
                    </div>
                  </div>
                  <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                  <div className="w-full sm:w-1/2">
                    <div
                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                    >
                      Account Status
                    </div>
                    {/* <div>{contractorData?.accountStatus?.name}</div> */}
                  </div>

                    <div className="w-full sm:w-1/2">
                      <div
                          className="mb-3 block text-sm font-medium text-black dark:text-white"
                      >
                        Languages
                      </div>
                     <div>
                       {/* {contractorData?.languages?.map((item, index)=>(
                           <span key={index}>{item.name}</span>
                       ))} */}
                     </div>
                    </div>
                  </div>

                  <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                    <div className="w-full sm:w-1/2">
                      <div
                          className="mb-3 block text-sm font-medium text-black dark:text-white"
                      >
                        Potifolio
                      </div>
                      {/* <div>{contractorData.portfolio}</div> */}
                    </div>

                    <div className="w-full sm:w-1/2">
                      <div
                          className="mb-3 block text-sm font-medium text-black dark:text-white"
                      >
                        Skills
                      </div>
                      <div>
                        {/* {contractorData?.skills?.map((item, index)=>(
                            <span key={index}>{item.name}</span>
                        ))} */}
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Details;
