"use client";
import { useState } from "react";
import Result from "./result";

export default function Card({ items }) {
  const [input, setInput] = useState("");
  const [submit, setSubmit] = useState(false);
  const [index, setIndex] = useState(0);
  const [finish, setFinish] = useState(false);
  const [score, setScore] = useState(0);

  const inputHandler = (e) => {
    setInput(e.target.value);
    setSubmit(false);
  };

  const checkAnswer = () => {
    setSubmit(true);
    if (input === items[index].name) {
      setScore((prev) => (prev += 1));
    }
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
        <>
          점수 : {score}/{items.length}
        </>
      ) : !submit ? (
        <>
          <span>
            {index + 1}/{items.length}
          </span>
          <img
            item={items[index]}
            className="card-img"
            src={items[index].img}
            alt=""
          />
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
        </>
      ) : (
        <Result
          item={items[index]}
          result={items[index].name === input}
          // img={items[index].successImage}
          // description={items[index].description}
        >
          <button onClick={nextHandler}>다음</button>
        </Result>
      )}
    </div>
  );
}
