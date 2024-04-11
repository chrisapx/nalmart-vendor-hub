import {Dropdown} from "primereact/dropdown";
import React, {useEffect, useState} from "react";
import apiService from "../../helpers/apiService";

const DistrictSelector =({onChange, value,name, label, error, regionId})=>{
    const [data, setData] = useState([])

    const getDistricts = () => {
        apiService.get(regionId ? `districts?regionId=${regionId}` : `districts`).then((response) => {
            if (response.statusCode === 200){
                setData(response.data)
            }
        }).catch((error) => {
            console.log(error.message)
        })
    }
    useEffect(()=>{
        getDistricts()
    },[regionId])
    return (
        <>
            <div>{label}</div>
            <div>
                <Dropdown value={value}
                          options={data}
                          name={name}
                          onChange={onChange}
                          optionLabel="name"
                          showClear
                          optionValue="id"
                          placeholder="Select District"
                          className="w-full"/>
            </div>
            <div className="text-danger">{error}</div>

        </>
    )
}
export default DistrictSelector
