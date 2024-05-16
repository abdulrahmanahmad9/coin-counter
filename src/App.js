import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [coins, setCoins] = useState(0);
  const [buttonClicked, setButtonClicked] = useState(true);

  const addOne = () => {
    setCounter(counter + 1);
    setCoins(coins + 1);
  };

  const count = (spent, add, addCoins) => {
    if (coins >= spent) {
      setCoins(coins - spent + addCoins);
      setCounter(counter + add);
      setButtonClicked(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "yellowgreen",
        flexDirection: "column",
      }}
    >
      <div>
        <p style={{ fontSize: "50px" }}> COINS {coins} </p>{" "}
      </div>
      <p style={{ fontSize: "50px" }}> {counter} </p>
      <button onClick={addOne} style={{ borderRadius: "10px" }}>
        Click me{" "}
      </button>

      {counter >= 20 && buttonClicked && (
        <button
          onClick={() => count(10, 2)}
          style={{ borderRadius: "20px", marginTop: "20px" }}
        >
          Spend 10 coins to add 2 to the counter
        </button>
      )}
      {counter >= 30 && buttonClicked && (
        <button
          onClick={() => count(20, 5)}
          style={{ borderRadius: "20px", marginTop: "20px" }}
        >
          Spend 20 coins to add 5 to the counter
        </button>
      )}
      {counter >= 40 && buttonClicked && (
        <button
          onClick={() => count(30, 0, 100)}
          style={{ borderRadius: "20px", marginTop: "20px" }}
        >
          Spend 30 count to add 100 to the coins
        </button>
      )}
      {counter >= 50 && buttonClicked && (
        <button
          onClick={() => count(50, 40)}
          style={{ borderRadius: "20px", marginTop: "20px" }}
        >
          Spend 50 coins to increase your coins by 40
        </button>
      )}
    </div>
  );
}
export default App;

// if (counter === 10) {
//   const spend = window.confirm(
//     "Do you want to spend 10 coins to add 2 your counter?"
//   );
//   if (spend) {
//     setCoins(coins - 10);
//     setCounter(counter + 2);
//   }
// } else if (counter === 30) {
//   const spend2 = window.confirm(
//     "Do you want to spend 20 coins to add 5 your counter?"
//   );
//   if (spend2) {
//     setCoins(coins - 20);
//     setCounter(counter + 2);
//   }
// } else if (counter === 40) {
//   const spend3 = window.confirm(
//     "Do you want to spend 30 coins to add 10 your counter?"
//   );
//   if (spend3) {
//     setCoins(coins - 30);
//     setCounter(counter + 10);
//   }
// } else if (counter === 50) {
//   const spend4 = window.confirm(
//     "Do you want to spend 50 counts to increase your coins by 40?"
//   );
//   if (spend4) {
//     setCoins(coins + 40);
//     setCounter(counter - 50);
//   }
// }
// };

// return (
//   <div
//     style={{
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       height: "100vh",
//       backgroundColor: "yellowgreen",
//       flexDirection: "column",
//     }}
//   >
//     <div>
//       <p style={{ fontSize: "50px" }}> COINS {coins} </p>{" "}
//     </div>
//     <p style={{ fontSize: "50px" }}> {counter} </p>
//     <button onClick={addOne} style={{ borderRadius: "10px" }}>
//       click me{" "}
//     </button>
//   </div>
// );
