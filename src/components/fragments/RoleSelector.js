import {Dropdown} from "primereact/dropdown";
import React, {useEffect, useState} from "react";
import apiService from "../../helpers/apiService";

const RoleSelector =({onChange, value ,name, label, error})=>{
    const [data, setData] = useState([])

    const getRoles = () => {
        apiService.get(`roles`).then((response) => {
            if (response.statusCode === 200){
                setData(response.data)
            }
        }).catch((error) => {
            console.log(error.message)
        })
    }
    useEffect(()=>{
            getRoles()
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
                          placeholder="Select Role"
                          className="w-full"/>
            </div>
            <div className="text-danger">{error}</div>

        </>
    )
}
export default RoleSelector;
