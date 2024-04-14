import React, {useState} from "react";

import * as Yup from "yup";
import { Form, Formik} from "formik";
import {Button} from "primereact/button";
import {Divider} from "primereact/divider";
import { Dialog } from "primereact/dialog";
import { phoneRegex } from "@/helpers/Config";
import TextFormField from "@/components/TextFormField";
import { useToast } from "@/components/ToastWrapper/ToastProvider";
import CustomLoader from "@/components/Loader/CustomLoader";
import apiService from "@/helpers/apiService";
import type { IUser } from '@/app/interfaces';

interface UserFormProps {
  show: boolean;
  toggle: (option: boolean) => void;
}

const validationSchema = Yup.object({
    
    username: Yup.string().required("User Name is required"),
    password: Yup.string().required("Password is required"),
    firstname: Yup.string().required("First Name is required"),
    lastname: Yup.string().required("Last Name is required"),
    phone: Yup.string().required("Phone Number is required").matches(phoneRegex,'Phone number is not valid'),
    email: Yup.string().email("Please enter a valid email").required("Email is required"),
    
    
});
const UserForm: React.FC<UserFormProps> = ({ show, toggle }) => {
    
    const { showSuccess, showError } = useToast();
    const [ loading, setLoading ] = useState(false);
    const [ data, setData ] = useState<IUser>({
        username: "",
        password: "",
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        image: "",
        roles: [],
    });
    const handleSubmit = ( values: IUser ) => {
        setLoading(true);

        apiService.post(`users/u1`, values, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            if (response.statusCode !== 200){
                return showError(response.message)
            }
            showSuccess(response.message)
            setLoading(false);
            toggle(false);
        }).catch((error) => {
            showError(error.message)
            setLoading(false);
        })
    };


  return (
    <>
        <Dialog header="New User" visible={show} style={{ width: '60vw' }} onHide={() => toggle(false)}>
            <Formik validationSchema={validationSchema} initialValues={data} onSubmit={handleSubmit} >
                {(formProps) => (
                    <Form>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                            
                                <TextFormField  label="User Name"
                                                name="username"
                                                placeHolder="Enter username"
                                                onChange={formProps.handleChange}
                                                onBlur={formProps.handleBlur}
                                                value={formProps.values.username}
                                                error={formProps.touched.username && formProps.errors.username}/>
                            </div>
                            <div>
                            
                                <TextFormField  label="Password"
                                                name="password"
                                                placeHolder="Enter password"
                                                onChange={formProps.handleChange}
                                                onBlur={formProps.handleBlur}
                                                value={formProps.values.password}
                                                error={formProps.touched.password && formProps.errors.password}/>
                            </div>
                            <div>
                            
                                <TextFormField  label="First Name"
                                                name="firstname"
                                                placeHolder="Enter first name"
                                                onChange={formProps.handleChange}
                                                onBlur={formProps.handleBlur}
                                                value={formProps.values.firstname}
                                                error={formProps.touched.firstname && formProps.errors.firstname}/>
                            </div>

                            <div>
                                <TextFormField  label="Last Name"
                                            name="lastname"
                                            placeHolder="Enter last name"
                                            onChange={formProps.handleChange}
                                            onBlur={formProps.handleBlur}
                                            value={formProps.values.lastname}
                                            error={formProps.touched.lastname && formProps.errors.lastname}/>
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
                                            name="phone"
                                            placeHolder="Enter a valid phone number"
                                            onChange={formProps.handleChange}
                                            onBlur={formProps.handleBlur}
                                            value={formProps.values.phone}
                                            error={formProps.touched.phone && formProps.errors.phone} />
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

export default UserForm;