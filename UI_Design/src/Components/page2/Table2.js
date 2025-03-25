import React from 'react'

export default function Table2() {
  return (
    <>
        <h2 className="heading">
        Business Detail <span className="info-icon">ⓘ</span>
      </h2>
      <div className='two-btn'>
        <tr>
            <td>Home</td>
            <td>About</td>
        </tr>
      </div>
       <div className='row'>
    <div className='col-sm-6'>
    <div className="container mt-5">
      <div className="table-responsive">
        <table className="table rounded" style={{ border: "1px solid #ccc" }}>
          <thead>
            <tr className="text-white" style={{ backgroundColor: "#003399" }}>
              <th style={{ width: "5%", textAlign: "center" }}>#</th>
              <th style={{ textAlign: "center" }}>Particulars</th>
              <th style={{ width: "10%", textAlign: "center" }}>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  className="form-control"
                  value="1"
                  readOnly
                  style={{
                    textAlign: "center",
                    width: "70px",
                  }}
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  value="1"
                  style={{
                    textAlign: "center",
                    border: "1px solid #d9d9d9",
                    borderRadius: "8px",
                  }}
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  value="99999999"
                  style={{
                    textAlign: "center",
                    border: "1px solid #d9d9d9",
                    borderRadius: "8px",
                    width: "100px",
                  }}
                />
              </td>
            </tr>
            <tr className="bg-light">
              <td>
                <input
                  type="text"
                  className="form-control"
                  value="1"
                  readOnly
                  style={{
                    textAlign: "center",
                    border: "1px solid #d9d9d9",
                    borderRadius: "8px",
                    width: "70px",
                  }}
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  value="2"
                  style={{
                    textAlign: "center",
                    border: "1px solid #d9d9d9",
                    borderRadius: "8px",
                  }}
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  value="2"
                  style={{
                    textAlign: "center",
                    border: "1px solid #d9d9d9",
                    borderRadius: "8px",
                    width: "100px",
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  className="form-control"
                  value="1"
                  readOnly
                  style={{
                    textAlign: "center",
                    border: "1px solid #d9d9d9",
                    borderRadius: "8px",
                    width: "70px",
                  }}
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  value="3"
                  style={{
                    textAlign: "center",
                    border: "1px solid #d9d9d9",
                    borderRadius: "8px",
                  }}
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  value="3"
                  style={{
                    textAlign: "center",
                    border: "1px solid #d9d9d9",
                    borderRadius: "8px",
                    width: "100px",
                  }}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      </div> 
      <div className="table-footer">
        <button className="next-btn">Next</button>
      </div> 
    </div>  

    <div className='col-sm-6 mt-5'>
    <table class="table table-striped">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>
      <tr>
        <td>Mary</td>
        <td>Moe</td>
        <td>mary@example.com</td>
      </tr>
      <tr>
        <td>July</td>
        <td>Dooley</td>
        <td>july@example.com</td>
      </tr>
    </tbody>
  </table>
      <div className="total-amount">
        <p>Gross Total/ Rs.</p>
        <h3>9,99,99,999.99/-</h3>
        <p>Nine crore ninety nine lakhs ninety nine thousand nine hundred ninety nine rupees only</p>
      </div>
   </div>
    </div>
</>
  )
}
