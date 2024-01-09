import React from "react";
import Modal from "../Modal";

export default function SizeGuide(props) {
  return (
    <Modal onClose={props.onClose}>
      <table>
        <tr>
          <th>Our size</th>
          <th>UK</th>
          <th>US & Canada</th>
        </tr>
        <tr>
          <td>XS</td>
          <td>6-8</td>
          <td>2</td>
        </tr>
        <tr>
          <td>S</td>
          <td>8-10</td>
          <td>4</td>
        </tr>
        <tr>
          <td>M</td>
          <td>10-12</td>
          <td>6-8</td>
        </tr>
      </table>
    </Modal>
  );
}
