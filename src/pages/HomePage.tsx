import { Box, Typography } from "@material-ui/core";

const HomePage = () => {
  return (
    <Box
      width={"100%"}
      display={"flex"}
      flex={"row"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Typography variant={"h2"} data-testid="home-title">
        Welcome to Redux Toolkit Course 🧑‍🏫 💻
      </Typography>
    </Box>
  );
};

export default HomePage;
