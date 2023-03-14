import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import employeeService from "../../services/EmployeeService";
import Employee from "../Employee/Employee";
import styles from "./css/EmployeeList.module.css";

const EmployeeList = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState(null);
  const [setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await employeeService.getEmployees();
        setEmployees(response.data);
      } catch (error) {}
      setLoading(false);
    };
    fetchData();
  }, []);

  const deleteEmployee = async (e, id) => {
    e.preventDefault();
    try {
      await employeeService.deleteEmployee(id);
      setEmployees((prevEmployees) =>
        prevEmployees.filter((employee) => employee.id !== id)
      );
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className={styles.container}>
      <button
        onClick={() => navigate("/addEmployee")}
        className={styles.addEmployeeBtn}
      >
        Add Employee
      </button>
      <div className={styles.flex}>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              <th className={styles.th}>First Name</th>
              <th className={styles.th}> Last Name</th>
              <th className={styles.th}>Email ID</th>
              <th className={`${styles.actionsTd} ${styles.th}`}>Actions</th>
            </tr>
          </thead>
          {loading || employees === null ? (
            <tbody>
              <tr>
                <td colSpan="4" className={styles.loadingTd}>
                  Loading...
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody className={styles.bgGray}>
              {employees.map((employee) => (
                <Employee
                  employee={employee}
                  deleteEmployee={deleteEmployee}
                  key={employee.id}
                ></Employee>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
