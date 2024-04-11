import React, {useState} from "react";

import TextFormField from "../../../components/TextFormField";
import {Button} from "primereact/button";
import {Card} from "primereact/card";
import {Divider} from "primereact/divider";

export default function Referees({data,onChange}) {
    const [referees, setReferees] = useState(data);
    const addReferee = ()=>{
        setReferees([...referees, {name: '', phoneNumber: null, email: null, address: null}])
        onChange(referees)
    }
    const deleteTableRows = (index)=>{
        const rows = [...referees];
        rows.splice(index, 1);
        setReferees(rows);
        onChange(referees)
    }
    const handleRefereeChange = (index, evnt)=>{
        const { name, value } = evnt.target;
        const rowsInput = [...referees];
        rowsInput[index][name] = value;
        setReferees(rowsInput);
        onChange(referees)
    }
  return (
    <>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <h4>Referees</h4>
                </div>
                <div>
                    <span className="float-right">
                       <Button icon="pi pi-plus" severity="secondary" outlined raised label="Add Referee" type="button" size="small" onClick={addReferee}/>
                    </span>
                </div>
            </div>
            {  referees.map((ref, index)=>
                <>
                    <Divider type="dashed"><span className="text-danger">Referees #{index+1}</span></Divider>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 my-4" key={index}>
                        <div>
                            <TextFormField  label="Name"
                                            name="name"
                                            placeHolder="Enter referee name"
                                            onChange={(e)=>handleRefereeChange(index, e)}
                                            value={ref.name}/>
                        </div>
                        <div>
                            <TextFormField  label="Phone Number"
                                            name="phoneNumber"
                                            placeHolder="Enter referee phone"
                                            onChange={(e)=>handleRefereeChange(index, e)}
                                            value={ref.phoneNumber}/>
                        </div>

                        <div>
                            <TextFormField  label="Email"
                                            name="email"
                                            placeHolder="Enter referee email"
                                            onChange={(e)=>handleRefereeChange(index, e)}
                                            value={ref.email}/>
                        </div>

                        <div>
                            <TextFormField  label="Address"
                                            name="address"
                                            placeHolder="Enter referee address"
                                            onChange={(e)=>handleRefereeChange(index, e)}
                                            value={ref.address}/>
                        </div>
                        <div className="mt-6">
                            <span className="mt-4">
                               <Button icon="pi pi-minus" severity="danger" size="small" onClick={()=>deleteTableRows(index)}/>
                            </span>
                        </div>
                    </div>
                    <Divider/>
                </>

            )}
    </>
  );
}

