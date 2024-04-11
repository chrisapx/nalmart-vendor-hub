import React, {useState} from "react";

import {Button} from "primereact/button";
import DatePicker from "../../../components/fragments/DatePicker";
import {Divider} from "primereact/divider";
import TextFormField from "../../../components/TextFormField";
import {Dropdown} from "primereact/dropdown";
import {Checkbox} from "primereact/checkbox";
import ProjectsSelector from "../../../components/fragments/ProjectsSelector";
import FilePicker from "../../../components/fragments/FilePicker";

export default function PastOpportunities({data,onChange}) {
    const [rowsData, setRowsData] = useState(data);
    const [contractFiles, setContractFiles] = useState([]);

    const addTableRows = ()=>{
        setRowsData([...rowsData, {
            projectId: null,
            role: '',
            attendedYeT: false,
            YeTdate: null,
            attendedOpsToT: false,
            opsToTdate: null,
            attendedToT: false,
            ToTdate: null,
            contractSigned: false,
            contractSigningDate: null,
            contractStatus: false,
        }])
        onChange(rowsData, contractFiles)
    }
    const deleteTableRows = (index)=>{
        const rows = [...rowsData];
        rows.splice(index, 1);
        setRowsData(rows);
        onChange(rowsData, contractFiles)
    }
    const handlePastOpportunityChange = (index, evnt)=>{
        const { name, value } = evnt.target;
        const rowsInput = [...rowsData];
        rowsInput[index][name] = value;
        setRowsData(rowsInput);
        onChange(rowsData, contractFiles)
    }
    const handleCheckboxChange = (index, evnt)=>{
        const { name } = evnt.target;
        const rowsInput = [...rowsData];
        rowsInput[index][name] = evnt.target.checked;
        setRowsData(rowsInput);
        onChange(rowsData, contractFiles)
    }

    const handleContractUploadChange = (index, evnt)=>{
        contractFiles.push({contract: evnt.target.files[0]})
       /* const { name } = evnt.target;
        const rowsInput = [...rowsData];
        rowsInput[index][name] = evnt.target.files[0];
        setRowsData(rowsInput);*/
        onChange(rowsData, contractFiles)
    }
    const contractStatus = [
        {name: 'Signed'},
        {name: 'Terminated'},
        {name: 'Pending Signing'},
    ]
  return (
    <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <h4>Past Opportunities</h4>
            </div>
            <div>
                    <span className="float-right">
                      <Button label="Add Past Opportunities" type="button" severity="primary" text raised size="small" onClick={addTableRows}/>
                    </span>
            </div>
        </div>
        {  rowsData.map((opportunity, index)=>
            <>
                <Divider type="dashed"><span className="text-danger">Opportunity #{index+1}</span></Divider>
                <div className="grid grid-cols-3 md:grid-cols-3 gap-4 my-4" key={index}>
                    <div>
                        <Checkbox
                            id="c1"
                            inputId="yet"
                            name="attendedYeT"
                            checked={opportunity.attendedYeT}
                            onChange={(e)=>handleCheckboxChange(index,e)}
                        ></Checkbox>
                        <label htmlFor="yet" className="mx-2">Attended YET Training</label>
                    </div>
                    {opportunity.attendedYeT &&
                    <div>
                        <DatePicker name="YeTdate"
                                    label="YET Date"
                                    placeholder="Select date"
                                    value={opportunity.YeTdate}
                                    onChange={(e)=>handlePastOpportunityChange(index, e)}
                        />
                    </div>
                    }
                    <div>
                        <Checkbox
                            id="c2"
                            inputId="opp"
                            name="attendedOpsToT"
                            checked={opportunity.attendedOpsToT}
                            onChange={(e)=>handleCheckboxChange(index,e)}
                        ></Checkbox>
                        <label htmlFor="opp" className="mx-2">Attended OppsToT Training</label>
                    </div>
                    {opportunity.attendedOpsToT &&
                    <div>
                        <DatePicker name="opsToTdate"
                                    label="OppsTOT Date"
                                    placeholder="Select date"
                                    value={opportunity.opsToTdate}
                                    onChange={(e)=>handlePastOpportunityChange(index, e)}
                        />

                    </div>
                    }

                    <div>
                        <Checkbox
                            id="c3"
                            inputId="tot"
                            name="attendedToT"
                            checked={opportunity.attendedToT}
                            onChange={(e)=>handleCheckboxChange(index,e)}
                        ></Checkbox>
                        <label htmlFor="tot" className="mx-2">Attended ToT Training</label>
                    </div>
                    {opportunity.attendedToT &&
                    <div>
                        <DatePicker name="ToTdate"
                                    label="TOT Date"
                                    placeholder="Select date"
                                    value={opportunity.ToTdate}
                                    onChange={(e)=>handlePastOpportunityChange(index, e)}
                        />
                    </div>
                    }

                    <div>
                        <Checkbox
                            id="c4"
                            inputId="contra"
                            name="contractSigned"
                            checked={opportunity.contractSigned}
                            onChange={(e)=>handleCheckboxChange(index,e)}
                        ></Checkbox>
                        <label htmlFor="contra" className="mx-2">Contract Signed</label>
                    </div>
                    {opportunity.contractSigned &&
                    <div>
                        <DatePicker name="contractSigningDate"
                                    label="Contract Signing Date"
                                    placeholder="Select date"
                                    value={opportunity.contractSigningDate}
                                    onChange={(e)=>handlePastOpportunityChange(index, e)}
                        />
                    </div>
                    }

                    <div>
                        <label htmlFor="educLevel">Contract Status</label>
                        <Dropdown options={contractStatus}
                                  name="contractStatus"
                                  onChange={(e)=>handlePastOpportunityChange(index,e)}
                                  value={opportunity.contractStatus}
                                  optionLabel="name"
                                  optionValue="name"
                                  placeholder="Select status"
                                  className="w-full"/>
                    </div>
                    <div>
                        <TextFormField label="Role"
                                       name="role"
                                       placeHolder="Enter role"
                                       onChange={(e)=>handlePastOpportunityChange(index,e)}
                                       value={opportunity.role} />
                    </div>

                    <div>
                        <ProjectsSelector name="projectId"
                                          label="Project"
                                          onChange={(e)=>handlePastOpportunityChange(index,e)}
                                          value={opportunity.projectId}
                        />
                    </div>
                    <div>
                        <FilePicker label="Contract"
                                    name="contract"
                                    onChange={(e)=>handleContractUploadChange(index, e)} />
                    </div>

                    <div className="my-6">
                            <span className="mt-4">
                               <Button icon="pi pi-minus" severity="danger" onClick={()=>deleteTableRows(index)}/>
                            </span>
                    </div>
                </div>
            </>
        )}
    </>
  );
}

