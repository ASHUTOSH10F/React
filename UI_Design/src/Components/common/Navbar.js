import React from 'react'

export default function Navbar() {
  return (
   <>
   <div className='container mt-2'>
   <h3>Sales Voucher</h3>
   </div>
   <div className='container Navbar-box'>
     <div className='row'>
        <div className='col-4 d-grid'>
        <button type="button" class="btn btn-block first-btn">Add</button>
        </div>
        <div className='col-4 d-grid'>
        <button type="button" class="btn btn-block">Modify</button> 
            </div>
            <div className='col-4 d-grid'>
            <button type="button" class="btn btn-block">List</button>
            </div>
     </div>
   </div>
   </>
  )
}
