export default function Result({ item, result, children }) {
  return (
    <>
      {result ? (
        <div className="result-comment">
          <span className="comment" style={{ color: "#00ecff" }}>
            정답입니다!
          </span>
          <img className="icon" src="./icon_success.png" alt="" />
        </div>
      ) : (
        <div className="result-comment">
          <span className="comment" style={{ color: "red" }}>
            오답입니다
          </span>
          <img className="icon" src="./icon_fail.png" alt="" />
        </div>
      )}
      <div className="control-box">
        <span>(정답 : {item.name})</span>
        {children}
      </div>
      <img className="card-img success" src={item.successImage} alt="" />
      <span>{item.description}</span>
    </>
  );
}
