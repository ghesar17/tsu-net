import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import {
  Box,
  Collapse,
  useTheme,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@mui/material";

import { useState } from "react";

const Sidebar = (props) => {
  const [dropdownOpen, setDropdown] = useState([]);

  const handleDropdownClick = () => {
    setDropdown(!dropdownOpen);
  };

  //   useEffect(() => {
  //     const fetchRandomCommunities = async () => {
  //       const response = await fetch("http://localhost:9000/api/communities");
  //       const json = await response.json();

  //       if (response.ok) {
  //         setRandomCommunities(json);
  //       }
  //     };
  //     fetchRandomCommunities();
  //   }, []);

  //   const sidebarItems = props.sidebarItems;

  const theme = useTheme();
  const lightBrown = theme.palette.dark.primaryLight;
  const hover = theme.palette.dark.hover;

  return (
    <Box position="fixed" top={75} left={20} width="240px">
      <List>
        <ListItem disablePadding>
          <ListItemButton
            sx={{
              borderRadius: 3,
              "&:hover": {
                backgroundColor: hover,
              },
            }}
          >
            <ListItemIcon sx={{ color: "white" }}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText sx={{ color: "white" }} primary="Home" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            sx={{
              borderRadius: 3,
              "&:hover": {
                backgroundColor: hover,
              },
            }}
          >
            <ListItemIcon sx={{ color: "white" }}>
              <WhatshotIcon />
            </ListItemIcon>
            <ListItemText sx={{ color: "white" }} primary="Trending" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider sx={{ bgcolor: "gray" }} />

      <List>
        <ListItemButton
          sx={{
            borderRadius: 3,
            "&:hover": {
              backgroundColor: hover,
            },
          }}
          onClick={handleDropdownClick}
        >
          <ListItemText
            sx={{
              borderRadius: 3,
              "&:hover": {
                backgroundColor: hover,
              },
              color: "gray",
            }}
          >
            Recent
          </ListItemText>
          {dropdownOpen ? (
            <ExpandLess sx={{ color: "white" }} />
          ) : (
            <ExpandMore sx={{ color: "white" }} />
          )}
        </ListItemButton>
        <Collapse in={dropdownOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{
                pl: 4,
                borderRadius: 3,
                "&:hover": {
                  backgroundColor: hover,
                },
              }}
            >
              <ListItemIcon sx={{ color: "white" }}>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText sx={{ color: "white" }} primary="Lorem ipsum" />
            </ListItemButton>

            <ListItemButton
              sx={{
                pl: 4,
                borderRadius: 3,
                "&:hover": {
                  backgroundColor: hover,
                },
              }}
            >
              <ListItemIcon sx={{ color: "white" }}>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText sx={{ color: "white" }} primary="Lorem ipsum" />
            </ListItemButton>
          </List>
        </Collapse>

        <List />

        <Divider sx={{ bgcolor: "gray" }} />

        <List>
          <ListItem disablePadding>
            <ListItemButton
              sx={{
                borderRadius: 3,
                "&:hover": {
                  backgroundColor: hover,
                },
              }}
            >
              <ListItemIcon sx={{ color: "white" }}>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText sx={{ color: "white" }} primary="Home" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              sx={{
                borderRadius: 3,
                "&:hover": {
                  backgroundColor: hover,
                },
              }}
            >
              <ListItemIcon sx={{ color: "white" }}>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText sx={{ color: "white" }} primary="Home" />
            </ListItemButton>
          </ListItem>
        </List>
      </List>
    </Box>
  );
};

export default Sidebar;
