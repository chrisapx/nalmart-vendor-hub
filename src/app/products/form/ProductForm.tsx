import React, {useState} from "react";

import * as Yup from "yup";
import { Form, Formik} from "formik";
import {Button} from "primereact/button";
import {Divider} from "primereact/divider";
import { Dialog } from "primereact/dialog";
import TextFormField from "@/components/TextFormField";
import { useToast } from "@/components/ToastWrapper/ToastProvider";
import CustomLoader from "@/components/Loader/CustomLoader";
import CategorySelector from "../../../components/fragments/CategorySelector";
import SubCategorySelector from "../../../components/fragments/SubCategorySelector";
import apiService from "@/helpers/apiService";
import { Editor } from "primereact/editor";
import { Dropdown } from "primereact/dropdown";
import type { IItem, ProductFormProps } from '@/app/interfaces';

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  displayName: Yup.string().required("Display name is required"),
  brand: Yup.string().required(),
  description: Yup.string().required(),
  globalPrice: Yup.number().required("Global price is required"),
  price: Yup.number().required(),
  qty: Yup.string().required(),
  serialNumber: Yup.string().required(),
  vendorID: Yup.number().integer().required(),
//   store: Yup.string().required(),
//   stockCount: Yup.number().integer().required(),
//   ads: Yup.array().of( Yup.object({ url: Yup.string().required() })  ),
//   category: Yup.string().oneOf(["AUTOMOBILE"]).required(),
//   coverPhoto: Yup.object({ url: Yup.string().required() }),
//   details: Yup.array().of( Yup.object({ name: Yup.string().required(), value: Yup.string().required() }) ),
//   discount: Yup.number(),
//   freeDelivery: Yup.boolean(),
//   original: Yup.string().oneOf(["COPY"]).required(),
//   photos: Yup.array().of(
//     Yup.object({
//       url: Yup.string().required()
//     })
//   ),
//   subCategory: Yup.string().required(),
//   type: Yup.string().required(),
//   whatIsInTheBox: Yup.string().required()
});

