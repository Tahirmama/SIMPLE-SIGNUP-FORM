import { useFormik } from 'formik';
import React from 'react'


function Form() {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },

        onSubmit: (values) => {
            console.log(values)
        },
        validate: (values) => {
            let error = {};
            if (!values.email)
                error.email = "EMAIL IS REQUIRED"
            if (!values.password)
                error.password = "PASSWORD IS REQUIRED"
            return error;
        }
    })

    return (
        <div className="Form">
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

export default Form;
