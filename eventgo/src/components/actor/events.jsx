import React, { useState, useEffect, useRef } from "react";
import { Link, Outlet } from "react-router-dom";
import axios from "./../../axios";
import KhaltiCheckout from "khalti-checkout-web";
import config from "./../khalti/khaltiConfig";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Card, Button, CardActionArea, CardActions } from "@mui/material";
import QRCode from "qrcode.react";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [payments, setPayments] = useState([]);
  const [showQRCode, setShowQRCode] = useState(false);
  const qrCodeRef = useRef(null);
  const [canvasReady, setCanvasReady] = useState(false);

  useEffect(() => {
    axios
      .get("/event/show")
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("/payment/get")
      .then((response) => {
        setPayments(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  // Make QR Code Downloadable
  useEffect(() => {
    // set the canvasReady state to true when the canvas element is created
    if (qrCodeRef.current && !canvasReady) {
      setCanvasReady(true);
    }
  }, [qrCodeRef, canvasReady]);

  const handleDownload = () => {
    if (canvasReady) {
      // get the data URL of the QR code image from the canvas element
      const canvas = qrCodeRef.current.querySelector("canvas");
      const dataUrl = canvas.toDataURL("image/png");

      // create a temporary link element and set its href attribute to the data URL of the QR code image
      const downloadLink = document.createElement("a");
      downloadLink.href = dataUrl;
      downloadLink.download = "qr-code.png";

      // simulate a click event to trigger the download
      downloadLink.click();
    }
  };

  // Khalti checkout
  let checkout = new KhaltiCheckout(config);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-4">
        {events.map((event) => (
          <Card
            sx={{ maxWidth: 345 }}
            key={event._id}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={event.image}
                title={event.category}
                alt="event"
                className="h-48"
              />
              <CardContent className="h-40 overflow-y-auto">
                <Typography gutterBottom variant="h5" component="div">
                  {event.title}
                </Typography>
                <Typography gutterBottom variant="subtitle1" component="h3">
                  {event.venue} |{" "}
                  {new Date(event.date).toLocaleDateString("en-US")}{" "}
                  {new Date(event.date).toLocaleString("en-US", {
                    date: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                  })}
                </Typography>
                <Typography gutterBottom variant="subtitle2" component="h3">
                  Fee: Rs. {event.fee}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {event.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Request
              </Button>
              <Button
                size="small"
                color="secondary"
                onClick={() => checkout.show({ amount: event.fee * 100 })}
              >
                Buy Ticket
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>

      {/* QR Code for Payment */}
      {payments.length !== 0 ? (
        <div className="w-fit flex flex-col gap-3 p-5 my-10 justify-center items-center border-2 border-gray-400">
          <button onClick={() => setShowQRCode(!showQRCode)}>
            Show QR Code
          </button>
          {showQRCode && (
            <div className="flex flex-col justify-center items-center">
              <QRCode
                id="qr-code"
                value={JSON.stringify(
                  payments.reduce((obj, item) => {
                    obj[item.idx] = {
                      amount: item.amount / 100,
                      mobile: item.mobile,
                      product_identity: item.product_identity,
                      prodect_name: item.prodect_name,
                      token: item.token,
                      widget_id: item.widget_id,
                      status: "verified",
                    };
                    return obj;
                  }, {})
                )}
              />
              <button className="mt-2" onClick={() => handleDownload()}>
                Download QR Code
              </button>
            </div>
          )}

          <h5 className="text-sm font-light">Powered by EventGO</h5>
        </div>
      ) : (
        ""
      )}
      {/* QR Code for payment ends */}
    </>
  );
};

export default Events;
