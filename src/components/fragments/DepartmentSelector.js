import {Dropdown} from "primereact/dropdown";
import React, {useEffect, useState} from "react";
import apiService from "../../helpers/apiService";

const DepartmentSelector =({onChange, value ,name, label, error})=>{
    const [data, setData] = useState([])

    const getCounties = () => {
        apiService.get(`departments`).then((response) => {
            if (response.statusCode === 200){
                setData(response.data)
            }
        }).catch((error) => {
            console.log(error.message)
        })
    }

    useEffect(()=>{
        getCounties()
    },[])
    
    return (
        <>
            <div>{label}</div>
            <div>
                <Dropdown value={value}
                          options={data}
                          name={name}
                          onChange={onChange}
                          optionLabel="name"
                          optionValue="id"
                          placeholder="Select Department"
                          className="w-full"/>
            </div>
            <div className="text-danger">{error}</div>

        </>
    )
}
export default DepartmentSelector;
