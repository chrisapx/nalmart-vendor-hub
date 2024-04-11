import React, {useEffect, useState} from "react";
import {MultiSelect} from "primereact/multiselect";
import apiService from "../../helpers/apiService";

const SkillsSelector =({setSkills, selectedSkills,name, label, error})=>{
    const [data, setData] = useState([])

    const getSkills = () => {
        apiService.get("skills").then((response) => {
            if (response.statusCode === 200){
                setData(response.data)
            }
        }).catch((error) => {
            console.log(error.message)
        })
    }
    useEffect(()=>{
        getSkills()
    },[])
    return (
        <>
            <div>Skills</div>
            <div>
                <MultiSelect value={selectedSkills}
                             name={name}
                             onChange={(e) => setSkills(e.value)}
                             options={data}
                             optionLabel="name"
                             optionValue="id"
                             // display="chip"
                             placeholder="Select Skills"
                             maxSelectedLabels={3}
                             className="w-full md:w-20rem" />
            </div>
            <div className="text-danger">{error}</div>

        </>
    )
}
export default SkillsSelector
