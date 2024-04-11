import {Dropdown} from "primereact/dropdown";
import React, {useEffect, useState} from "react";
import apiService from "../../helpers/apiService";

const SubCategorySelector =({onChange, value, name, label, error, categoryId})=>{
    const [data, setData] = useState([])

    const getCategory = () => {
        apiService.get(`items/sub-category/${categoryId}`).then((response) => {
            if (response.status === 200){
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
                          optionValue="subCategoryId"
                          placeholder="Select Subcategory"
                          className="w-full"/>
            </div>
            <div className="text-danger " style={{fontSize: 'small'}}>{error}</div>

        </>
    )
}
export default SubCategorySelector;
