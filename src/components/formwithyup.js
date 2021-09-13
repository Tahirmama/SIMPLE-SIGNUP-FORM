import { useFormik } from 'formik';
import React from 'react';
import * as yup from "yup";


function Form_Yup() {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },

        onSubmit: (values) => {
            console.log(values)
        },
    validationSchema: yup.object({
        email:yup.string().email().required("This Field is required."),
        password: yup.string()
        .min(6, 'Password is too short.')
        .max(15, 'Password is too long.')
        .required('This field is required.')
    })

    })

    return (
        <div className="Form">
            YUP FORM
            <form onSubmit={formik.handleSubmit}>
                <label>
                    Enter User Email :
                    {" "}
                    <input
                        type='text'
                        id="email"
                        placeholder=" EMAIL"
                        onChange={formik.handleChange}
                        value={formik.values.email}x    
                    />
                    <br />
                    {/* Warning msgs */}
                    {formik.errors.email ? <div className="err">{formik.errors.email}</div> : ""}
                </label>

                <br />
                <br />

                <label>
                    Enter User Password :
                    {" "}
                    <input
                        type='password'
                        id="password"
                        placeholder="  PASSWORD"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                    <br />
                         {/* Warning msgs */}
                    {formik.errors.password ? <div className="err">{formik.errors.password}</div> : ""}
                </label>
                <br />

                <input type="submit" />
            </form>
        </div>
    );
}

export default Form_Yup;
