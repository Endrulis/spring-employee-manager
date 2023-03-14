import React, { useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import employeeService from "../../services/EmployeeService";
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

const UpdateEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const updatedEmployee = { ...values, id: id };
      employeeService
        .updateEmployee(updatedEmployee, id)
        .then(() => {
          navigate("/employeeList");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });

  const { handleSubmit, values, errors, touched, handleChange } = formik;

  const fetchData = useCallback(async () => {
    try {
      const response = await employeeService.getEmployeeById(id);
      formik.setValues({
        firstName: response.data.firstName,
        lastName: response.data.lastName,
        email: response.data.email,
      });
    } catch (error) {
      console.log(error);
    }
    //eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.title}>
          <h1>Update Employee</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles.btnGroup}>
            <label className={styles.label}>First Name</label>
            <input
              type="text"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              className={styles.input}
            />
            {touched.firstName && errors.firstName ? (
              <div className={styles.error}>{errors.firstName}</div>
            ) : null}
          </div>
          <div className={styles.btnGroup}>
            <label className={styles.label}>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              className={styles.input}
            />
            {touched.lastName && errors.lastName ? (
              <div className={styles.error}>{errors.lastName}</div>
            ) : null}
          </div>
          <div className={styles.btnGroup}>
            <label className={styles.label}>Email</label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              className={styles.input}
            />
            {touched.email && errors.email ? (
              <div className={styles.error}>{errors.email}</div>
            ) : null}
          </div>
          <div className={styles.btnGroup}>
            <button type="submit" className={`${styles.btn} ${styles.primary}`}>
              Update
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

export default UpdateEmployee;
