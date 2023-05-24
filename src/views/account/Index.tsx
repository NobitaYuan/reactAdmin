// src/views/
import React, { FC } from 'react';
import {Outlet} from 'react-router-dom'
interface IIndexProps {
  
};

const Index:FC<IIndexProps> = () => {
  return (
    <>
      <h1>账户管理</h1>
        <Outlet/>
    </>
  )
};

export default Index;