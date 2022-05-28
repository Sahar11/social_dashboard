import * as React from 'react';
import { useState } from 'react';
import { AppBar, Grid, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';


const Navbar = () => {

const [value, setValue] = useState(0);
  return (
    <>
      <AppBar>
        <Toolbar>
          <Grid container>
            <Grid item xs={2}>
              <Typography>
                <AcUnitIcon />
              </Typography>
            </Grid>
            <Grid item xs={5}>
              <Tabs indicatorColor='secondary' textColor="inherit" value={value} onChange={(e, val) => setValue(val)}>
                <Tab label="Products" />
                <Tab label="Overview" />
                <Tab label="Pricings" />
              </Tabs>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Navbar;
