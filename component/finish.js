export default function Finish({ myScore, perfectScore, wrong }) {
  return (
    <>
      {perfectScore}개 중에 {myScore}개 맞혔네요!
      <div className="wrong-items">
        {wrong.map((wrongItem) => (
          <div className="wrong-item">
            <span className="wrong-item-name">{wrongItem.name}</span>
            <img className="wrong-item-img" src={wrongItem.img} alt="" />
            <div>{wrongItem.result ? "O" : "X"}</div>
          </div>
        ))}
      </div>
    </>
  );
}
