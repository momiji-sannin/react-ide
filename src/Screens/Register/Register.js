import React from "react";
import styles from "./Register.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => console.log(data);

    return(
        <div
        className={`${styles.container} container-fluid d-flex align-items-center justify-content-center`}
        >
            <div className={styles.registrationFormContainer}>
            <fieldset className="border p-3 rounded">
                <legend
                className={`${styles.registrationFormLegend} border rounded p-1 text-center`}
                >
                We will need. . .
                </legend>
                <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
                <div className="form-group">
                    <label htmlFor="inputForName">FULL NAME</label>
                    <span className="mandatory">*</span>
                    <input
                    id="inputForName"
                    name="name"
                    type="text"
                    className="form-control"
                    aria-describedby="Enter your full name"
                    placeholder="Enter your full name"
                    ref={register({
                        required: {
                          value: true,
                          message: "Please enter your full name",
                        },
                        minLength: {
                          value: 8,
                          message: "Minimum 8 characters are allowed",
                        },
                        maxLength: {
                          value: 15,
                          message: "Maximum 255 characters are allowed",
                        },
                    })}
                    />
                    {errors.name && (
                        <span className={`${styles.errorMessage} mandatory`}>
                        {errors.name.message}
                        </span>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="inputForUsername">USERNAME</label>
                    <span className="mandatory">*</span>
                    <input
                    id="inputForUsername"
                    name="username"
                    type="text"
                    className="form-control"
                    aria-describedby="Enter your username"
                    placeholder="Enter your username"
                    ref={register({
                        required: {
                          value: true,
                          message: "Please enter your full username",
                        },
                        minLength: {
                          value: 8,
                          message: "Minimum 8 characters are allowed",
                        },
                        maxLength: {
                          value: 12,
                          message: "Maximum 12 characters are allowed",
                        },
                    })}
                    />
                    {errors.username && (
                        <span className={`${styles.errorMessage} mandatory`}>
                        {errors.username.message}
                        </span>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="inputForPassword">PASSWORD</label>
                    <span className="mandatory">*</span>
                    <input
                    type="password"
                    className="form-control"
                    name="password"
                    id="inputForPassword"
                    placeholder="Enter your password"ref={register({
                        required: {
                          value: true,
                          message: "Please enter your password",
                        }
                    })}
                    />
                    {errors.password && (
                        <span className={`${styles.errorMessage} mandatory`}>
                        {errors.password.message}
                        </span>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="inputForPassword">CONFIRM PASSWORD</label>
                    <span className="mandatory">*</span>
                    <input
                    type="password"
                    className="form-control"
                    name="confirmPwd"
                    id="inputForConfirmPassword"
                    placeholder="Enter your password"ref={register({
                        required: {
                          value: true,
                          message: "Please enter your full confirm password",
                        },
                        minLength: {
                          value: 8,
                          message: "Minimum 8 characters are allowed",
                        },
                        maxLength: {
                          value: 12,
                          message: "Maximum 12 characters are allowed",
                        },
                    })}
                    />
                    {errors.confirmPwd && (
                        <span className={`${styles.errorMessage} mandatory`}>
                        {errors.confirmPwd.message}
                        </span>
                    )}
                </div>
                <div className="d-flex align-items-center justify-content-center">
                    <button type="submit" className="btn btn-outline-primary">
                    Submit
                    </button>
                    <button className="btn btn-link">
                    <Link to="/login">Cancel</Link>
                    </button>
                </div>
                </form>
            </fieldset>
            </div>
        </div>
    )
};

export default Register;