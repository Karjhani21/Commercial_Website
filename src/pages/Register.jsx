import React, { useState } from "react";
import "../css/register.css";

function Register() {

    const [showPassword, setShowPassword] = useState(false);

    const [user, setUser] = useState({
        fullname: "",
        email: "",
        mobile: "",
        password: "",
        confirmPassword: "",
        gender: "",
        dob: "",
        country: "",
        terms: false
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {

        const { name, value, type, checked } = e.target;

        setUser({
            ...user,
            [name]: type === "checkbox" ? checked : value
        });

    };

    const validate = () => {

        let error = {};

        if (user.fullname.trim() === "")
            error.fullname = "Full Name is required";

        if (!/\S+@\S+\.\S+/.test(user.email))
            error.email = "Valid Email required";

        if (!/^[0-9]{10}$/.test(user.mobile))
            error.mobile = "Enter 10 digit Mobile";

        if (user.password.length < 6)
            error.password = "Minimum 6 characters";

        if (user.confirmPassword !== user.password)
            error.confirmPassword = "Passwords do not match";

        if (user.gender === "")
            error.gender = "Select Gender";

        if (user.dob === "")
            error.dob = "Choose DOB";

        if (user.country === "")
            error.country = "Select Country";

        if (!user.terms)
            error.terms = "Accept Terms";

        setErrors(error);

        return Object.keys(error).length === 0;

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        if (validate()) {

            alert("Registration Successful");

            console.log(user);

        }

    };

    const passwordStrength = () => {

        if (user.password.length < 4)
            return "Weak";

        if (user.password.length < 8)
            return "Medium";

        return "Strong";

    };

    return (

        <div className="register-page">

            <form className="register-card" onSubmit={handleSubmit}>

                <h2>User Registration</h2>

                <input
                    type="text"
                    placeholder="Full Name"
                    name="fullname"
                    value={user.fullname}
                    onChange={handleChange}
                />
                <span>{errors.fullname}</span>

                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                />
                <span>{errors.email}</span>

                <input
                    type="text"
                    placeholder="Mobile Number"
                    name="mobile"
                    value={user.mobile}
                    onChange={handleChange}
                />
                <span>{errors.mobile}</span>

                <div className="password-box">

                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                    />

                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? "Hide" : "Show"}
                    </button>

                </div>

                <small className={passwordStrength()}>
                    Password Strength : {passwordStrength()}
                </small>

                <span>{errors.password}</span>

                <input
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={user.confirmPassword}
                    onChange={handleChange}
                />
                <span>{errors.confirmPassword}</span>

                <div className="radio-group">

                    <label>

                        <input
                            type="radio"
                            name="gender"
                            value="Male"
                            onChange={handleChange}
                        />

                        Male

                    </label>

                    <label>

                        <input
                            type="radio"
                            name="gender"
                            value="Female"
                            onChange={handleChange}
                        />

                        Female

                    </label>

                </div>

                <span>{errors.gender}</span>

                <input
                    type="date"
                    name="dob"
                    value={user.dob}
                    onChange={handleChange}
                />

                <span>{errors.dob}</span>

                <select
                    name="country"
                    value={user.country}
                    onChange={handleChange}
                >

                    <option value="">Select Country</option>
                    <option>India</option>
                    <option>USA</option>
                    <option>UK</option>
                    <option>Australia</option>

                </select>

                <span>{errors.country}</span>

                <label className="terms">

                    <input
                        type="checkbox"
                        name="terms"
                        checked={user.terms}
                        onChange={handleChange}
                    />

                    Accept Terms & Conditions

                </label>

                <span>{errors.terms}</span>

                <button className="register-btn">
                    Register
                </button>

            </form>

        </div>

    );

}

export default Register;