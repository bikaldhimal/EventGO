import React from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

const Ticket = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          boxShadow: 1,
        }}
        className="hover:drop-shadow-md"
      >
        <Box sx={{ my: 3, mx: 2 }}>
          <Grid container alignItems="center">
            <Grid item xs>
              <Typography gutterBottom variant="h4" component="div">
                Dashain Festival
              </Typography>
            </Grid>
            <Grid item>
              <Typography gutterBottom variant="h6" component="div">
                Rs. 100.00
              </Typography>
            </Grid>
          </Grid>
          <Typography color="text.secondary" variant="body2">
            Stay connected with your family and the loved ones in this Dashain
            Festival.
          </Typography>
        </Box>
        <Divider variant="middle" />
        <Box sx={{ m: 2 }}>
          <Typography gutterBottom variant="body1"></Typography>
          <Stack direction="row" spacing={1}>
            <Chip label="Music" />
            <Chip color="primary" label="Festival" />
            <Chip label="Rock" />
            <Chip label="Folk" />
          </Stack>
        </Box>
        <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
          <Button>Buy Ticket</Button>
        </Box>
      </Box>
    </>
  );
};

export default Ticket;
