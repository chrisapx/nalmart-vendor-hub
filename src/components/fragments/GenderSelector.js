import {Dropdown} from "primereact/dropdown";
import React, {useEffect, useState} from "react";

const GenderSelector =({onChange, value,name, label, error})=>{
    const gender = [
        {name: 'Male', code: 'M'},
        {name: 'Female', code: 'F'},
    ]

    return (
        <>
            <div>{label}</div>
            <div>
                <Dropdown value={value}
                          options={gender}
                          name={name}
                          onChange={onChange}
                          optionLabel="name"
                          showClear
                          optionValue="code"
                          placeholder="Select Gender"
                          className="w-full"/>
            </div>
            <div className="text-danger">{error}</div>

        </>
    )
}
export default GenderSelector
