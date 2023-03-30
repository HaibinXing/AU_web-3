const secp = require("ethereum-cryptography/secp256k1");
const { keccak256 } = require("ethereum-cryptography/keccak");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");
const userKeys = new Map([
  [
    "90e4dbdc171a6c17c626",
    "6da981033e3f95b3223495cbcbd99d6424032841e1c32bef9cce8a0e7ed977ce",
  ],
  [
    "1bf81e4936b5ffe8b077",
    "f92a1f3fb219a3dbf11cc387ec66c854ceb1cb306e68d969cebf8340d0910753",
  ],
  [
    "b7c9b928003d188151a1",
    "9358a7774c19a8d9b9c9a6757fe572fe0167bbdbc21aef94ac6aef1f54da33ab",
  ],
]);
// const PRIVATE_KEY_1 =
//   "6da981033e3f95b3223495cbcbd99d6424032841e1c32bef9cce8a0e7ed977ce";
// const PUBLIC_KEY_1 =
//   "0480d4fa5e6cd42fc4dfa20de25960624f3bfec005a8c1ced362a634e298beb993403c35f6e864eb1ea7e9e3e941c27f8dd3583b45d12617cdcf0591dfe1707b18";
// const PRIVATE_KEY_2 =
//   "f92a1f3fb219a3dbf11cc387ec66c854ceb1cb306e68d969cebf8340d0910753";
// const PUBLIC_KEY_2 =
//   "04c9fc2d115570ea164d46e335689a892f7888b3c494f66a5af37981d5a8e06fdaa3b05379d7663c00fa85e878ddb1c1a8fca06d1cecb9ae3504e2be28e2083da4";
// const PRIVATE_KEY_3 =
//   "9358a7774c19a8d9b9c9a6757fe572fe0167bbdbc21aef94ac6aef1f54da33ab";
// const PUBLIC_KEY_3 =
//   "04c2640fa52a2b7302a4b087c88d11f8f9f8d2b70bdee37d1930bd42cd4dd44562ed259cef86c60685a42e3d692d78dc8fad6c2808f8fad178ecda89e49235171c";
// async function address(pubKey) {
//   const pubKeyHash = await secp.utils.sha256(pubKey);
//   //   console.log(toHex(pubKeyHash));
//   const addr = toHex(pubKeyHash).slice(-20);
//   console.log(addr);
//   return addr;
// }
async function generateSignature(message, address) {
  if (userKeys.has(address)) {
    let privKey = userKey.get(address);
  } else {
    return -1;
  }
  const messageHash = await secp.utils.sha256(message);

  // console.log(toHex(amountHash));
  const signature = await secp.sign(messageHash, privKey, { recovered: true });
  return signature;
}

export default generateSignature;
