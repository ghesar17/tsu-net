// components
import Navbar from "../components/Navbar.jsx";
import Sidebar from "../components/Sidebar.jsx";
import MainFeed from "../components/MainFeed.jsx";

import { Box, Grid, Divider, useMediaQuery } from "@mui/material";

import "../App.css";

const Home = () => {
  const isNonMobileScreens = useMediaQuery("(min-width: 1200px)");

  return (
    <Box display={isNonMobileScreens ? "flex" : "block"}>
      <Navbar />
      {isNonMobileScreens && <Sidebar />}

      <Grid
        container
        direction="row"
        alignItems="flex-start"
        justifyContent="flex-start"
        gap="1rem"
        sx={{
          mt: "55px",
          ml: isNonMobileScreens ? "23vw" : "0",
        }}
      >
        <Grid item xs={12} sm={12} md={8.5} lg={7.5}>
          <MainFeed />
        </Grid>

        <Grid
          item
          sx={{ mt: "10px", height: "400px" }}
          bgcolor="gray"
          md={3}
          lg={3}
        />
      </Grid>
    </Box>
  );
};
export default Home;
