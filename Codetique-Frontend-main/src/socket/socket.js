import { io } from "socket.io-client"

const BACKEND_URL = "https://codetique.onrender.com"
export const initSocket = () => {
    return io(BACKEND_URL, {
        reconnectionAttempts: 5,
    })
}