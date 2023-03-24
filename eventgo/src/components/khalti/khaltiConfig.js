import khaltiKey from "./khaltiKey";
import axios from "./../../axios";

let config = {
  // replace this key with yours
  publicKey: khaltiKey.publicTestKey,
  productIdentity: "24525111",
  productName: "EventGO",
  productUrl: "http://127.0.0.1:5173",
  eventHandler: {
    onSuccess(payload) {
      // hit merchant api for initiating verfication

      let data = {
        token: payload.token,
        amount: payload.amount,
      };

      let config = {
        headers: {
          Authorization: khaltiKey.secretKey,
        },
      };

      const userId = localStorage.getItem("id");
      const eventId = localStorage.getItem("eventId");
      const eventTitle = localStorage.getItem("eventTitle");

      axios
        .post("/payment/add", {
          idx: payload.idx,
          amount: payload.amount,
          mobile: payload.mobile,
          productIdentity: payload.product_identity,
          productName: payload.product_name,
          token: payload.token,
          widgetId: payload.widget_id,
          eventId: eventId,
          eventTitle: eventTitle,
          userId: userId,
        })
        .then((response) => {
          console.log("payment details added successfully");
          console.log(response.data.paymentDetails);
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
