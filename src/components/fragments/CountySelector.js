import {Dropdown} from "primereact/dropdown";
import React, {useEffect, useState} from "react";
import {sendGetToServer} from "../../helpers/RemoteHelper";
import apiService from "../../helpers/apiService";

const CountySelector =({onChange, value,name, label, error, districtId})=>{
    const [data, setData] = useState([])

    const getCounties = () => {
        apiService.get(`counties?districtId=${districtId}`).then((response) => {
            if (response.statusCode === 200){
                setData(response.data)
            }
        }).catch((error) => {
            console.log(error.message)
        })
    }
    useEffect(()=>{
        if (districtId){
            getCounties()
        }
    },[districtId])
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
                          placeholder="Select County"
                          className="w-full"/>
            </div>
            <div className="text-danger">{error}</div>

        </>
    )
}
export default CountySelector
