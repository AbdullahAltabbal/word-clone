import React from "react";

function GussesList({ items }) {
  return <>
    <ol>
      {items.map((item) => (
        <li key={item.key}>{item}</li>
      ))}
    </ol>
  </>;
}

export default GussesList;
