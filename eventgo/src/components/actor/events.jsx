import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import axios from "./../../axios";
import KhaltiCheckout from "khalti-checkout-web";
import config from "./../khalti/khaltiConfig";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Card, Button, CardActionArea, CardActions } from "@mui/material";

const Events = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    axios
      .get("/event/show")
      .then((response) => {
        setEvents(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
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
                <Typography variant="body2" color="text.secondary">
                  {event.description}
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
    </>
  );
};

export default Events;
