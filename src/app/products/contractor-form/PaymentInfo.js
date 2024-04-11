import React from "react";

import * as Yup from "yup";
import { Form, Formik} from "formik";
import TextFormField from "../../../components/TextFormField";
import {Button} from "primereact/button";
import {Divider} from "primereact/divider";
const validationSchema = Yup.object({
    tin: Yup.string().required("TIN is required"),
    bankAccountName: Yup.string().required("Bank Account Name is required"),
    bankAccountNumber: Yup.string().required("Bank Account Number is required"),
    bankName: Yup.string().required("Bank Name is required"),
    momoNumber: Yup.string().required("Mobile Money Number is required"),
    momoNames: Yup.string().required("Mobile Money Name is required"),
});

export default function PaymentInfo({data, next,prev}) {
    const handleSubmit = (values) => {
        next(values);
    };
  return (
    <>
        <Formik
            validationSchema={validationSchema}
            initialValues={data}
            onSubmit={handleSubmit}
        >
            {(formProps) => (
                <Form>
        <div className="">
            <div className="my-4">
                <TextFormField label="Tax Identification Number"
                               name="tin"
                               placeHolder="Enter TIN here"
                               onChange={formProps.handleChange}
                               onBlur={formProps.handleBlur}
                               value={formProps.values.tin}
                               error={formProps.touched.tin && formProps.errors.tin}/>
            </div>

            <div className="my-4">
                <TextFormField label="Bank Account Name"
                               name="bankAccountName"
                               onChange={formProps.handleChange}
                               onBlur={formProps.handleBlur}
                               value={formProps.values.bankAccountName}
                               error={formProps.touched.bankAccountName && formProps.errors.bankAccountName}/>
            </div>

            <div className="my-4">
                <TextFormField label="Bank Account Number"
                               name="bankAccountNumber"
                               onChange={formProps.handleChange}
                               onBlur={formProps.handleBlur}
                               value={formProps.values.bankAccountNumber}
                               error={formProps.touched.bankAccountNumber && formProps.errors.bankAccountNumber}/>
            </div>

            <div className="my-4">
                <TextFormField label="Bank Name and Branch"
                               name="bankName"
                               onChange={formProps.handleChange}
                               onBlur={formProps.handleBlur}
                               value={formProps.values.bankName}
                               error={formProps.touched.bankName && formProps.errors.bankName}/>
            </div>

            <div className="my-4">
                <TextFormField label="Mobile Money Number"
                               name="momoNumber"
                               onChange={formProps.handleChange}
                               onBlur={formProps.handleBlur}
                               value={formProps.values.momoNumber}
                               error={formProps.touched.momoNumber && formProps.errors.momoNumber}/>
            </div>

            <div className="my-4">
                <TextFormField label="Mobile Money Names"
                               name="momoNames"
                               onChange={formProps.handleChange}
                               onBlur={formProps.handleBlur}
                               value={formProps.values.momoNames}
                               error={formProps.touched.momoNames && formProps.errors.momoNames}/>
            </div>

        </div>

                    <div className="float-right my-4">
                <span >
                    <Button label="Back" type="submit" severity="secondary" size="small" outlined onClick={()=>prev(formProps.values)}/>
                </span>
                        <span className="mx-2">
                  <Button label="Next" type="submit" severity="secondary" size="small" className="mx-2" />
                </span>

                    </div>
                    <Divider type="dashed"/>
                </Form>
                    )}
        </Formik>
    </>
  );
}

