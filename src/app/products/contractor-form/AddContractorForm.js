import React, {useState} from "react";
import {TabPanel, TabView} from "primereact/tabview";
import BasicInfo from "./BasicInfo";
import Qualifications from "./Qualifications";
import History from "./History";
import Ratings from "./Ratings";
import PaymentInfo from "./PaymentInfo";
import {useToast} from "../../../components/ToastWrapper/ToastProvider";
import apiService from "../../../helpers/apiService";
import Attachments from "./Attachments";

export default function AddContractorForm({refreshContractors, toggleModal}) {
    const { showSuccess, showError } = useToast();
    const [data, setData] = useState({
        fullName: "",
        email: "",
        gender: "",
        phoneNumber: "",
        countryId: "",
        countyId: "",
        regionId: "",
        districtId: "",
        subCountyId: "",
        parishId: "",
        village: "",
        photo: "",
        resume: "",
        contract: "",
        idDoc: "",
        recommendationLetter: "",
        nextOfKin: "",
        nextOfKinContact: "",
        profilePicture: "",
        level: "",
        portfolioUrl: "",
        productTypeId: "",
        skill: [],
        languages: [],
        attendedYeT: false,
        YeTdate: "",
        attendedOpsToT: false,
        opsToTdate: "",
        attendedToT: false,
        ToTdate: "",
        contractSigned: false,
        contractSigningInProgress: false,
        currentOpportunitySigningDate: "",
        currentOpportunity: "",
        pastOpportunities: [],
        opportunityFiles: [],
        referees: [],
        ratings: [],
        comment: "",
        tin: "",
        bankAccountName: "",
        bankAccountNumber: "",
        bankName: "",
        momoNumber: "",
        momoNames: "",
        verified: true,
        verifiedBy: 1,
    });
    const [currentStep, setCurrentStep] = useState(0);

    const handleNextStep = (newData, final = false) => {
        setData((prev) => ({ ...prev, ...newData }));

        if (final) {
            return saveContractor(newData);
        } else {
            setCurrentStep((prev) => prev + 1);
        }
    };

    const handlePrevStep = (newData) => {
        setData((prev) => ({ ...prev, ...newData }));
        setCurrentStep((prev) => prev - 1);
    };

    const saveContractor =(values)=>{
        const postData = {
            bioData: {
                fullName: data.fullName,
                gender: data.gender,
                countryId: data.countryId,
                regionId: data.regionId,
                districtId: data.districtId,
                countyId: data.countyId,
                subCountyId: data.subCountyId,
                parishId: 5,
                village: "kireka",
                email: data.email,
                phoneNumber: data.phoneNumber,
                nextOfKin: data.nextOfKin,
                nextOfKinContact: data.nextOfKinContact,
                referees: data.referees,
                productTypeId: data.productTypeId,
            },
            qualifications: {
                level: data.level,
                skills: data.skill,
                portfolioUrl: data.portfolioUrl,
                languages: data.languages,
            },
            opportunityHistory: data.pastOpportunities,
            ratings: data.ratings,
            paymentInfo: {
                tin: data.tin,
                bankAccountName: data.bankAccountName,
                bankAccountNo: data.bankAccountNumber,
                bankName: data.bankName,
                momoNames: data.momoNames,
                momoNumber: data.momoNumber,
                verified: data.verified,
                verifiedBy: data.verifiedBy
            }
        }

        const formData = new FormData();
        formData.append("bioData", JSON.stringify(postData.bioData))
        formData.append("qualifications", JSON.stringify(postData.qualifications))
        formData.append("paymentInfo", JSON.stringify(postData.paymentInfo))
        formData.append("resume", data.resume)
        // formData.append("contract", data.contract)
        formData.append("idDoc", data.idDoc)
        formData.append("recommendationLetter", data.recommendationLetter)
        formData.append("photo", data.photo)

        if (data.opportunityFiles.length > 0) {
            data.opportunityFiles.forEach((opportunity, index) => {

                formData.append(`opportunityFiles[${index}][contract]`, opportunity.contract);
            });
        }


        formData.append("opportunityHistory", JSON.stringify(data.pastOpportunities))

        console.log('Opportunities: ',data.pastOpportunities)
        console.log('OpportunityFiles: ',data.opportunityFiles)
        apiService.post("contractors",formData,{
            headers: {
                'Content-Type': 'multipart/formdata'
            }
        }).then((response) => {

            if (response.statusCode !== 200){
                return showError(response.message)
            }
            showSuccess(response.message)
            refreshContractors()
            toggleModal(false)
        }).catch((error) => {
            showError(error.message)
        })

    }

    const steps = [
        <BasicInfo next={handleNextStep} data={data} />,
        <Qualifications next={handleNextStep} prev={handlePrevStep} data={data} />,
        <History next={handleNextStep} prev={handlePrevStep} data={data} />,
        <Ratings next={handleNextStep} prev={handlePrevStep} data={data} />,
        <PaymentInfo next={handleNextStep} prev={handlePrevStep} data={data} />,
        <Attachments next={handleNextStep} prev={handlePrevStep} data={data} />,
    ];
    return (
    <>
        <TabView  activeIndex={currentStep} onTabChange={(e) => setCurrentStep(e.index)}>
            <TabPanel header="Basic Info" disabled={currentStep !== 0 ? true : false}></TabPanel>
            <TabPanel header="Qualifications" disabled={currentStep !== 1 ? true : false}></TabPanel>
            <TabPanel header="History" disabled={currentStep !== 2 ? true : false}></TabPanel>
            <TabPanel header="Ratings" disabled={currentStep !== 3 ? true : false}></TabPanel>
            <TabPanel header="Payment Info" disabled={currentStep !== 4 ? true : false}></TabPanel>
            <TabPanel header="Attachments" disabled={currentStep !== 5 ? true : false}></TabPanel>
        </TabView>
        {steps[currentStep]}
    </>
  );
}