const ProductForm: React.FC<ProductFormProps> = ({ show, toggle }) => {
    
    const { showSuccess, showError } = useToast();
    const [ loading, setLoading ] = useState(false);
    const [data, setData] = useState<IItem>({
        ads: [],
        approved: false,
        brand: "",
        category: "",
        coverPhoto: { url: ""},
        description: "",
        details: [],
        discount: "",
        freeDelivery: false,
        globalPrice: null,
        name: "",
        displayName: "",
        original: "",
        photos: [],
        price: null,
        qty: "",
        serialNumber: "",
        stockCount: null,
        store: "",
        subCategory: "",
        type: "",
        vendorID: 456,
        whatIsInTheBox: ""
        
    });

    const handleSubmit = (values: IItem) => {
        setLoading(true);
        console.log(values)
        apiService.post(`items/item`, values, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            if (response.statusCode !== 200){
                return showError(response.message)
            }
            showSuccess(response.message)
            setLoading(false);
            toggle(false);
        }).catch((error) => {
            showError(error.message)
            setLoading(false);
        })
    };


  return (
    <>
        <Dialog header="New Product" position="right" visible={show} style={{ width: '60vw' }} onHide={() => {toggle(false);}}>
            <Formik validationSchema={validationSchema} initialValues={data} onSubmit={handleSubmit} >
                {(formProps) => (
                    <Form>
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                
                                    <TextFormField  label="Name"
                                                    name="name"
                                                    placeHolder="Enter product name"
                                                    onChange={formProps.handleChange}
                                                    onBlur={formProps.handleBlur}
                                                    value={formProps.values.name}
                                                    error={formProps.touched.name && formProps.errors.name}/>
                                </div>
                                <div>
                                
                                    <TextFormField  label="Display Name"
                                                    name="displayName"
                                                    placeHolder="Enter display name"
                                                    onChange={formProps.handleChange}
                                                    onBlur={formProps.handleBlur}
                                                    value={formProps.values.displayName}
                                                    error={formProps.touched.displayName && formProps.errors.displayName}/>
                                </div>
                                <div>
                                    <CategorySelector label="Category"
                                                    name="category"
                                                    onChange={formProps.handleChange}
                                                    // onBlur={formProps.handleBlur}
                                                    value={formProps.values.category}
                                                    error={formProps.touched.category && formProps.errors.category}
                                    />
                                </div>
                                <div>
                                    <SubCategorySelector label="Sub Category"
                                                    name="subCategory"
                                                    categoryId={formProps.values.category}
                                                    onChange={formProps.handleChange}
                                                    // onBlur={formProps.handleBlur}
                                                    value={formProps.values.subCategory}
                                                    error={formProps.touched.subCategory && formProps.errors.subCategory}
                                    />
                                </div>
                                
                                <div>
                                    {"Free delivery"}
                                    <div>
                                        <Dropdown 
                                            value={formProps.values.freeDelivery}
                                            options={[
                                                { id: "Free Delivery", value: true }, 
                                                { id: "Paid Delivery", value: false }
                                            ]}
                                            name={"Free delivery"}
                                            onChange={(e) => formProps.setFieldValue("freeDelivery", e.value)}
                                            optionLabel="id"
                                            optionValue="value"
                                            placeholder="Select Delivery Option"
                                            className="w-full"
                                        />
                                    </div>
                                    <div className="text-danger" style={{fontSize: 'small'}}>
                                        {formProps.touched.freeDelivery && formProps.errors.freeDelivery}
                                    </div>
                                </div>
                                
                                <div>
                                    {"Type ( New or Second hand)"}
                                    <div>
                                        <Dropdown 
                                            value={formProps.values.type}
                                            options={[
                                                { id: "Boxed ( Brand New )", value: "NEW",  }, 
                                                { id: "Second Hand", value: "USED",  }
                                            ]}
                                            name={"Free delivery"}
                                            onChange={(e) => formProps.setFieldValue("type", e.value)}
                                            optionLabel="id"
                                            optionValue="value"
                                            placeholder="Select type"
                                            className="w-full"
                                        />
                                    </div>
                                    <div className="text-danger" style={{ fontSize: 'small'}}>
                                        {formProps.touched.type && formProps.errors.type}
                                    </div>
                                </div>

                                <div>
                                
                                    <TextFormField  label="Global Price"
                                                    name="globalPrice"
                                                    
                                                    placeHolder="Enter global price"
                                                    onChange={formProps.handleChange}
                                                    onBlur={formProps.handleBlur}
                                                    value={formProps.values.globalPrice}
                                                    error={formProps.touched.globalPrice && formProps.errors.globalPrice}/>
                                </div>
                                <div>
                                
                                    <TextFormField  label="Selling price"
                                                    name="price"
                                                    placeHolder="Enter selling price"
                                                    onChange={formProps.handleChange}
                                                    onBlur={formProps.handleBlur}
                                                    value={formProps.values.price}
                                                    error={formProps.touched.price && formProps.errors.price}/>
                                </div>
                                {/* <div>
                                    <TextFormField  label="Discount"
                                                name="discount"
                                                placeHolder="Enter discount"
                                                onChange={formProps.handleChange}
                                                onBlur={formProps.handleBlur}
                                                disabled
                                                value={formProps.values.discount}
                                                error={formProps.touched.discount && formProps.errors.discount}/>
                                </div> */}
                                <div>
                                
                                    <TextFormField  label="Discount"
                                                    onChange={formProps.handleChange}
                                                    onBlur={formProps.handleBlur}
                                                    disabled={true}
                                                    placeHolder={(formProps.values.globalPrice - formProps.values.price).toString()}
                                                    value={formProps.values.discount}
                                                        
                                                    error={formProps.touched.discount && formProps.errors.discount}/>
                                </div>

                                <div>
                                    <TextFormField  label="Quantity"
                                                name="qty"
                                                placeHolder="Enter quantity of package"
                                                onChange={formProps.handleChange}
                                                onBlur={formProps.handleBlur}
                                                value={formProps.values.qty}
                                                error={formProps.touched.qty && formProps.errors.qty}/>
                                </div>

                                <div>
                                    <TextFormField label="Stock Count"
                                                name="stockCount"
                                                placeHolder="Enter amount in stock"
                                                onChange={formProps.handleChange}
                                                onBlur={formProps.handleBlur}
                                                value={formProps.values.stockCount}
                                                error={formProps.touched.stockCount && formProps.errors.stockCount} />
                                </div>

                                <div>
                                    <TextFormField label="Supply Store"
                                                name="store"
                                                placeHolder="Enter supply store"
                                                onChange={formProps.handleChange}
                                                onBlur={formProps.handleBlur}
                                                value={formProps.values.store}
                                                error={formProps.touched.store && formProps.errors.store} />
                                </div>
                                <div>
                                    <TextFormField label="Serial Number"
                                                name="serialNumber"
                                                placeHolder="Enter serial number or ID"
                                                onChange={formProps.handleChange}
                                                onBlur={formProps.handleBlur}
                                                value={formProps.values.serialNumber}
                                                error={formProps.touched.serialNumber && formProps.errors.serialNumber} />
                                </div>
                                <div>
                                    <TextFormField label="Brand"
                                                name="brand"
                                                placeHolder="Enter product brand"
                                                onChange={formProps.handleChange}
                                                onBlur={formProps.handleBlur}
                                                value={formProps.values.brand}
                                                error={formProps.touched.brand && formProps.errors.brand} />
                                </div>
                                <div>
                                    <TextFormField label="Vendor ID"
                                                name="vendorID"
                                                placeHolder="Enter vendorID"
                                                onChange={formProps.handleChange}
                                                onBlur={formProps.handleBlur}
                                                disabled
                                                value={formProps.values.vendorID}
                                                error={formProps.touched.vendorID && formProps.errors.vendorID} />
                                </div>
                            </div>


                            <div>
                                <label>Description</label>
                                <Editor 
                                    value={formProps.values.description}
                                    id="description" 
                                    onTextChange={(value) => formProps.setFieldValue('description', value.htmlValue)}
                                    style={{ height: '300px' }} 
                                />
                                <input 
                                    type="hidden" 
                                    name="description" 
                                    value={formProps.values.description}
                                />
                            </div>


                           <div>
                                <label>What Is In The Box</label>
                                <Editor 
                                    value={formProps.values.whatIsInTheBox}
                                    id="description" 
                                    onTextChange={(value) => formProps.setFieldValue('whatIsInTheBox', value.htmlValue)}
                                    style={{ height: '300px' }} 
                                />
                                <input 
                                    type="hidden" 
                                    name="whatIsInTheBox" 
                                    value={formProps.values.whatIsInTheBox}
                                />
                            </div>
                            
                        </div>
                        <Divider type="dashed"/>
                            <div className="float-right my-4">
                                <Button label="Save" type="submit" severity="secondary" size="small" />
                            </div>
                        <Divider type="dashed"/>
                    </Form>
                    )}
            </Formik>
            <CustomLoader loading={loading}/>
        </Dialog>
    </>
  );
}


export default ProductForm;
