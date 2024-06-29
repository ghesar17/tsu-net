import PostWidget from "./widgets/PostWidget";
import { Box, List, useTheme } from "@mui/material";

// temporary import
import tkmiz from "../assets/tkmiz.jpg";
import wires from "../assets/wires.jpg";
import Motorcycle from "../assets/motorcycle.jpg";

import FlexBetween from "./UI/FlexBetween";

const MainFeed = () => {
  const theme = useTheme();

  const hover = theme.palette.dark.hover;
  const primaryLight = theme.palette.dark.primaryLight;
  const primaryDark = theme.palette.dark.primaryDark;

  const userName1 = "nycSHRIKE";
  const userName2 = "LMFAO";
  const userName3 = "okayyy";

  const desc = "This photo is too nice!";
  const loca = "Tokyo";

  return (
    <Box>
      <PostWidget
        user={userName1}
        name={"Scenery"}
        description={desc}
        location={loca}
        postImage={wires}
        userProfilePhoto={tkmiz}
        likes={69}
        // comments,
      />
      <PostWidget
        user={userName1}
        name={"Scenery"}
        description={desc}
        location={loca}
        postImage={Motorcycle}
        userProfilePhoto={tkmiz}
        likes={69}
        // comments,
      />
      <PostWidget
        user={userName1}
        name={"Scenery"}
        description={desc}
        location={loca}
        postImage={wires}
        userProfilePhoto={tkmiz}
        likes={69}
        // comments,
      />
      {/* {posts && posts.map((post) => <PostWidget key={post._id} post={post} />)} */}
    </Box>
  );
};
export default MainFeed;
