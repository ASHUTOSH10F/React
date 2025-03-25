import React from 'react'

export default function Skill() {
  return (
   <>
   <div className='container'>
   <h4 className='heading'>WHAT I LEARN <i class="fa-brands fa-leanpub"></i></h4>
    <div className='row'>
        <div className='col-xl-6'>
        <button type="button" className="btn btn-outline-warning mb-2 me-2">HTML</button>
        <button type="button" className="btn btn-outline-warning mb-2 me-2">CSS</button>
        <button type="button" className="btn btn-outline-warning mb-2 me-2">BOOTSTRAP</button>
        <button type="button" className="btn btn-outline-warning mb-2 me-2">JAVASCRIPT</button>
        <button type="button" className="btn btn-outline-warning mb-2 me-2">REACT JS</button>
        <button type="button" className="btn btn-outline-warning mb-2 me-2">API INTEGRATION</button>
        <button type="button" className="btn btn-outline-warning mb-2 me-2">RESPONSIVE DESIGN</button>
        <button type="button" className="btn btn-outline-warning mb-2 me-2">LOGO DESIGN</button>
        <button type="button" className="btn btn-outline-warning mb-2 me-2">ANIMATED WEB DESIGN</button>
        </div>
        <div className='col-xl-6'>
           <form>
           <form action="/action_page.php">
           <h5>WE'D LOVE TO HERE FORM YOU</h5>
           <div className="mb-3">
    <label for="Name" className="form-label">Name:</label>
    <input type="text" className="form-control" id="Name" placeholder="Enter Name" name="Name"/>
  </div>
  <div class="mb-3 mt-3">
    <label for="email" className="form-label">Email:</label>
    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"/>
  </div>
  <button type="submit" className="btn btn-outline-warning btn-block">CONEACT WITH US</button>
</form>
           </form>
        </div>
    </div>
   </div>
   </>
  )
}
