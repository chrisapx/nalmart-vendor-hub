import React from "react";
import {InputText} from "primereact/inputtext";

const TextFormField =({onChange,onBlur, label,value, name,id,placeHolder, error, disabled })=>{

    return (
        <>
            <div ><label style={{fontSize: 'small'}} htmlFor={id}>{label}</label></div>
            <div>
                <InputText id={id} name={name} placeholder={placeHolder}
                           onChange={onChange}
                           onBlur={onBlur}
                           disabled={disabled}
                           value={value} className="w-full"/>
            </div>
            <div className="text-danger" style={{fontSize: 'x-small'}}>{error}</div>
        </>


    )
}
export default TextFormField
