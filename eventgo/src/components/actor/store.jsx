import { create } from "zustand";
import axios from "./../../axios";

export const storeActor = create((set, get) => ({
  message: "",
  receiver: "",
  files: null,
  messages: [],

  setMessage: (data) => {
    set({ message: data });
  },
  setReceiver: (data) => {
    set({ receiver: data });
    localStorage.setItem("receiver", data);
  },
  setFiles: (data) => {
    set({ files: data });
  },
  setMessages: (data) => {
    set({ messages: data });
  },

  sendMessage: () => {
    const { message, receiver } = get();
    let formData = new FormData();
    formData.append("files", get().files);
    formData.append("receiver", receiver);
    formData.append("message", message);
    axios
      .post("http://localhost:5051/api/message/send", formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log(response.data);
        set({ message: "" }); // Clear the message state after sending
      })
      .catch((error) => {
        console.log(error.message);
      });
  },

  getMessage: () => {
    axios
      .get(`/message/receive/${get().receiver}`, {
        withCredentials: true,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.status === 200) {
          set({ messages: response.data.messages });
          localStorage.setItem("messages", response.data.messages);
        }
      })
      .catch((error) => {
        console.log(error.meessage);
      });
  },
}));
