import Wallet from "./Wallet";
import Transfer from "./Transfer";
import "./App.scss";
import { useState } from "react";

function App() {
  const [balance, setBalance] = useState(0);
  const [address, setAddress] = useState("");

  return (
    <div className="app">
      <Wallet
        balance={balance}
        setBalance={setBalance}
        address={address}
        setAddress={setAddress}
      />
      <Transfer setBalance={setBalance} address={address} />
    </div>
  );
}
//jsx文件 ，function是react的component用<  />表示，Wallet和Transfer都是component，
// balance setBalance是Wallet的property，在< />中显示饼赋值，component的return html
//注意是一个div
//在react里， html的class 与js的class 冲突，所以改为className
//{}是react的variable

export default App;
