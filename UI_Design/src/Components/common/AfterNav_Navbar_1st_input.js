import React from 'react'

export default function AfterNav_Navbar_1st_input() {
  return (
    <div>
      <div className='container p-2'>
   <table class="table">
    <tbody>
      <tr className='Nav_btn'>
      <button type="button" class="btn btn-primary active">Basic</button>
      <button type="button" class="btn btn-primary">Other Adjustment</button>
      <button type="button" class="btn btn-primary">Logistic</button>
      <button type="button" class="btn btn-primary">Final Preview</button>
      </tr>
    </tbody>
  </table>
   </div>

   <div className='container'>
   {/* <div className="voucher-form"> */}
    <div className='row'>
        <div className='col-2'>
      <div className="form-field">
        <label>Series</label>
        <input className="abc" type="text" placeholder="Panipat" />
      </div>
      </div>
      <div className='col-2'>
      <div className="form-field">
        <label>Date</label>
        <input className="abc" type="date" />
      </div>
      </div>
      <div className='col-2'>
      <div className="form-field">
        <label>Voucher Number</label>
        <input className="abc" type="text" placeholder="1234567891234567" />
      </div>
      </div>
      <div className='col-6'>
      <div className="form-field">
        <label>Narration</label>
        <input className="abc" type="text" placeholder="1234567891234567" />
      </div>
      </div>
    {/* </div> */}
    </div>
    </div>
    </div>
  )
}
