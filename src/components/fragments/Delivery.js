import {Dropdown} from "primereact/dropdown";
import React, {useEffect, useState} from "react";
import apiService from "../../helpers/apiService";

const CategorySelector =({onChange, value, name, label, error})=>{
    const [data, setData] = useState([])

    const getCategory = () => {
        apiService.get(`items/categories`).then((response) => {
            if (response.status === 200){
                // setData(response.data)
            }
        }).catch((error) => {
            console.log(error.message)
        })
    }
    useEffect(()=>{
        getCategory()
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
                          optionValue="categoryId"
                          placeholder="Select Category"
                          className="w-full"/>
            </div>
            <div className="text-danger">{error}</div>

        </>
    )
}
export default CategorySelector;
