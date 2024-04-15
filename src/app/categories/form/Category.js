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
    name: Yup.string().required("Category name is required"),
});

export default function CategoriesForm({ show, toggle}) {
    
    const { showSuccess, showError } = useToast();
    const [ loading, setLoading ] = useState(false);
    const [ data, setData ] = useState({ name: "" });

    const handleSubmit = (values) => {
        setLoading(true);
        console.log(values);
        apiService.post(`categories`, values, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {

            if (response.status !== 200){
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
        <Dialog header="New Category" visible={show} onHide={() => toggle(false)}>
            <Formik validationSchema={validationSchema} initialValues={data} onSubmit={handleSubmit} >
                {(formProps) => (
                    <Form>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                            
                                <TextFormField  label="Category Name"
                                                name="name"
                                                placeHolder="Enter category name"
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

