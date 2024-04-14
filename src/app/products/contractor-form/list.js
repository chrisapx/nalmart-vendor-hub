import React, {useEffect, useMemo, useState} from "react";

import { useToast } from "../../../components/ToastWrapper/ToastProvider";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
// import ContractorFilter from "./ContractorFilter";
import { Rating } from "primereact/rating";
import { Tag } from "primereact/tag";
import { Dialog } from "primereact/dialog";
import AddContractorForm from "./AddContractorForm";
import DefaultLayout from "layouts/DefaultLayout";
import apiService from "../../../helpers/apiService";
import {Paginator} from "primereact/paginator";
import {setLoading} from "../../../redux/slices/LoaderSlice";
import {useDispatch} from "react-redux";
import {Avatar} from "primereact/avatar";


export default function Contractors() {
    const dispatch = useDispatch();
    const { showSuccess, showError } = useToast();
    const [contractors, setContractors] = useState();
    const [visible, setVisible] = useState(false);
    const [searchForm, setSearchForm] = useState({})
    const [totalRecords, setTotalRecords] = useState(null)
    const [lazyParams, setLazyParams] = useState({
        first: 0,
        rows: 2,
    });

    const searchData = useMemo(
        () => ({lazyParams}),
        [lazyParams],
    );
    const getContractors =()=>{
        dispatch(setLoading(true));

        // Initialize an empty array to store query parameters
        const queryParams = [];
        // Iterate through the properties of the search object and add them to queryParams if they have values
        for (const key in searchForm) {
            if (searchForm[key]) {
                queryParams.push(`${key}=${encodeURIComponent(searchForm[key])}`);
            }
        }
        // Join the queryParams array into a string with '&' as the separator
        const queryString = queryParams.join('&');

        apiService.get(`contractors?offset=${lazyParams.first}&limit=${lazyParams.rows}&${queryString}`).then((response) => {
            console.log(response)
            if (response.statusCode === 200){
                setTotalRecords(response.data.totalCount)
                setContractors(response.data.rows)
            }else {
                showError(response.message)
            }
        }).catch((error) => {
            showError(error.message)
        }).finally(()=>{
            dispatch(setLoading(false));
        })
    }
    useEffect(() => {
        getContractors()
    }, [searchData])
    const contractorImageTemplate = (rowData) => {
        return (
            <div className="flex float-right ">
                {rowData.photo ? <img alt="flag" src={rowData.photo} style={{ width: '40px',height: '40px', borderRadius: '50%' }} /> :
                    <Avatar icon="pi pi-user" size="large"  />}
            </div>
        );
    };

    const downloadResumeTemplate = (rowData) => {
        return <Button label="View Resume" severity="secondary" outlined size="small" onClick={()=>viewResume(rowData)}/>
    };

    const renderHeader = () => {
        return (
            <>
                {/* <ContractorFilter setFilter={setSearchForm} filter={filterContractors}/> */}
            </>
        );
    };
    const header = renderHeader();

    const getSeverity = (status) => {
        switch (status) {
            case false:
                return 'danger';

            case true:
                return 'success';
            default:
                break;
        }
    };

    const handleOnPageChange = e => {
        setLazyParams(prevState => ({
            ...prevState,
            first: e.first,
            rows: e.rows,
        }));
    };

    function filterContractors() {
        setLazyParams((prevState) => ({...prevState, ...searchForm,first: 0,rows: 2}))
        console.log('search filters',searchForm)
    }
    const viewResume=(urlData)=>{
        window.open(urlData.documents.resumeUrl, '_blank')
    }
    return (
        <>
            <div className="flex flex-wrap mt-4">
                <div className="w-full mb-12 px-4">
                    <>
                        <div className={"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-md rounded bg-white"}>
                            <Card title="Contractors" subTitle="The profiles of all contractors that worked with us or took a training can be found here">
                                <div className="my-2">
                                    <Button label="Add Contractor" severity="secondary" size="small" onClick={() => setVisible(true)} />
                                </div>
                                <DataTable value={contractors} dataKey="id"
                                    header={header}
                                    emptyMessage="No contractors found.">
                                    <Column body={contractorImageTemplate} />
                                    <Column field="fullName" header="Full Name" />
                                    <Column header="phoneNumber" field="phoneNumber" />
                                    <Column header="email" field="email" />
                                    <Column header="Average Rating" body={(e) => <Rating value={e.averageRating} readOnly cancel={false} />} />
                                    <Column header="Availability Status" body={(e) => <Tag value={e.isAccountActive ? 'Active' : 'False'} severity={getSeverity(e.isAccountActive)} />} />
                                    <Column body={downloadResumeTemplate} />
                                </DataTable>
                                <Paginator first={lazyParams.first} rows={lazyParams.rows} totalRecords={totalRecords}
                                           rowsPerPageOptions={[2, 5, 10, 50]}
                                           onPageChange={handleOnPageChange}></Paginator>
                            </Card>
                        </div>
                    </>
                </div>
            </div>

            {/*add contractor dialog*/}
            <Dialog header="New Contractor" visible={visible} style={{ width: '60vw' }} onHide={() => setVisible(false)}>
                <AddContractorForm refreshContractors={getContractors} toggleModal={setVisible}/>
            </Dialog>
        </>
    );
}

Contractors.layout = DefaultLayout;
