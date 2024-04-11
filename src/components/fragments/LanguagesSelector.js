import React, {useEffect, useState} from "react";
import {MultiSelect} from "primereact/multiselect";
import apiService from "../../helpers/apiService";

const LanguagesSelector =({setLanguages, selectedLanguages,name,error})=>{
    const [data, setData] = useState([])

    const getLanguages = () => {
        apiService.get(`languages`).then((response) => {
            if (response.statusCode === 200){
                setData(response.data)
            }
        }).catch((error) => {
            console.log(error.message)
        })
    }
    useEffect(()=>{
        getLanguages()
    },[])
    return (
        <>
            <div>Languages</div>
            <div>
                <MultiSelect value={selectedLanguages}
                             name={name}
                             onChange={(e) => setLanguages(e.value)}
                             options={data} optionLabel="name"
                             optionValue="id"
                             placeholder="Select Skills"
                             maxSelectedLabels={3}
                             className="w-full md:w-20rem" />
            </div>
            <div className="text-danger">{error}</div>

        </>
    )
}
export default LanguagesSelector
