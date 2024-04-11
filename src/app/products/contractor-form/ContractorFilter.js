import React, { useState } from "react";
import { Button } from "primereact/button";
import DistrictSelector from "../../../components/fragments/DistrictSelector";
import GenderSelector from "../../../components/fragments/GenderSelector";
import TrainingSelector from "../../../components/fragments/TrainingSelector";
import {Rating} from "primereact/rating";
import AccountStatusSelector from "../../../components/fragments/AccountStatusSelector";
import TextFormField from "../../../components/TextFormField";

export default function ContractorFilter({setFilter, filter}) {
    const [districtId, setDistrictId] = useState();
    const [gender, setGender] = useState();
    const [training, setTraining] = useState();
    const [rating, setRating] = useState(null);
    const [accountStatus, setAccountStatus] = useState(null);
    const [name, setName] = useState('');

    const handleFilter =()=> {
        setFilter(prevState => ({
            ...prevState,
            districtId,
            gender,
            training,
            rating,
            accountStatusId: accountStatus,
            name
        }));
        filter()
    }
    return (

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
                <AccountStatusSelector label="Status" onChange={(e)=>setAccountStatus(e.target.value)} value={accountStatus}/>
            </div>
            <div>
                <TrainingSelector label="Training" onChange={(e)=>setTraining(e.target.value)} value={training}/>
            </div>
            <div>
                <div>Rating</div>
                <div className="mt-3">
                    <Rating value={rating}
                            onChange={(e) => setRating(e.value)}/>
                </div>
            </div>
            <div>
                <DistrictSelector label="District" onChange={(e)=>setDistrictId(e.target.value)} value={districtId}/>
            </div>
            <div>
                <GenderSelector label="Gender" onChange={(e)=>setGender(e.target.value)} value={gender}/>
            </div>
            <div>
                <TextFormField label="Name"
                               value={name}
                               onChange={(e)=>setName(e.target.value)}
                />
            </div>
            <div className="my-6">
                <Button icon="pi pi-search" type="button" rounded severity="secondary" aria-label="Bookmark" onClick={handleFilter} />
            </div>
        </div>
    );
}
