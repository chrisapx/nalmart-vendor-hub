import {Dropdown} from "primereact/dropdown";
import React, {useEffect, useState} from "react";
import {sendGetToServer} from "../../helpers/RemoteHelper";

const OpportunitySelector =({onChange, value,name, label, error})=>{
    const [data, setData] = useState([])

    const getOpportunities = () => {
        sendGetToServer('')
            .then((response) => {
                if (response.returnCode === 0){
                    setData(response.returnObject.rows)
                }
            }).catch((error)=>{
            console.log(error)
        })
    }
    useEffect(()=>{
        /*getOpportunities()*/
        setData([
            {name: 'Opp 1', id: 1},
            {name: 'Opp 2', id: 2},
        ])
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
                          placeholder="Select Opportunity"
                          className="w-full"/>
            </div>
            <div className="text-danger">{error}</div>

        </>
    )
}
export default OpportunitySelector
