import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "./../../axios";
import KhaltiCheckout from "khalti-checkout-web";
import config from "./../khalti/khaltiConfig";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Card, Button, CardActionArea, CardActions } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Events = () => {
  let navigate = useNavigate();
  const [events, setEvents] = useState([]);

  // Get events
  useEffect(() => {
    axios
      .get("/event")
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Request event
  const handleRequest = (event, userId) => {
    if (event) {
      axios
        .post(`event/request`, {
          managerId: userId,
          artistId: localStorage.getItem("id"),
          eventId: event,
        })
        .then((response) => {
          console.log(response.data);
          if (response.status === 200) {
            navigate("/actor/request");
          }
          if (response.data.status === 409) {
            if (!toast.isActive("empty-fields")) {
              toast.error("Already requested to this event", {
                position: "top-right",
                autoClose: 2000,
                toastId: "empty-fields",
              });
            }
          }
        })
        .catch((error) => {
          console.log(error.message);
          handleError();
        });
    }
  };

  // Khalti checkout
  let checkout = new KhaltiCheckout(config);

  const handleError = () => {
    if (!toast.isActive("empty-fields")) {
      toast.error("Error in server", {
        position: "top-right",
        autoClose: 2000,
        toastId: "empty-fields",
      });
    }
  };

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
              <Button
                onClick={() => handleRequest(event._id, event.userId)}
                size="small"
                color="primary"
              >
                Request
              </Button>
              <Button
                size="small"
                color="secondary"
                onClick={() => {
                  localStorage.setItem("eventId", event._id);
                  localStorage.setItem("eventTitle", event.title);
                  checkout.show({ amount: event.fee * 100 });
                }}
              >
                Buy Ticket
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
      <ToastContainer />
    </>
  );
};

export default Events;
