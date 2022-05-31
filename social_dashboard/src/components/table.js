import { Grid } from "@mui/material";
import React from "react";
import Item from '@mui/material/ListItem';
import { Box } from "@mui/material";

export default function Table() {

  return (
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>

    
      <Grid item xs={8}>
        <Item>xs=5</Item>
      </Grid>
      <Grid item xs={8}>
        <Item>xs=8</Item>
      </Grid>

    </Grid>
    </Box>
  )

}