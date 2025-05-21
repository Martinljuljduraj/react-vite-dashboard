import { Box } from "@mui/material";
import { Header, LineChart } from "../../components";

const Line = () => {
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Methods of tansportation from people around the world" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
