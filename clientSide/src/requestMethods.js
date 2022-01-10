import axios from "axios";

const BaseUrl = "http://localhost:3000/";
const Token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZDZhNGZhMjM2M2VlNTEzMTQxNGQzMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTc1NTA2NywiZXhwIjoxNjQyMDE0MjY3fQ.AldykN-jgDDXHyX1qfvgnYgur-WxQXYKVSkP1Cf79Kg";

export const publicRequest = axios.create({
  baseURL: BaseUrl,
});

export const userRequest = axios.create({
  baseURL: BaseUrl,
  headers: { token: `Bearer ${Token}` },
});
