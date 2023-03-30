import axios from "axios";
//To create an instance, we'll use the .create() method, which lets us
//specify information such as the URL and possibly headers:
const server = axios.create({
  baseURL: "http://localhost:3042",
});

export default server;
