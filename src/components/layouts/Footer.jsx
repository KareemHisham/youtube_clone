import { Box, Typography } from "@mui/material";
const Footer = () => {
  return (
    <Box component="footer">
      <Typography variant="body2" color="#fff" sx={{textAlign: "center"}}>
        &copy; copyright {new Date().getFullYear()}
      </Typography>
    </Box>
  );
};

export default Footer;
