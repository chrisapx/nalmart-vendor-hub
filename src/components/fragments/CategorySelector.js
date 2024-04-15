import {Dropdown} from "primereact/dropdown";
import React, {useEffect, useState} from "react";
import apiService from "../../helpers/apiService";

const CategorySelector =({onChange, value, name, label, error})=>{
    const [data, setData] = useState([])

    const getCategory = () => {
        apiService.get(`categories`).then((response) => {
            if (response.status === 200){
                console.log("Categories are" + response.data);
                setData(response.data)
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
                          optionValue="categoryID"
                          placeholder="Select Category"
                          className="w-full"/>
            </div>
            <div className="text-danger" style={{fontSize: 'small'}}>{error}</div>

        </>
    )
}
export default CategorySelector;
