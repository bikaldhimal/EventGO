import React, { useState, useEffect, useRef } from "react";
import axios from "./../../axios";
import { Link } from "react-router-dom";
import QRCode from "qrcode.react";

const UserQR = () => {
  const userId = localStorage.getItem("id");
  const [payments, setPayments] = useState([]);
  const [showQRCode, setShowQRCode] = useState(true);
  const qrRef = useRef(null);

  // Get payment Details
  useEffect(() => {
    axios
      .get(`/payment/get/${userId}`)
      .then((response) => {
        setPayments(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  // Make QR Code Downloadable
  const handleDownload = (eventTitle) => {
    const canvas = qrRef.current.querySelector("canvas");
    const dataURL = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = `${eventTitle}.png`;
    link.click();
  };

  return (
    <>
      {payments.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {payments.map((payment) => (
            <div
              ref={qrRef}
              key={payment.idx}
              className="w-[100%] flex flex-col gap-3 p-5 justify-center items-center border-2 border-gray-400 rounded-md"
            >
              <button onClick={() => setShowQRCode(!showQRCode)}>
                Show QR Code
              </button>
              {showQRCode && (
                <div className="flex flex-col justify-center items-center">
                  <div className="flex flex-col items-center justify-between">
                    <h2 className="text-lg font-bold mb-2 text-center">
                      {payment.eventTitle}
                    </h2>
                    <QRCode
                      id={`qr-code-${payment.idx}`}
                      value={JSON.stringify({
                        eventTitle: payment.eventTitle,
                        amount: payment.amount,
                        mobile: payment.mobile,
                        token: payment.token,
                        status: "verified",
                        approved_by: "EventGO",
                      })}
                    />
                  </div>

                  <button
                    className="mt-2 text-center"
                    onClick={() => handleDownload(payment.eventTitle)}
                  >
                    Download QR Code
                  </button>
                </div>
              )}

              <h5 className="text-sm font-light text-center">
                Powered by EventGO
              </h5>
            </div>
          ))}
        </div>
      ) : (
        <h3 className="text-center my-10">
          There are no tickets yet. <br />
          <Link to="/user" className="text-sm font-normal text-blue-500">
            Go back to events and buy the tickets
          </Link>
        </h3>
      )}
    </>
  );
};

export default UserQR;
