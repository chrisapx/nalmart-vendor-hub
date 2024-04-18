import React, {useState} from "react";
import Cookies from "js-cookie";
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
    username: Yup.string().required("Username is required"), 
    roleName: Yup.string().required("Rolename is required"), 
});

export default function UserRoleForm({ show, toggle}) {
    
    const { showSuccess, showError } = useToast();
    const [ loading, setLoading ] = useState(false);
    const [ data, setData ] = useState({ username: "", roleName: "" });

    const handleSubmit = (values) => {
    setLoading(true);

    const roleName = encodeURIComponent(values.roleName);
    const username = encodeURIComponent(values.username);

    const url = `http://localhost:8080/users/role?roleName=${roleName}&username=${username}`;
    const token = Cookies.get('token');
    const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    };

    fetch(url, requestOptions)
        .then(response => {
            if (!response.ok) {
                return response.json().then(error => {
                    throw new Error(error.message);
                });
            }
            return response.json();
        })
        .then(data => {
            showSuccess(data.message);
            setLoading(false);
            toggle(false);
        })
        .catch(error => {
            setLoading(false);
            showError(error.message);
        });
};


  return (
    <>
        <Dialog header="Asign User Role" visible={show} onHide={() => toggle(false)}>
            <Formik validationSchema={validationSchema} initialValues={data} onSubmit={handleSubmit} >
                {(formProps) => (
                    <Form>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                            
                                <TextFormField  label="Username"
                                            name="username"
                                            placeHolder="Enter Username"
                                            onChange={formProps.handleChange}
                                            onBlur={formProps.handleBlur}
                                            value={formProps.values.username}
                                            error={formProps.touched.username && formProps.errors.username}/>
                            </div>

                            <div>
                            
                                <TextFormField  label="Role Name"
                                            name="roleName"
                                            placeHolder="Enter Role name"
                                            onChange={formProps.handleChange}
                                            onBlur={formProps.handleBlur}
                                            value={formProps.values.roleName}
                                            error={formProps.touched.roleName && formProps.errors.roleName}/>
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

