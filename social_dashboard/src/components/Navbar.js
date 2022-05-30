import * as React from 'react';
import { useState } from 'react';
import { AppBar, Grid, Tab, Tabs, Toolbar, Typography, useTheme, useMediaQuery } from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { Box } from '@mui/material';
import { Button } from '@mui/material';
import DrawerComp from './DrawerComp';


const Navbar = ({ links }) => {

  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  console.log(isMatch);
  const [value, setValue] = useState(0);
  return (
    <>
      <AppBar sx={{ backgroundImage: "linear-gradient(90deg, rgba(252,69,236,1) 0%, rgba(253,29,29,1) 50%, rgba(252,69,236,0.01826886432926833) 100%);" }}>
        <Toolbar>

          {isMatch ? <><Typography>
            <AcUnitIcon />
          </Typography> <DrawerComp links={links} /> </> :
            <Grid sx={{ placeItems: "center" }} container>
              <Grid item xs={2}>
                <Typography>
                  <AcUnitIcon />
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Tabs indicatorColor='secondary' textColor="inherit" value={value} onChange={(e, val) => setValue(val)}>
                  {links.map((link, index) => (
                    <Tab key={index} label={link} />
                  ))}
                </Tabs>
              </Grid>
              <Grid item xs={1} />
              <Grid item xs={3}>
                <Box display="flex">
                  <Button sx={{ marginLeft: 'auto', background: "rgba(69,138,252,1)" }} variant="contained">Login</Button>
                  <Button sx={{ marginLeft: 1, background: "rgba(69,138,252,1)" }} variant="contained">Signup</Button>
                </Box>
              </Grid>
            </Grid>}

        </Toolbar>
      </AppBar>
    </>
  );
};
export default Navbar;
