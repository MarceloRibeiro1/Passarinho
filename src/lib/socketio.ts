import { io } from "socket.io-client";

const URL = process.env.VITE_API_URL as string;
const socket = io(URL, { autoConnect: true });

export default socket;
