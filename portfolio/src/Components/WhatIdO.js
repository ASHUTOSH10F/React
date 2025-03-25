import React from 'react'
export default function WhatIdO() {
  return (
   <>
   <div className='container'>
    <h4 className='heading'>WHAT I DO <i class="fa-solid fa-laptop-code"></i> </h4>
    <div className='row text-center'>
        <div className='col-xl-4 col-md-6'>
        <i class="fa-solid fa-tv icon"></i>
        <p className='card-head'>UI & UX Design</p>
         <p className='card-details'>Crafting intuitive, visually appealing user interfaces that enhance the user experience. Focused on blending aesthetics with functionality to create seamless and engaging digital interactions. </p>
        </div>
        <div className='col-xl-4 col-md-6'>
        <i class="fa-brands fa-telegram icon"></i>
        <p className='card-head'>Resposive Design</p>
         <p className='card-details'> Designing fully responsive and adaptive web pages to ensure seamless user experiences across all devices and screen sizes </p>
        </div>
        <div className='col-xl-4 col-md-6'>
        <i class="fa-solid fa-link icon"></i>
                <p className='card-head'>Frontend Work</p>
         <p className='card-details'> Building responsive, user-friendly web experiences using modern frontend technologies like HTML, CSS, JavaScript, and React</p>
        </div>
    </div>
   </div>
   </>
  )
}
