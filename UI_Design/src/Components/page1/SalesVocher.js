import React from 'react';


const SalesVoucher = () => {
  return (
    <div className="container sales-voucher my-4">
      <h1 className="text-primary text-center mb-4">Sales Voucher</h1>

      {/* Form Section */}
      <div className="voucher-form">
      <div className="form-field">
        <label>Series</label>
        <input type="text" placeholder="Panipat" />
      </div>
      <div className="form-field">
        <label>Date</label>
        <input type="date" />
      </div>
      <div className="form-field">
        <label>Voucher Number</label>
        <input type="text" placeholder="1234567891234567" />
      </div>
      <div className="form-field">
        <label>Narration</label>
        <input type="text" placeholder="1234567891234567" />
      </div>
    </div>

        <h3 className="text-primary">Business Detail</h3>
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Bill To Party</label>
            <select className="form-select">
              <option>JaiParkashSingla Legal & Consulting LLP</option>
            </select>
            <p className="mt-2">Office No. GF, 002, Plot No. F-1, Sector 3, Noida, UP 201301</p>
          </div>
          <div className="col-md-6">
            <label className="form-label">Ship To Party</label>
            <select className="form-select">
              <option>1234567891234567</option>
            </select>
            <p className="mt-2">O-1, Old Industrial Area, Panipat, Haryana-132103</p>
          </div>
        </div>

        <h3 className="text-primary">Item Detail</h3>
        <table className="table table-bordered text-center">
          <thead className="table-primary">
            <tr>
              <th>#</th>
              <th>Item Name</th>
              <th>Qty.</th>
              <th>Unit</th>
              <th>U. Price</th>
              <th>Disc.%</th>
              <th>Disc. Amt</th>
              <th>Disc. Price</th>
              <th>Tax%</th>
              <th>Tax Amt.</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td><input type="text" className="form-control" /></td>
              <td><input type="text" className="form-control" placeholder="1231" /></td>
              <td><input type="text" className="form-control" placeholder="KGS" /></td>
              <td><input type="text" className="form-control" placeholder="9999999" /></td>
              <td><input type="text" className="form-control" placeholder="100" /></td>
              <td><input type="text" className="form-control" placeholder="99999999" /></td>
              <td><input type="text" className="form-control" placeholder="123456" /></td>
              <td><input type="text" className="form-control" placeholder="100%" /></td>
              <td><input type="text" className="form-control" placeholder="123456789" /></td>
              <td><input type="text" className="form-control" placeholder="123456789" /></td>
            </tr>
          </tbody>
        </table>
      </div>
  );
};

export default SalesVoucher;
