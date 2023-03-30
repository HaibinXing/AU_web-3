import server from "./server";

function Wallet({ address, setAddress, balance, setBalance }) {
  async function onChange(evt) {
    const address = evt.target.value;
    setAddress(address);
    //Axios is an HTTP client library based on promises. It makes sending
    //asynchronous HTTP requests to REST endpoints easier and helps you
    //perform CRUD operations
    //.get()method to make a GET request to endpoint.
    //data为axios的property，which is the actual data from the response object.
    //这里的data就是接收server的balance值，并在wallet中显示用
    if (address) {
      const {
        data: { balance },
      } = await server.get(`balance/${address}`); //输错了也是零，在index的app.get function中
      setBalance(balance);
    } else {
      setBalance(0); //没有输入就是0
    }
  }

  return (
    <div className="container wallet">
      <h1>Your Wallet</h1>

      <label>
        Wallet Address
        <input
          placeholder="Type an address, for example: 0x1"
          value={address}
          onChange={onChange}
        ></input>
      </label>

      <div className="balance">Balance: {balance}</div>
    </div>
  );
}
//Balance: 在css中定义为大写 ，底部输出栏显示的文字
//{balance}在client中仅为显示用户余额用途，没有向server输出的功能
export default Wallet;
