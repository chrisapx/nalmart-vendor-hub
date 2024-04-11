"use client";
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import React, { useEffect, useState } from 'react'
import apiService from '@/helpers/apiService';
import CustomLoader from '@/components/Loader/CustomLoader';
import ProductForm from '@/app/products/form/ProductForm'


const Products = () => {

  const [ visible, setVisible ] = useState(false);
  const [ users, setUsers ] = useState([]);
  const [ roleList, setRoleList ] = useState([]);
  const [ departmentList, setDepartmentList ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  
  const getUsers = () => {
    setLoading(true);
    apiService.get(`items`).then((response) => {
      if (response.status === 200){
        setUsers(response.data)
        console.log(response.message)
      }
      setLoading(false);
    }).catch((error) => {
      setLoading(false);
      console.log(error.message);
    })
  }

  const getRoles = () => {
    apiService.get(`roles`).then((response) => {
        if (response.statusCode === 200){
            setRoleList(response.data.data)
        }
    }).catch((error) => {
        console.log(error.message)
    })
  }

  const getDepartments = () => {
    apiService.get(`departments`).then((response) => {
        if (response.statusCode === 200){
            setDepartmentList(response.data)
        }
    }).catch((error) => {
        console.log(error.message)
    })
  }

  useEffect(() => {
    getUsers();
    // getRoles();
    // getDepartments();
    
    document.title = "Manage Nalmart Inventory"
    document.description= "Nalmart, Naturing the Authentic Legacy";
  },[])

  const handleDelete = ( id: string ) => {
    console.log(users);
  }

  const handleAddUser = () => {
    setVisible(true);
  };

  const extractRole = (row) => {
    if (row && row.roleId) {
        const role = roleList.find(role => role.id === row.roleId);
        return role ? role.name : '';
    }
    return '';
  };

  const extractDepartment = (row) => {
    if (row && row.departmentId) {
        const department = departmentList.find(department => department.id === row.departmentId);
        return department ? department.name : '';
    }
    return '';
  };
  
  const actionsTemplate = (rowData: any) => {
      return(
        <div className="flex gap-3 h-8">
          <Button outlined severity="secondary" size='small' icon="pi pi-eye" style={{padding: 3,}} />
          <Button outlined severity="info" size="small" icon="pi pi-user-edit" style={{padding: 3}} />
          <Button outlined severity="danger" size="small" icon="pi pi-trash" style={{padding: 3}} onClick={handleDelete} />
        </div>
      )
  } 

  const userImageTemplate = (rowData: any) => {

      return (
          <div className="flex float-right ">
              {rowData.coverPhoto ? 
              
                <img alt="flag" src={rowData.coverPhoto.url} style={{ width: '40px',height: '40px', borderRadius: '50%' }} /> 
              :
                  <Avatar shape='circle' icon="pi pi-user" size="large"  />}
          </div>
      );
  };
  const imageBodyTemplate = (product) => {
        return <img src={`${product.coverPhoto.url}`} alt={"No Image"} className="w-2rem h-3rem shadow-2 border-round" style={{width: 40, height: 40}} />;
    };

  return (
    <>
    <DefaultLayout>
      <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className='flex justify-between mb-7'>
        
            <section className="">
              <div className='mb-6 text-xl font-semibold text-black dark:text-white'>Products</div>
              <h6 className='text-black dark:text-white'>Nalmart Inventory</h6>
            </section>
            <div className='h-10 gap-3  flex'>
              <Button label="Add Product" outlined severity="info" size='small' icon="pi pi-plus" onClick={handleAddUser} />
              <Button label="Excel" outlined severity="success" size="small" icon="pi pi-file-excel" />
              <Button label="Pdf" outlined severity="danger" size="small" icon="pi pi-file-pdf" />
            </div>
        </div>

        <ProductForm show ={visible} toggle={ setVisible } />

        <div className="flex flex-col">
            <DataTable value={users} dataKey="id" resizableColumns emptyMessage="No users found." stripedRows  paginator
              rows={10} rowsPerPageOptions={[5, 10, 25, 50, 100, 200]} tableStyle={{ minWidth: '80rem', maxWidth: '100px' }}
            >
              <Column field="sku" header="Item Sku" sortable filter />
              <Column header="Photo" body={imageBodyTemplate} />
              <Column field="globalPrice" header="Global price" dataType='numeric' sortable filter />
              <Column field="price" header="Price" dataType='numeric'sortable filter />
              <Column field="discount" header="Discount" body={(e) => {return ( <div>{ e.discount.toFixed(1) +'%' }</div> )}} dataType='numeric' sortable filter />
              <Column field="phone" header="Phone Number"  filter />
              <Column header="Actions" body={actionsTemplate} />
            </DataTable>
        </div>
      </div>
      <CustomLoader loading={loading}/>
    </DefaultLayout>
    </>
  )
}

export default Products;
