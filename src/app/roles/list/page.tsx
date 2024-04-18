"use client";
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import UserRoleForm from '../form/AssignUserRoles'
import DepartmentForm from '../form/RoleForm'
import React, { useEffect, useState } from 'react'
import apiService from '@/helpers/apiService';
import CustomLoader from '@/components/Loader/CustomLoader';

const Roles = () => {

  const [ visible, setVisible ] = useState(false);
  const [ rolAssignForm, setRoleAssinForm ] = useState(false);
  const [ roles, setRoles ] = useState([]);
  const [ loading, setLoading ] = useState(false);

  
  const getDepartments = () => {
    setLoading(true);
    apiService.get(`roles`).then((response) => {
        if (response.statusCode === 200){
            setRoles(response.data)
        }
      setLoading(false);
    }).catch((error) => {
      setLoading(false);
      console.log(error.message)
    })
  }

  useEffect(() => {
    getDepartments()
  },[])

  const handleDelete = ( id: any ) => {
    console.log(roles);
  }

  const handleAddDepartment = () => {
    setVisible(true);
  };

  const handleAssignUserRole = () => {
    setRoleAssinForm(true);
  }
  
  const actionsTemplate = (rowData: any) => {
      return(
        <div className="flex gap-3 h-8">
          <Button outlined severity="secondary" size='small' icon="pi pi-eye" style={{padding: 3,}} />
          <Button outlined severity="info" size="small" icon="pi pi-user-edit" style={{padding: 3}} />
          <Button outlined severity="danger" size="small" icon="pi pi-trash" style={{padding: 3}} onClick={handleDelete} />
        </div>
      )
  } 

  return (
    <>
    <DefaultLayout>
      <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className='flex justify-between mb-7'>
        
            <section className="">
              <div className='mb-6 text-xl font-semibold text-black dark:text-white'>Roles</div>
              <h6 className='text-black dark:text-white'>Available roles</h6>
            </section>
            <div className='h-10 gap-3  flex'>
              <Button label="Assign User Role" outlined severity="info" size='small' icon="pi pi-plus" onClick={handleAssignUserRole} title='Add a new role' />
              <Button label="Add New" outlined severity="info" size='small' icon="pi pi-plus" onClick={handleAddDepartment} title='Add a new role' />
              <Button label="Excel" outlined severity="success" size="small" icon="pi pi-file-excel" title='Download excel list of all roles'/>
              <Button label="Pdf" outlined severity="danger" size="small" icon="pi pi-file-pdf" title='Download pdf list of all roles'/>
            </div>
        </div>

        <DepartmentForm show ={visible} toggle={ setVisible } />
        <UserRoleForm show ={rolAssignForm} toggle={ setRoleAssinForm } />

        <div className="flex flex-col">
            <DataTable value={roles} dataKey="id" size='normal' emptyMessage="No roles found." resizableColumns paginator
              rows={5} rowsPerPageOptions={[5, 10, 25, 50]}
            >
              <Column field="name" header="Role" sortable filter />
              <Column header="Actions" body={actionsTemplate} />
            </DataTable>
        </div>
      </div>
      <CustomLoader loading={loading}/>
    </DefaultLayout>
    </>
  )
}

export default Roles;
