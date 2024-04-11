import React, {useEffect, useRef, useState} from "react";
import * as Yup from "yup";
import { Form, Formik} from "formik";
import {Button} from "primereact/button";
import {Rating} from "primereact/rating";
import {InputTextarea} from "primereact/inputtextarea";
import {Divider} from "primereact/divider";
const validationSchema = Yup.object({
    /*rating: Yup.number().required("Rating is required"),
    comment: Yup.string().required("Comment is required"),*/
});

export default function Ratings({data, next,prev}) {
    const [ratingData, setRatingData] = useState(data.ratings);
    const addRating = ()=>{
        setRatingData([...ratingData, {
            rating: null,
            comment: ''
        }])
    }
    const deleteRating = (index)=>{
        const rows = [...ratingData];
        rows.splice(index, 1);
        setRatingData(rows);
    }
    const handleRatingChange = (index, evnt)=>{
        const { name, value } = evnt.target;
        const rowsInput = [...ratingData];
        rowsInput[index][name] = value;
        setRatingData(rowsInput);
    }


    const handleSubmit = (values) => {
        const modifiedValues = {
            ...values,
            ratings: ratingData
        }
        next(modifiedValues);

        console.log('form values: ',modifiedValues)
    };

    const handlePrev=(values)=>{
        const modifiedValues = {
            ...values,
            ratings: ratingData
        }
        prev(modifiedValues)
    }
  return (
    <>
        <Formik
            /*validationSchema={validationSchema}*/
            initialValues={data}
            onSubmit={handleSubmit}
        >
            {(formProps) => (
                <Form>
                    <span className="float-right">
                      <Button label="Add Rating" type="button" severity="primary" text raised size="small" onClick={addRating}/>
                    </span>
                    {  ratingData.map((item, index)=>
                            <>
                                <Divider type="dashed"><span className="text-danger">Rating #{index+1}</span></Divider>
                                <div key={index}>
                                    <div className="my-4">
                                        <div>Rating</div>
                                        <Rating value={item.rating}
                                                name="rating"
                                                onChange={(e)=>handleRatingChange(index, e)}/>
                                    </div>

                                    <div className="my-4">
                                        <div>Comment</div>
                                        <InputTextarea value={item.comment}
                                                       name="comment"
                                                       onChange={(e)=>handleRatingChange(index, e)}
                                                       placeholder="Write a comment about this rating"
                                                       rows={5}
                                                       cols={30} />
                                    </div>

                                    <div className="my-4">
                                        <span className="mt-4">
                               <Button icon="pi pi-minus" severity="danger" onClick={()=>deleteRating(index)}/>
                            </span>
                                    </div>
                                </div>
                            </>
                    )}
                    <Divider type="dashed"/>
                    <div className="float-right my-4">
                <span >
                    <Button label="Back" type="submit" severity="secondary" size="small" outlined onClick={()=>handlePrev(formProps.values)}/>
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

