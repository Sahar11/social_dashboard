import { Grid } from "@mui/material";
import React from "react";
import { styled } from '@mui/material/styles';
import { Paper } from "@mui/material";
import { Box } from "@mui/material";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

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