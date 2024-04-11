import {Dropdown} from "primereact/dropdown";
import React, {useEffect, useState} from "react";
import apiService from "../../helpers/apiService";

const SubCountySelector =({onChange, value,name, label, error, countyId})=>{
    const [data, setData] = useState([])

    const getSubCounties = () => {
        apiService.get(`subcounties?countyId=${countyId}`).then((response) => {
            if (response.statusCode === 200){
                setData(response.data)
            }
        }).catch((error) => {
            console.log(error.message)
        })
    }
    useEffect(()=>{
        if(countyId){
          getSubCounties()
        }
    },[countyId])
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
                          placeholder="Select Sub County"
                          className="w-full"/>
            </div>
            <div className="text-danger">{error}</div>

        </>
    )
}
export default SubCountySelector
