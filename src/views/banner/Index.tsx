// src/views/
import React, { FC } from 'react';
import {Outlet} from 'react-router-dom'
interface IIndexProps {
  
};

const Index:FC<IIndexProps> = () => {
  return (
    <>
      <h1>首页轮播图列表</h1>
      <Outlet/>
    </>
  )
};

export default Index;