export default function Cart() {
  let data = ["Tomatoes", "Pasta"];

  return (
    <div>
      <h4 className="title">Cart</h4>
      {data.map((item) => (
        <CartItem title={item}></CartItem>
      ))}
      <ButtonComponent color="red" />
      <ButtonComponent color="blue" />
    </div>
  );
}

function CartItem(props) {
  return (
    <div className="cart-item">
      <p>{props.title}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}

function ButtonComponent(props) {
  return (
    <button style={{ backgroundColor: props.color, color: "white" }}>
      버튼
    </button>
  );
}
