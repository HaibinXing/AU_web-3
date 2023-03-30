const secp = require("ethereum-cryptography/secp256k1");
const { keccak256 } = require("ethereum-cryptography/keccak");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");
const express = require("express");
const app = express();
const cors = require("cors");
const port = 3042;
const getAddress = require("./getAddress");
const getPub = require("./getAddress");

app.use(cors());
app.use(express.json());

const balances = {
  //Replace the account with last 20 bits of the hash value of public key
  "90e4dbdc171a6c17c626": 100,
  "1bf81e4936b5ffe8b077": 50,
  b7c9b928003d188151a1: 75,
};

app.get("/balance/:address", (req, res) => {
  const { address } = req.params;
  const balance = balances[address] || 0; //输错address，也是零
  res.send({ balance }); //返回balance给 server.get
});

app.post("/send", (req, res) => {
  const { sig, message } = req.body;
  const publicKey = getPub(message, sig);
  const sender = getAddress(publicKey);
  const recipient = message.reciever;
  const amount = message.amount;
  // Todo: get a signature from the client-sice application
  //recover the the account from the public key from the signature

  setInitialBalance(sender);
  setInitialBalance(recipient);

  if (balances[addr] < amount) {
    res.status(400).send({ message: "Not enough funds!" });
  } else {
    balances[sender] -= amount;
    balances[recipient] += amount;
    res.send({ balance: balances[sender] });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

function setInitialBalance(address) {
  if (!balances[address]) {
    balances[address] = 0;
  }
}
