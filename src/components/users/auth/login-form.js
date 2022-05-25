import React, {useState} from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { login } from "../../../api/user-service";
import { getUser } from "../../../api/user-service";
import { useStore } from "../../../store";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../../../store/user/userActions";

import PasswordInput from "../common/password-input/password-input";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  
  const {dispatchUser } = useStore();
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Please enter your email"),
    password: Yup.string().required("Please enter your password"),
  });
  const onSubmit = (values) => {
    setLoading(true);
    login(values)
      .then((respLogin) => {
        console.log(respLogin);
        localStorage.setItem("token", respLogin.data.token);
        getUser()
          .then((respUser) => {
            console.log(respUser);
            setLoading(false);
            dispatchUser(loginSuccess(respUser.data));
            navigate(-1);
          })
          .catch((err) => {
            toast(err.response.data.message);
            setLoading(false);
          });
      })
      .catch((err) => {
        toast(err.response.data.message);
        setLoading(false);
      });
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  return (
    <Form noValidate onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          {...formik.getFieldProps("email")}
          isInvalid={formik.touched.email && formik.errors.email}
          isValid={formik.touched.email && !formik.errors.email}
        />

        <Form.Control.Feedback type="invalid">{formik.errors.email}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
       <PasswordInput {...formik.getFieldProps("password")}
        isInvalid={formik.touched.password && formik.errors.password}
        isValid={formik.touched.password && !formik.errors.password}
        error={formik.errors.password}/>
        
      </Form.Group>
      <Button variant="primary" type="submit" disabled={loading}>
        {loading && <Spinner animation="border" size="sm" />}Login
      </Button>
    </Form>
  );
};

export default LoginForm;
