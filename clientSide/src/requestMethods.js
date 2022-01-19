import axios from "axios";

const BaseUrl = "http://localhost:3000/";
const Token = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
  .currentUser.accessToken;

export const publicRequest = axios.create({
  baseURL: BaseUrl,
});

export const userRequest = axios.create({
  baseURL: BaseUrl,
  headers: { token: `Bearer ${Token}` },
});
