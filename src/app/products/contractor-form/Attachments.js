import React from "react";

import * as Yup from "yup";
import { Form, Formik} from "formik";
import {Button} from "primereact/button";
import {Divider} from "primereact/divider";
import FilePicker from "../../../components/fragments/FilePicker";
const validationSchema = Yup.object({
    resume: Yup.string().required("Resume is required"),
    idDoc: Yup.string().required("Id Image is required"),
    /*contract: Yup.string().required("Contract is required"),*/
    recommendationLetter: Yup.string().required("Recommendation Letter is required"),
});

export default function Attachments({data, next,prev}) {
    const handleSubmit = (values) => {
        next(values,true);
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
                <FilePicker label="Resume"
                            onChange={(e)=>formProps.setFieldValue('resume',e.target.files[0])}
                            error={formProps.touched.resume && formProps.errors.resume}
                />
            </div>

            <div className="my-4">
                <FilePicker label="National ID"
                            onChange={(e)=>formProps.setFieldValue('idDoc',e.target.files[0])}
                            error={formProps.touched.idDoc && formProps.errors.idDoc}
                />
            </div>

            <div className="my-4">
                <FilePicker label="Contract"
                            onChange={(e)=>formProps.setFieldValue('contract',e.target.files[0])}
                            error={formProps.touched.contract && formProps.errors.contract}
                />
            </div>

            <div className="my-4">
                <FilePicker label="Recommendation Later"
                            onChange={(e)=>formProps.setFieldValue('recommendationLetter',e.target.files[0])}
                            error={formProps.touched.recommendationLetter && formProps.errors.recommendationLetter}
                />
            </div>

        </div>

                    <div className="float-right my-4">
                <span >
                    <Button label="Back" type="submit" severity="secondary" size="small" outlined onClick={()=>prev(formProps.values)}/>
                </span>
                        <span className="mx-2">
                  <Button label="Submit" type="submit" severity="secondary" size="small" className="mx-2" />
                </span>

                    </div>
                    <Divider type="dashed"/>
                </Form>
                    )}
        </Formik>
    </>
  );
}

