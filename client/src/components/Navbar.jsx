import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  Button,
  Typography,
  useTheme,
  useMediaQuery,
  InputBase,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import SearchIcon from "@mui/icons-material/Search";

import Tsunet from "../assets/tsunet-white.png";
import FlexBetween from "./UI/FlexBetween";

const Navbar = () => {
  const theme = useTheme();
  const primaryLight = theme.palette.dark.primaryLight;
  const primaryDark = theme.palette.dark.primaryDark;

  const showSiteTitle = useMediaQuery("(min-width: 640px)");

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [showOptions]);

  return (
    <FlexBetween
      bgcolor={primaryDark}
      width="100%"
      gap="10px"
      p="7px"
      position="fixed"
      top="0"
      left="0"
      zIndex="99"
    >
      <FlexBetween marginLeft="10px" gap="15px">
        <img width="40px" src={Tsunet}></img>

        {showSiteTitle && (
          <Typography
            color="white"
            fontSize="clamp(1rem, 2rem, 2.25rem)"
            fontWeight="bold"
          >
            Tsunet
          </Typography>
        )}
      </FlexBetween>

      <FlexBetween
        bgcolor={primaryLight}
        borderRadius="15px"
        padding="0.1rem 1.5rem"
      >
        <InputBase sx={{ color: "white" }} placeholder="Search..." />
        <IconButton>
          <SearchIcon sx={{ color: "gray" }} />
        </IconButton>
      </FlexBetween>

      <FlexBetween marginRight="20px" gap="15px">
        <FlexBetween>
          <Button
            sx={{ width: "80px", color: "white", backgroundColor: "green" }}
            variant="text"
          >
            Log In
          </Button>
        </FlexBetween>

        <FlexBetween>
          <Button onClick={handleClick}>
            <SettingsIcon />
          </Button>
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </FlexBetween>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
