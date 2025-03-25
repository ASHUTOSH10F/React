// components/ItemDetail.js
import React from "react";
import ItemRow from "./ItemRow";

function ItemDetail() {
  const items = [
    { id: 1, name: "1", qty: "1231", unit: "KGS", price: "9999999", disc: "100", discAmt: "9999999", discPrice: "123456", tax: "100%", taxAmt: "123456789", total: "123456789" },
    { id: 2, name: "2", qty: "2", unit: "KGS", price: "2", disc: "2", discAmt: "2", discPrice: "123456", tax: "100%", taxAmt: "123456789", total: "123456789" },
    { id: 3, name: "3", qty: "3", unit: "KGS", price: "3", disc: "3", discAmt: "3", discPrice: "123456", tax: "100%", taxAmt: "123456789", total: "123456789" }
  ];

  return (
    <div className="container">
    <div className="item-detail">
      <h2 className="table-heading">Item Detail <span className="info-icon">ⓘ</span></h2>
      <table className="item-table table-responsive">
        <thead>
          <tr>
            <th>#</th>
            <th>Item Name</th>
            <th>Qty.</th>
            <th>Unit</th>
            <th>U. Price</th>
            <th>Disc.%</th>
            <th>Disc. Amt.</th>
            <th>Disc.Price</th>
            <th>Tax%</th>
            <th>Tax Amt.</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <ItemRow key={item.id} item={item} />
          ))}
        </tbody>
      </table>
      <div className="table-footer">
        <button className="next-btn">Next</button>
      </div>
      <div className="total-amount">
        <p>Gross Total/ Rs.</p>
        <h3>9,99,99,999.99/-</h3>
        <p>Nine crore ninety nine lakhs ninety nine thousand nine hundred ninety nine rupees only</p>
      </div>
    </div>
    </div>
  );
}

export default ItemDetail;
