"use client";

import Card from "@/component/card";
import { useState } from "react";

export default function Cards({ items }) {
  const [count, SetCount] = useState(1);

  return (
    <>
      {<Card key={items[count + 1]._id} item={items[count + 1]}></Card>}
      {/* {items.map((item) => (
        <Card key={item._id} item={item}></Card>
      ))} */}
    </>
  );
}
