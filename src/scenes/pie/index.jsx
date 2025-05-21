import { Box } from "@mui/material";
import { Header, PieChart } from "../../components";

const Pie = () => {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Popular programming languages" />
      <Box height="120vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
