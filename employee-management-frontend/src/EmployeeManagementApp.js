import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/EmployeeManagementApp.css";
import {
  Navbar,
  AddEmployee,
  EmployeeList,
  UpdateEmployee,
} from "./components";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<EmployeeList />}></Route>
        <Route path="/employeeList" element={<EmployeeList />} />
        <Route path="/addEmployee" element={<AddEmployee />} />
        <Route path="/editEmployee/:id" element={<UpdateEmployee />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
