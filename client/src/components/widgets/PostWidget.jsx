import {
  Box,
  Divider,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  CardMedia,
  Avatar,
  Typography,
  Collapse,
  useTheme,
} from "@mui/material";

import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { useState } from "react";

const PostWidget = ({
  // postId,
  // postUserId,
  user,
  name,
  description,
  location,
  postImage,
  userProfilePhoto,
  likes,
  comments,
}) => {
  const theme = useTheme();
  const main = theme.palette.primary.main;
  const primaryDark = theme.palette.primary.dark;
  const primaryLight = theme.palette.primary.light;
  const hover = theme.palette.primary.hover;
  const neutral = theme.palette.primary.neutral;

  return (
    <Card
      sx={{
        px: "10px",
        bgcolor: primaryDark,
        borderRadius: 3,
        "&:hover": {
          backgroundColor: hover,
        },
      }}
    >
      <CardHeader
        avatar={<Avatar src={userProfilePhoto} />}
        action={
          <IconButton sx={{ color: "white" }} aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={user}
        subheader={
          <Typography fontSize="0.8rem" color="gray">
            {location}
          </Typography>
        }
        sx={{
          px: 0,
          color: "white",
        }}
      ></CardHeader>
      <Typography pl="0px" fontSize="1.25rem" sx={{ color: "white" }}>
        {name}
      </Typography>
      <CardMedia component="img" image={postImage} />
      <CardActions sx={{ pl: "0" }} disableSpacing>
        <IconButton sx={{ color: "white" }} aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton sx={{ color: "white" }}>
          <CommentIcon />
        </IconButton>
        <IconButton sx={{ color: "white" }} aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
export default PostWidget;
