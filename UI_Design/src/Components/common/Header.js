import React from 'react'
import logo from './../../assets/logo.png'
export default function Header() {
  return (
   <>
<div className='container mt-2'>
    <div className='row'>
        <div className='col-xl-1 col-sm-6'>
            <img src={logo} alt="Comapany-Logo" style={{width:"70px"}}/>
        </div>
        <div className='col-xl-11 col-sm-6'>
             <div className='row mb-1'>
                <div className='col-md-10'>
              <div className='search-box'>
              <span><i class="fa-solid fa-magnifying-glass"></i> <input type='text' placeholder='Search..'/></span> 
              </div>
                </div>
                <div className='col-md-2'>
                    <div className='Header_icon'>
                        <spna><i class="fa-solid fa-headset"></i></spna>
                        <span><i class="fa-solid fa-bell"></i></span>
                        <spna><i class="fa-solid fa-headset"></i></spna>
                        <span><i class="fa-solid fa-bell"></i></span>
                    </div>
                </div>
             </div>
           <div className='Buttons'>
           <button type="button" class="btn btn-sm">Option 1</button>
           <button type="button" class="btn btn-sm">Option 2</button>
           <button type="button" class="btn btn-sm">Option 3</button>
           <button type="button" class="btn btn-sm">Option 4</button>
           <button type="button" class="btn btn-sm">Option 5</button>
           <button type="button" class="btn btn-sm">Option 6</button>
           <button type="button" class="btn btn-sm">Option 7</button>
           <button type="button" class="btn btn-sm">Option 8</button>
           <button type="button" class="btn btn-sm">More </button>
            </div>
            </div>  
        </div>
    </div>
   </>
  )
}
