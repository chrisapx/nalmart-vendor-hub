import React, {useState} from "react";

import TextFormField from "../../../components/TextFormField";
import GenderSelector from "../../../components/fragments/GenderSelector";
import RegionSelector from "../../../components/fragments/RegionSelector";
import DistrictSelector from "../../../components/fragments/DistrictSelector";
import CountySelector from "../../../components/fragments/CountySelector";
import FilePicker from "../../../components/fragments/FilePicker";
import * as Yup from "yup";
import { Form, Formik} from "formik";
import {Button} from "primereact/button";
import SubCountySelector from "../../../components/fragments/SubCountySelector";
import {phoneRegex} from "../../../helpers/Config";
import {Divider} from "primereact/divider";
import Referees from "./Referees";
import CountrySelector from "../../../components/fragments/CountrySelector";
import ParishSelector from "../../../components/fragments/ParishSelector";
import ProductSelector from "../../../components/fragments/ProductSelector";

const validationSchema = Yup.object({
    fullName: Yup.string().required("Full Name is required"),
    gender: Yup.string().required("Gender is required"),
    phoneNumber: Yup.string().required("Phone Number is required")
        .matches(phoneRegex,'Phone number is not valid'),
    email: Yup.string().email("Please enter a valid email")
        .required("Email is required"),
    countryId: Yup.string().required("Country is required"),
    regionId: Yup.string().required("Region is required"),
    districtId: Yup.string().required("District is required"),
    countyId: Yup.string().required("County is required"),
    subCountyId: Yup.string().required("Sub County is required"),
    productTypeId: Yup.string().required("Product is required"),
    nextOfKin: Yup.string().required("Next Of Kin is required"),
    nextOfKinContact: Yup.string().required("Next Of Kin Contact is required")
        .matches(phoneRegex,'Phone number is not valid'),
});
export default function BasicInfo({data, next}) {
    const [referees, setReferees] = useState(data.referees);
    const handleSubmit = (values) => {
        const modifiedValues = {
            ...values,
            referees: referees
        }
        next(modifiedValues);
        console.log('Form Values: ', modifiedValues)
    };


    const handleReferees=(event)=>{
        setReferees(event)
    }
  return (
    <>
        <Formik
            validationSchema={validationSchema}
            initialValues={data}
            onSubmit={handleSubmit}
        >
            {(formProps) => (
                <Form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <TextFormField  label="Full Name"
                                name="fullName"
                                placeHolder="Enter full name"
                                onChange={formProps.handleChange}
                                onBlur={formProps.handleBlur}
                                value={formProps.values.fullName}
                                error={formProps.touched.fullName && formProps.errors.fullName}/>
            </div>
            <div>
                <FilePicker label="Contractor Photo"
                            onChange={(e)=>formProps.setFieldValue('photo',e.target.files[0])}
                />
            </div>
            <div>
                <GenderSelector label="Gender"
                                name="gender"
                                onChange={formProps.handleChange}
                                value={formProps.values.gender}
                                error={formProps.touched.gender && formProps.errors.gender} />
            </div>

            <div>
                <CountrySelector label="Country"
                                name="countryId"
                                onChange={formProps.handleChange}
                                value={formProps.values.countryId}
                                error={formProps.touched.countryId && formProps.errors.countryId} />
            </div>

            <div>
                <RegionSelector label="Region"
                                name="regionId"
                                onChange={formProps.handleChange}
                                value={formProps.values.regionId}
                                error={formProps.touched.regionId && formProps.errors.regionId} />
            </div>
            <div>
                <DistrictSelector label="District"
                                  name="districtId"
                                  onChange={formProps.handleChange}
                                  regionId={formProps.values.regionId}
                                  value={formProps.values.districtId}
                                  error={formProps.touched.districtId && formProps.errors.districtId} />
            </div>
            <div>
                <CountySelector label="County"
                                name="countyId"
                                onChange={formProps.handleChange}
                                value={formProps.values.countyId}
                                districtId={formProps.values.districtId}
                                error={formProps.touched.countyId && formProps.errors.countyId} />
            </div>
            <div>
                <SubCountySelector label="Sub County"
                                   name="subCountyId"
                               onChange={formProps.handleChange}
                               value={formProps.values.subCountyId}
                                   countyId={formProps.values.countyId}
                               error={formProps.touched.subCountyId && formProps.errors.subCountyId} />
            </div>

            <div>
                <ParishSelector label="Parish"
                                   name="parishId"
                                   onChange={formProps.handleChange}
                                   value={formProps.values.parishId}
                                   countyId={formProps.values.parishId}
                                subcountyId={formProps.values.subcountyId}
                                   error={formProps.touched.parishId && formProps.errors.parishId} />
            </div>

            <div>
                <TextFormField label="Village"
                               name="village"
                               placeHolder="Enter village"
                               onChange={formProps.handleChange}
                               onBlur={formProps.handleBlur}
                               value={formProps.values.village}
                               error={formProps.touched.village && formProps.errors.village} />
            </div>

            <div>
                <TextFormField label="Email Address"
                               name="email"
                               placeHolder="Enter email"
                               onChange={formProps.handleChange}
                               onBlur={formProps.handleBlur}
                               value={formProps.values.email}
                               error={formProps.touched.email && formProps.errors.email} />
            </div>

            <div>
                <TextFormField label="Phone Number"
                               name="phoneNumber"
                               placeHolder="Enter a valid phone number"
                               onChange={formProps.handleChange}
                               onBlur={formProps.handleBlur}
                               value={formProps.values.phoneNumber}
                               error={formProps.touched.phoneNumber && formProps.errors.phoneNumber} />
            </div>
            <div>
                <TextFormField label="Full Name of next of kin"
                               name="nextOfKin"
                               placeHolder="Enter name of next of kin"
                               onChange={formProps.handleChange}
                               onBlur={formProps.handleBlur}
                               value={formProps.values.nextOfKin}
                               error={formProps.touched.nextOfKin && formProps.errors.nextOfKin} />
            </div>
            <div>
                <TextFormField label="Phone Number of next of kin"
                               name="nextOfKinContact"
                               placeHolder="Enter a valid phone number"
                               onChange={formProps.handleChange}
                               onBlur={formProps.handleBlur}
                               value={formProps.values.nextOfKinContact}
                               error={formProps.touched.nextOfKinContact && formProps.errors.nextOfKinContact} />
            </div>
            <div>
                <ProductSelector label="Product"
                                 name="productTypeId"
                                 value={formProps.values.productTypeId}
                                 onChange={formProps.handleChange}
                                 error={formProps.touched.productTypeId && formProps.errors.productTypeId}
                />
            </div>
        </div>
                    <Divider type="dashed"/>
                    <Referees data={referees} onChange={handleReferees}/>
                    <div className="float-right my-4">
                        <Button label="Next" type="submit" severity="secondary" size="small" />
                    </div>
                    <Divider type="dashed"/>
                </Form>
                )}
        </Formik>
    </>
  );
}

