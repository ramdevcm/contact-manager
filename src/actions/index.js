import axios from "axios";

export const client = axios.create({
  baseURL: "http://ec2-13-127-58-116.ap-south-1.compute.amazonaws.com:3030",
  headers: {
    "Content-Type": "application/json"
  }
})
