import axios from "axios";

const employeeAPI = axios.create({
  baseURL: "http://localhost:8080/api/v1/employees",
});

const employeeService = {
  saveEmployee: (employee) => employeeAPI.post("/", employee),
  getEmployees: () => employeeAPI.get("/"),
  deleteEmployee: (id) => employeeAPI.delete(`/${id}`),
  getEmployeeById: (id) => employeeAPI.get(`/${id}`),
  updateEmployee: (employee, id) => employeeAPI.put(`/${id}`, employee),
};

export default employeeService;
