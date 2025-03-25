// components/ItemRow.js
import React from "react";

function ItemRow({ item }) {
  return (
    <tr className="item-row table-responsive">
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.qty}</td>
      <td>{item.unit}</td>
      <td>{item.price}</td>
      <td>{item.disc}</td>
      <td>{item.discAmt}</td>
      <td>{item.discPrice}</td>
      <td>{item.tax}</td>
      <td>{item.taxAmt}</td>
      <td>{item.total}</td>
    </tr>
  );
}

export default ItemRow;
