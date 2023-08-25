import React from 'react'
import Dashboard from './Dashboard';
import Sidebar from './Sidebar';
import styled from "styled-components";
const Container = () => {
  return (
    <div className='containerr'>
      <Sidebar/>
      <Dashboard/>
    </div>
  )
}

export default Container;
