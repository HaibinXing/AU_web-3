const secp = require("ethereum-cryptography/secp256k1");
const { keccak256 } = require("ethereum-cryptography/keccak");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

// async function address(pubKey) {
//   const pubKeyHash = await secp.utils.sha256(pubKey);
//   //   console.log(toHex(pubKeyHash));
//   const addr = toHex(pubKeyHash).slice(-20);
//   console.log(addr);
//   return addr;
// }
async function getPub(message, signature) {
  const messageHash = await secp.utils.sha256(message);
  let pubKey = secp.recoverPublicKey(messageHash, signature[0], signature[1]);
  return pubKey;
}

async function getAddress(pubKey) {
  const pubKeyHash = await secp.utils.sha256(pubKey);
  //   console.log(toHex(pubKeyHash));
  const addr = toHex(pubKeyHash).slice(-20);
  // console.log(addr);
  return addr;
}

// generateSignature("b7c9b928003d188151a1", PRIVATE_KEY_1);
// console.log("++++++++++++++");
// let pub = secp.getPublicKey(PRIVATE_KEY_1);
// console.log("pub:" + toHex(pub));
// let ss = generateSignature("b7c9b928003d188151a1", PRIVATE_KEY_1);
// console.log(ss);
// address(PUBLIC_KEY_1);
// address(PUBLIC_KEY_2);
// address(PUBLIC_KEY_3);
// let sender1 =
// console.log(sender1);
// const bit = sender.charAt(-1);
// console.log(bit);
// const signa = sender.slice(-1);
// console.log(signa);
// generateSignature("50", PRIVATE_KEY_2);
// generateSignature("50", PRIVATE_KEY_3);
module.exports = getAddress;
module.exports = getPub;
