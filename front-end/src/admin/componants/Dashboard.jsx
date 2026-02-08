import { Grid } from "@mui/material";
import Achivements from "./Achivements";
import MonthlyOverview from "./MonthlyOverview";
import OrderTableView from "../view/OrderTableView";
import ProductsTable from "./ProductsTable";
import ProductsTableView from "../view/ProductTableView";

const Dashboard = () => {
  return (
    <div className="p-10 h-full w-full overflow-scroll">
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 4 }}>
          <div className="shadow-lg shadow-gray-500">
            <Achivements />
          </div>
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>
          <div className="shadow-lg shadow-gray-500">
            <MonthlyOverview />
          </div>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <div className="shadow-lg shadow-gray-500">
            <OrderTableView />
          </div>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <div className="shadow-lg shadow-gray-500">
            <ProductsTableView />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
