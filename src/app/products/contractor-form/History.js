import React, {useState} from "react";

import * as Yup from "yup";
import { Form, Formik} from "formik";
import {Button} from "primereact/button";
import {Divider} from "primereact/divider";
import PastOpportunities from "./PastOpportunities";
const validationSchema = Yup.object({
});

export default function History({data, next,prev}) {
    const [pastOpportunities, setPastOpportunities] = useState(data.pastOpportunities);
    const [opportunityFiles, setOpportunityFiles] = useState(data.opportunityFiles);

    const handleSubmit = (values) => {
        const modifiedValues = {
            ...values,
            pastOpportunities: pastOpportunities,
            opportunityFiles: opportunityFiles
        }
        next(modifiedValues);

        console.log('form values: ',modifiedValues)
    };

    const handlePrev=(values)=>{
        const modifiedValues = {
            ...values,
            pastOpportunities: pastOpportunities,
            opportunityFiles: opportunityFiles
        }
        prev(modifiedValues)
    }

    const handlePastOpportunities=(event, files)=>{
        setPastOpportunities(event)
        setOpportunityFiles(files)
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
        <div className="">
            <PastOpportunities data={pastOpportunities} onChange={handlePastOpportunities}/>
            <div className="float-right my-4">
                <span >
                    <Button label="Back" type="submit" severity="secondary" size="small" outlined onClick={()=>handlePrev(formProps.values)}/>
                </span>
                <span className="mx-2">
                  <Button label="Next" type="submit" severity="secondary" size="small" className="mx-2" />
                </span>

            </div>
        </div>

                    <Divider type="dashed"/>

                </Form>
                    )}
        </Formik>
    </>
  );
}

