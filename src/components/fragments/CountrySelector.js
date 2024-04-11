import {Dropdown} from "primereact/dropdown";
import React, {useEffect, useState} from "react";
import apiService from "../../helpers/apiService";

const CountrySelector =({onChange, value,name, label, error})=>{
    const [data, setData] = useState([])

    const getCountries = () => {
        apiService.get(`countries`).then((response) => {
            if (response.statusCode === 200){
                setData(response.data)
            }
        }).catch((error) => {
            console.log(error.message)
        })
    }
    useEffect(()=>{
        getCountries()
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
                          placeholder="Select Country"
                          className="w-full"/>
            </div>
            <div className="text-danger">{error}</div>

        </>
    )
}
export default CountrySelector
