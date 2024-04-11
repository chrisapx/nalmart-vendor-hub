import React, {useEffect, useState} from "react";

import {Dropdown} from "primereact/dropdown";
import SkillsSelector from "../../../components/fragments/SkillsSelector";
import LanguagesSelector from "../../../components/fragments/LanguagesSelector";
import * as Yup from "yup";
import { Form, Formik} from "formik";
import TextFormField from "../../../components/TextFormField";
import {Button} from "primereact/button";
import {Divider} from "primereact/divider";
const validationSchema = Yup.object({
    level: Yup.string().required("Education Level is required"),
    languages: Yup.mixed().required("Language is required"),
    skill: Yup.mixed().required("Skill is required"),
    portfolioUrl: Yup.string().url("Please enter a valid URL"),
});

export default function Qualifications({data, next,prev}) {

    const educationLevel = [
        {name: 'Bachelors Degree'},
        {name: 'Masters Degree'},
        {name: 'Certificate'},
    ]

    const handleSubmit = (values) => {
        next(values);
        console.log('Form Values: ', values)
    };



  return (
    <>
        <Formik
            validationSchema={validationSchema}
            initialValues={data}
            onSubmit={handleSubmit}
        >
            {(formProps) => (
                <Form>
        <div className="">
            <div className="my-4">
                <label htmlFor="educLevel">Education Level</label>
                <Dropdown options={educationLevel}
                          id="level"
                          name="level"
                          onChange={formProps.handleChange}
                          onBlur={formProps.handleBlur}
                          value={formProps.values.level}
                          optionLabel="name"
                          optionValue="name"
                          placeholder="Select Education Level"
                          className="w-full"/>
                <div><small className="text-danger">{formProps.touched.level && formProps.errors.level}</small></div>
            </div>

            <div className="my-4">
                <SkillsSelector name="skill" setSkills={(e)=>formProps.setFieldValue('skill',e)} selectedSkills={formProps.values.skill}/>
            </div>

            <div className="my-4">
                <TextFormField label="Portfolio Website"
                               name="portfolioUrl"
                               placeHolder="Enter portfolio link"
                               onChange={formProps.handleChange}
                               onBlur={formProps.handleBlur}
                               value={formProps.values.portfolioUrl}
                               error={formProps.touched.portfolioUrl && formProps.errors.portfolioUrl}/>
            </div>
            <div className="my-4">
                <LanguagesSelector setLanguages={(e)=>formProps.setFieldValue('languages',e)}
                                   name="languages"
                                   selectedLanguages={formProps.values.languages}
                                   error={formProps.touched.languages && formProps.errors.languages}
                />
            </div>

        </div>

                    <div className="float-right my-4">
                <span >
                    <Button label="Back" type="submit" severity="secondary" size="small" outlined onClick={()=>prev(formProps.values)}/>
                </span>
                        <span className="mx-2">
                  <Button label="Next" type="submit" severity="secondary" size="small" className="mx-2" />
                </span>

                    </div>
                    <Divider type="dashed"/>
                </Form>
                    )}
        </Formik>
    </>
  );
}

