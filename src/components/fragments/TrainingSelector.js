import {Dropdown} from "primereact/dropdown";
import React from "react";

const TrainingSelector =({onChange, value,name, label, error})=>{
    const gender = [
        {name: 'YET', code: 'YET'},
        {name: 'OPS', code: 'OPS'},
        {name: 'TOT', code: 'TOT'},
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
                          optionValue="code"
                          showClear
                          placeholder="Select Training"
                          className="w-full"/>
            </div>
            <div className="text-danger">{error}</div>

        </>
    )
}
export default TrainingSelector
