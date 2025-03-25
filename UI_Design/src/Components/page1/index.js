import React from 'react'
import Header from './../common/Header'
import Navbar from './../common/Navbar'
import BusinessDetail from './Business_Details';
import ItemDetail from './Item_details';
import MainHead from '../common/MainHead';
import AfterNav_Navbar_1st_input from '../common/AfterNav_Navbar_1st_input';

export default function index() {
  return (
    <>
        <MainHead/>
        <Header/>
        <Navbar/>
        <div className='container whitebox'>
        <AfterNav_Navbar_1st_input/>
        <BusinessDetail/>
        <ItemDetail/>
        </div>
    </>
  )
}
