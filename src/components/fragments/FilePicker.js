
import React from "react";
const FilePicker =({onChange, value,name, label, error})=>{

    return (
        <>
            <div>
                <label htmlFor="file" >
                    {label}
                </label>
            </div>
            <div>
                <input id="file" type="file" onChange={onChange} name={name}/>
            </div>
            <div className="text-danger">{error}</div>

        </>
    )
}
export default FilePicker
