import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
  InputBase,
  IconButton,
  TextField,
  Menu,
  MenuItem,
  FormControl,
  Modal,
  Link,
} from "@mui/material";

import Form from "./widgets/Form";

import SettingsIcon from "@mui/icons-material/Settings";
import SearchIcon from "@mui/icons-material/Search";

import Tsunet from "../assets/tsunet-white.png";
import FlexBetween from "./UI/FlexBetween";

const Navbar = () => {
  const navigate = useNavigate();

  const theme = useTheme();
  const main = theme.palette.primary.main;
  const primaryDark = theme.palette.primary.dark;
  const primaryLight = theme.palette.primary.light;
  const hover = theme.palette.primary.hover;
  const neutral = theme.palette.primary.neutral;

  const blue = theme.palette.secondary.main;

  const showSiteTitle = useMediaQuery("(min-width: 640px)");

  const [openLogin, setLoginOpen] = useState(false);
  const handleLoginToggle = () => setLoginOpen(!openLogin);

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
      <FlexBetween onClick={() => navigate("/")} marginLeft="10px" gap="15px">
        <img width="40px" src={Tsunet}></img>

        {showSiteTitle && (
          <Typography
            fontFamily={"Arial"}
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
        <InputBase placeholder="Search..." />
        <IconButton>
          <SearchIcon sx={{ color: "gray" }} />
        </IconButton>
      </FlexBetween>

      <FlexBetween marginRight="20px" gap="15px">
        <FlexBetween>
          <Button
            sx={{ width: "80px", color: "white", backgroundColor: "green" }}
            variant="text"
            onClick={handleLoginToggle}
          >
            Log In
          </Button>
          <Modal open={openLogin} onClose={handleLoginToggle}>
            <Form />
          </Modal>
        </FlexBetween>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
