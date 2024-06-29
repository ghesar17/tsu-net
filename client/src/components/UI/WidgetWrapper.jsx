import { Card } from "@mui/material";
import { styled } from "@mui/system";

const WidgetWrapper = styled(Card)(({ theme }) => ({
  padding: "0 0.75rem 0 0.75rem",
  backgroundColor: theme.palette.dark.primaryDark,
  borderRadius: "0",
}));

export default WidgetWrapper;
