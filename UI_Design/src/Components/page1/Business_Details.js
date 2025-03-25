import React from "react";
function BusinessDetail() {
  return (
    <div className="container mt-2">
    <div className="business-detail">
      <h2 className="heading">
        Business Detail <span className="info-icon">ⓘ</span>
      </h2>
      <div className="business-details">
        <div className="input-group">
          <label className="label">Bill To Party</label>
          <select className="select">
            <option>JaiParkashSingla Legal & Consulting LLP</option>
          </select>
          <p className="address">Office No. GF. 002, Plot No. F-1, Sector 3, Noida, UP 201301</p>
        </div>
        <div className="input-group">
          <label className="label">Ship To Party</label>
          <select className="select">
            <option>1234567891234567</option>
          </select>
          <p className="address">0-1, Old Industrial Area, Panipat, Haryana-132103</p>
        </div>
        <div className="input-group">
          <label className="label">Dispatch From</label>
          <select className="select">
            <option>1234567891234567</option>
          </select>
        </div>
      </div>
    </div>
    </div>
  );
}

export default BusinessDetail;
