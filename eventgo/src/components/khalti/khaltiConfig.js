import khaltiKey from "./khaltiKey";
import axios from "axios";

let config = {
  // replace this key with yours
  publicKey: khaltiKey.publicTestKey,
  productIdentity: "24525111",
  productName: "EventGO",
  productUrl: "http://127.0.0.1:5173",
  eventHandler: {
    onSuccess(payload) {
      // hit merchant api for initiating verfication
      console.log(payload);
      let data = {
        token: payload.token,
        amount: payload.amount,
      };

      let config = {
        headers: {
          Authorization: khaltiKey.secretKey,
        },
      };

      axios
        .post("https://khalti.com/api/v2/payment/verify/", data, config)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // onError handler is optional
    onError(error) {
      // handle errors
      console.log(error);
    },
    onClose() {
      console.log("khalti widget is closing");
    },
  },
  paymentPreference: [
    "KHALTI",
    // "EBANKING",
    // "MOBILE_BANKING",
    // "CONNECT_IPS",
    // "SCT",
  ],
};

export default config;
