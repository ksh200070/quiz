"use client";
import { useState } from "react";
import Result from "./result";
import Finish from "./finish";

export default function Card({ items }) {
  const [input, setInput] = useState("");
  const [submit, setSubmit] = useState(false);
  const [index, setIndex] = useState(0);
  const [finish, setFinish] = useState(false);
  const [score, setScore] = useState(0);
  const [itemsResult, setItemsResult] = useState([]);

  const inputHandler = (e) => {
    setInput(e.target.value);
    setSubmit(false);
  };

  const checkAnswer = () => {
    setSubmit(true);
    if (input === (items[index].name || items[index].answer)) {
      setScore((prev) => (prev += 1));
    }

    setItemsResult((prev) => [
      ...prev,
      {
        ...items[index],
        result: input === (items[index].name || items[index].answer),
      },
    ]);
  };

  const nextHandler = () => {
    if (index + 1 === items.length) {
      setFinish(true);
    } else {
      setIndex((prev) => (prev += 1));
    }
    setSubmit(false);
    setInput();
  };

  const enterHandler = (event) => {
    if (event.key === "Enter") {
      checkAnswer();
    }
  };

  return (
    <div className="card">
      {finish ? (
        <Finish
          myScore={score}
          perfectScore={items.length}
          wrong={itemsResult}
        ></Finish>
      ) : !submit ? (
        <>
          <span>
            {index + 1}/{items.length}
          </span>
          <div className="interaction">
            <input
              type="text"
              placeholder="정답을 입력하세요"
              className="input-area"
              defaultValue={input}
              onChange={inputHandler}
              onKeyDown={(event) => enterHandler(event)}
            />
            <button onClick={checkAnswer}>확인</button>
          </div>
          {items[index].description && <h1>{items[index].description}</h1>}
          <img
            item={items[index]}
            className="card-img"
            src={items[index].img}
            alt=""
          />
        </>
      ) : (
        <Result
          item={items[index]}
          result={(items[index].name || items[index].answer) === input}
          // img={items[index].successImage}
          // description={items[index].description}
        >
          <button onClick={nextHandler}>다음</button>
        </Result>
      )}
    </div>
  );
}
