import {Dropdown} from "primereact/dropdown";
import React, {useEffect, useState} from "react";
import {sendGetToServer} from "../../helpers/RemoteHelper";
import apiService from "../../helpers/apiService";
import {endpoints} from "../../helpers/endpoints";

const RegionSelector =({onChange, value,name, label, error})=>{
    const [data, setData] = useState([])

    const getRegions = () => {
        apiService.get("regions").then((response) => {
            if (response.statusCode === 200){
                setData(response.data)
            }
        }).catch((error) => {
            console.log(error.message)
        })
    }
    useEffect(()=>{
        getRegions()
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
                          placeholder="Select Region"
                          className="w-full"/>
            </div>
            <div className="text-danger">{error}</div>

        </>
    )
}
export default RegionSelector
