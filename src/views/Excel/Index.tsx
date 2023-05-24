// src/views/
import React, { FC } from 'react';
import {Outlet} from 'react-router-dom'
interface IIndexProps {
  
};

const Index:FC<IIndexProps> = () => {
  return (
    <>
      <h2>Excel</h2>
      <Outlet/>
    </>
  )
};

export default Index;