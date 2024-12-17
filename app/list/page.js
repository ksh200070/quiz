"use client";

import { useState } from "react";

export default function List() {
  let items = [
    { index: 0, name: "Tomatoes", img: "/food0.jpg" },
    { index: 1, name: "Pasta", img: "/food1.jpg" },
    { index: 2, name: "Coconut", img: "/food2.jpg " },
  ];
  const [count, setCount] = useState([0, 0, 0]);

  return (
    <div>
      <h4 className="title">상품목록</h4>

      {/* <span>{count[0]}</span>
      <button
        onClick={() => {
          let copy = [...count];
          copy[0]++;
          setCount(copy);
        }}
      >
        +
      </button>
      <span>{count[1]}</span>
      <button onClick={() => setCount(() => [count[0], count[1]++, count[2]])}>
        +
      </button>
      <span>{count[2]}</span>
      <button onClick={() => setCount(() => [count[0], count[1], count[2]++])}>
        +
      </button> */}

      {items.map((item, index) => (
        <div className="food" key={item.index}>
          <img src={item.img} className="food-img" alt={item.name} />
          <h4>{item.name} $40</h4>
          <span>{count[index]}</span>
          <button
            onClick={() => {
              const copy = [...count];
              copy[item.index]++;
              setCount(copy);
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              if (count[item.index] > 0) {
                const copy = [...count];
                copy[item.index]--;
                setCount(copy);
              }
            }}
          >
            -
          </button>
        </div>
      ))}
    </div>
  );
}
