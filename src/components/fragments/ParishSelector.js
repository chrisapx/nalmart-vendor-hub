import {Dropdown} from "primereact/dropdown";
import React, {useEffect, useState} from "react";
import {sendGetToServer} from "../../helpers/RemoteHelper";
import apiService from "../../helpers/apiService";

const ParishSelector =({onChange, value,name, label, error, subcountyId})=>{
    const [data, setData] = useState([])

    const getParishes = () => {
        apiService.get(`parishes?subCountyId=${subcountyId}`).then((response) => {
            if (response.statusCode === 200){
                setData(response.data)
            }
        }).catch((error) => {
            console.log(error.message)
        })
    }
    useEffect(()=>{
        if (subcountyId){
            getParishes()
        }
    },[subcountyId])
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
                          placeholder="Select parish"
                          className="w-full"/>
            </div>
            <div className="text-danger">{error}</div>

        </>
    )
}
export default ParishSelector
