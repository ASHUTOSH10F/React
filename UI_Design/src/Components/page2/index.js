import React from 'react'
import MainHead from '../common/MainHead'
import Header from '../common/Header'
import Navbar from '../common/Navbar'
import AfterNavbar_Nav from './AfterNavbar_Nav'
import Table1 from './Table1'
import Table2 from './Table2'


export default function index() {
  return (
    <> 
    <MainHead/>
    <div className='container'>
        <Header/>
        <Navbar/>
        <AfterNavbar_Nav/>
        <Table1/>
        <Table2/>        
    </div>
    </>
  )
}
