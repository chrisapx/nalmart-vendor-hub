import React, {useState} from "react";

import * as Yup from "yup";
import { Form, Formik} from "formik";
import {Button} from "primereact/button";
import {Divider} from "primereact/divider";
import { Dialog } from "primereact/dialog";
import TextFormField from "@/components/TextFormField";
import apiService from "@/helpers/apiService";
import { useToast } from "@/components/ToastWrapper/ToastProvider";
import CustomLoader from "@/components/Loader/CustomLoader";

const validationSchema = Yup.object({
    name: Yup.string().required("Department Name is required"),
});

export default function DepartmentForm({ show, toggle}) {
    
    const { showSuccess, showError } = useToast();
    const [ loading, setLoading ] = useState(false);
    const [ data, setData ] = useState({ name: "" });

    const handleSubmit = (values) => {
        setLoading(true);
        apiService.post(`departments`, values, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then((response) => {

            if (response.statusCode !== 200){
                return showError(response.message)
            }
            showSuccess(response.message)
            setLoading(false);
            toggle(false);
        }).catch((error) => {
            setLoading(false);
            showError(error.message)
        })
    };

  return (
    <>
        <Dialog header="New Department" visible={show} onHide={() => toggle(false)}>
            <Formik validationSchema={validationSchema} initialValues={data} onSubmit={handleSubmit} >
                {(formProps) => (
                    <Form>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                            
                                <TextFormField  label="Department Name"
                                                name="name"
                                                placeHolder="Enter department name"
                                                onChange={formProps.handleChange}
                                                onBlur={formProps.handleBlur}
                                                value={formProps.values.name}
                                                error={formProps.touched.name && formProps.errors.name}/>
                            </div>
       
                        </div>
                        <Divider type="dashed"/>
                            <div className="float-right my-4">
                                <Button label="Save" type="submit" severity="secondary" size="small" />
                            </div>
                        <Divider type="dashed"/>
                    </Form>
                    )}
            </Formik>
            <CustomLoader loading={loading}/>
        </Dialog>
    </>
  );
}

