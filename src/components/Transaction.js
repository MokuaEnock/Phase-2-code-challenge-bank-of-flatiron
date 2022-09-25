import React from "react";

function Transaction({ item }) {
  return (
    <>
      {item.map((data) => (
        <tr key={data.id}>
          <td>{"your code here..."}</td>
          <td>{"your code here..."}</td>
          <td>{"your code here..."}</td>
          <td>{"your code here..."}</td>
        </tr>
      ))}
    </>
  );
}

export default Transaction;
