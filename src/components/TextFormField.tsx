import React, { ChangeEvent } from 'react';
import {InputText} from "primereact/inputtext";
import { FormikErrors } from 'formik';

interface TextFormFieldProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  label: string;
  value: string;
  name?: string;
  id?: string;
  placeHolder: string;
  error?: string | string[] | React.ReactNode | FormikErrors<any> | FormikErrors<any>[] | false | undefined;
  disabled?: boolean;
}

const TextFormField: React.FC<TextFormFieldProps> = ({
  onChange,
  onBlur,
  label,
  value,
  name,
  id,
  placeHolder,
  error,
  disabled
}) => {
    return (
        <>
            <div ><label style={{fontSize: 'small'}} htmlFor={id}>{label}</label></div>
            <div>
                <InputText  id={id} 
                            name={name} 
                            placeholder={placeHolder}
                            onChange={onChange}
                            onBlur={onBlur}
                            disabled={disabled}
                            value={value} 
                            className="w-full"/>
            </div>
            <div className="text-danger" style={{fontSize: 'x-small'}}>{error && typeof error === 'string' && <div>{error}</div>}</div>
        </>


    )
}
export default TextFormField
