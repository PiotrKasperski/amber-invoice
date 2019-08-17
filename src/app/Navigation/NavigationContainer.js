import {BrowserRouter as Router, Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import React from "react";
import Paper from "@material-ui/core/Paper";

const NavigationContainer= ({nextLink, prevLink}) =>{

   return <Paper><Link to={prevLink}><Button>Wróć</Button></Link><Link to={nextLink}><Button>Dalej</Button></Link></Paper>
};
export default NavigationContainer;
