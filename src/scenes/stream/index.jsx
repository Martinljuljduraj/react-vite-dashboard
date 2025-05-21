import { Box } from "@mui/material";
import { Header, StreamChart } from "../../components";

const Stream = () => {
  return (
    <Box m="20px">
      <Header title="Stream Chart" subtitle="Uncommon name chart" />
      <Box height="75vh">
        <StreamChart />
      </Box>
    </Box>
  );
};

export default Stream;
