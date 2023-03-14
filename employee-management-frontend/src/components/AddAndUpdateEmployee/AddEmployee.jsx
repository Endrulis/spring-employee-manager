import React from "react";
import employeeService from "../../services/EmployeeService";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./css/AddAndUpdateEmployee.module.css";

const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email address is required"),
});

const AddEmployee = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      id: "",
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      employeeService
        .saveEmployee(values)
        .then((response) => {
          console.log(response);
          navigate("/employeeList");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });

  const { handleSubmit, values, errors, touched, handleChange } = formik;

  const reset = (e) => {
    e.preventDefault();
    formik.resetForm();
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.title}>
          <h1>Add New Employee</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles.btnGroup}>
            <label className={styles.label}>First Name</label>
            <input
              className={styles.input}
              type="text"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
            />
            {errors.firstName && touched.firstName && (
              <div className={styles.error}>{errors.firstName}</div>
            )}
          </div>
          <div className={styles.btnGroup}>
            <label className={styles.label}>Last Name</label>
            <input
              className={styles.input}
              type="text"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
            />
            {errors.lastName && touched.lastName && (
              <div className={styles.error}> {errors.lastName}</div>
            )}
          </div>
          <div className={styles.btnGroup}>
            <label className={styles.label}>Email</label>
            <input
              className={styles.input}
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && touched.email && (
              <div className={styles.error}>{errors.email}</div>
            )}
          </div>
          <div className={`${styles.btnGroup}`}>
            <button type="submit" className={`${styles.btn} ${styles.primary}`}>
              Save
            </button>
            <button
              onClick={reset}
              className={`${styles.btn} ${styles.secondary}`}
            >
              Clear
            </button>
            <button
              onClick={() => navigate("/employeeList")}
              className={`${styles.btn} ${styles.danger}`}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
