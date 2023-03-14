import React from "react";
import { Link } from "react-router-dom";
import styles from "./css/Employee.module.css";

const Employee = ({ employee, deleteEmployee }) => {
  const { id, firstName, lastName, email } = employee;

  return (
    <tr key={employee.id} className={styles.row}>
      <td className={styles.cell}>
        <div className={styles.cellContent}>{firstName}</div>
      </td>
      <td className={styles.cell}>
        <div className={styles.cellContent}>{lastName}</div>
      </td>
      <td className={styles.cell}>
        <div className={styles.cellContent}>{email}</div>
      </td>
      <td className={`${styles.cell} ${styles.actions}`}>
        <button
          onClick={(e) => deleteEmployee(e, id)}
          className={`${styles.button} ${styles.delete}`}
        >
          Delete
        </button>
        <Link
          to={`/editEmployee/${id}`}
          className={`${styles.link} ${styles.edit}`}
        >
          Edit
        </Link>
      </td>
    </tr>
  );
};

export default Employee;
