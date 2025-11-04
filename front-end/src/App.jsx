import { Route, Routes } from "react-router-dom";
import CustomerRouters from "./routers/CustomerRouters";

function App() {
  return (
    <>
      <div className="">
        <Routes>
          <Route path="*" element={<CustomerRouters />} />
        </Routes>
        <div></div>
      </div>
    </>
  );
}

export default App;
