
import React from "react";
import {Calendar} from "primereact/calendar";
const FilePicker =({onChange, value,name, label,placeholder, error})=>{

    return (
        <>
            <div>
                <label htmlFor="date" >
                    {label}
                </label>
            </div>
            <div>
                <Calendar value={value}
                          name={name}
                          placeholder={placeholder}
                          onChange={onChange} className="w-full"/>
            </div>
            <div className="text-danger">{error}</div>

        </>
    )
}
export default FilePicker
