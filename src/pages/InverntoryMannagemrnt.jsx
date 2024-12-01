import React from 'react';
import HeaderTwo from '../components/HeaderTwo';
import InventoryTable from '../components/InventoryTable';

const InventoryManagement = () => {
    return (
       <>
   
      <HeaderTwo category={true} />
      <InventoryTable />

      </>
    );
};

export default InventoryManagement;