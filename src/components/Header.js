import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { NavLink } from "react-router-dom";
const Header = () => {
  const [value, setValue] = useState();
  return (
    <div>
      <AppBar sx={{ backgroundColor: "#546e7a" }} position="sticky">
        <Toolbar>
          <NavLink to="/" style={{ color: "white" }}>
            <Typography>
              <MenuBookIcon />
            </Typography>
          </NavLink>
          <Tabs
          
          >
            <Tab strong label="BOOK-Store"/>
          </Tabs>
          <Tabs
            sx={{ ml: "auto" }}
            textColor="inherit"
            indicatorColor="primary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={NavLink} to="/add" label="Add product" />
            <Tab LinkComponent={NavLink} to="/books" label="Books" />
            <Tab LinkComponent={NavLink} to="/about" label="About Us" />
            <Tab LinkComponent={NavLink} to="/login" label="login" />

          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
