import React from "react"
import {Link} from 'react-router-dom'

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 6000,
  },
});


export const NavBar=()=>{

    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return(
        <>


  <Paper square className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="icon label tabs example"
      >
        <Tab
          label="SIGN UP"
          component={Link}
          to="/"
          className={classes.tab}
        />
        <Tab
          label="SHOPPING LIST"
          component={Link}
          to="shoppingList"
          className={classes.tab}
        />
        <Tab
          label="NEW LIST"
          component={Link}
          to="newList"
          className={classes.tab}
        />
        <Tab
          label="SHOPPING HISTORY"
          component={Link}
          to="shoppingHistory"
          className={classes.tab}
        />
      </Tabs>
    </Paper>
        </>
    )
}

