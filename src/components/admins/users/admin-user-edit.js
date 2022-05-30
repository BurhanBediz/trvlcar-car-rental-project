import React, {useState,useEffect} from 'react'
import { Button, Form, Spinner, Container } from "react-bootstrap";
import * as Yup from "yup";
import MaskedInput from "react-maskedinput";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { adminUpdateUser } from '../../../api/admin-user-service';

const AdminUserEdit = ({user,id}) => {
    const [loading, setLoading] = useState(false);
    const [isRoleCustomer,setIsRoleCustomer] = useState(user.roles.includes("Customer") ? true : false);
    const [isRoleAdmin,setIsRoleAdmin] = useState(user.roles.includes("Administrator") ? true : false);
    
    const initialValues = {
        firstName: user.firstName,
        lastName: user.lastName,
        /* password:user.password, */
        phoneNumber: user.phoneNumber,
        address: user.address,
        zipCode: user.zipCode,
        email: user.email,
        customer:false,
        admin:false
      };

      

      const validationSchema = Yup.object({
        firstName: Yup.string().required("Please enter your first name"),
        lastName: Yup.string().required("Please enter your last name"),
     /*    password:Yup.string()
        .required("Please enter your new password")
        .min(8, "Must be at least 8 characters")
        .matches(/[a-z]+/, "One lowercase character")
        .matches(/[A-Z]+/, "One uppercase character")
        .matches(/[@$!%*#?&]+/, "One special character")
        .matches(/\d+/, "One number"), */
        phoneNumber: Yup.string()
          .required()
          .test(
            "includes_",
            "Please enter your phone number",
            (value) => value && !value.includes("_")
          ),
        address: Yup.string().required("Please enter your address"),
        zipCode: Yup.string().required("Please enter your zip code"),
        email: Yup.string().email().required("Please enter your email"),
      });
  
      const onSubmit = async (values) => {
        setLoading(true);
        console.log(values)
          const userRoles = [];
          if(isRoleCustomer)
          userRoles.push("Customer");
          if(isRoleAdmin)
          userRoles.push("Administrator");
          delete values.customer;
          delete values.admin;
          const userData = {...values,roles:userRoles}
          
          try {

            await adminUpdateUser(userData,id);
            toast("User was updated successfully");
            
          } catch (err) {
            toast(err.response.data.message)
          }
          finally{
            setLoading(false);
          }
       }
       const formik = useFormik({
           initialValues,
           validationSchema,
           onSubmit,
       })
   
  return (
      <Container className="px-5">
        <h2 className="text-center">User Update</h2>
    <Form noValidate onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          {...formik.getFieldProps("firstName")}
          isInvalid={formik.touched.firstName && formik.errors.firstName}
          isValid={formik.touched.firstName && !formik.errors.firstName}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.firstName}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          {...formik.getFieldProps("lastName")}
          isInvalid={formik.touched.lastName && formik.errors.lastName}
          isValid={formik.touched.lastName && !formik.errors.lastName}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.lastName}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          {...formik.getFieldProps("password")}
          isInvalid={formik.touched.password && formik.errors.password}
          isValid={formik.touched.password && !formik.errors.password}
          disabled
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.password}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="text"
          as={MaskedInput}
          mask="(111) 111-1111"
          {...formik.getFieldProps("phoneNumber")}
          isInvalid={formik.touched.phoneNumber && formik.errors.phoneNumber}
          isValid={formik.touched.phoneNumber && !formik.errors.phoneNumber}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.phoneNumber}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          {...formik.getFieldProps("email")}
          isInvalid={formik.touched.email && formik.errors.email}
          isValid={formik.touched.email && !formik.errors.email}
          
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.email}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          {...formik.getFieldProps("address")}
          isInvalid={formik.touched.address && formik.errors.address}
          isValid={formik.touched.address && !formik.errors.address}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.address}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Zip Code</Form.Label>
        <Form.Control
          type="text"
          {...formik.getFieldProps("zipCode")}
          isInvalid={formik.touched.zipCode && formik.errors.zipCode}
          isValid={formik.touched.zipCode && !formik.errors.zipCode}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.zipCode}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Check 
                type="checkbox"
                inline
                label="Customer"
                id="customer"
                {...formik.getFieldProps("customer")}
                isInvalid={formik.touched.customer && formik.errors.customer}
                checked={isRoleCustomer}
                onClick = {()=>setIsRoleCustomer(!isRoleCustomer)}
        />
      <Form.Check 
                type="checkbox"
                label="Administrator"
                inline
                id="admin"
                {...formik.getFieldProps("admin")}
                isInvalid={formik.touched.admin && formik.errors.admin}
                checked={isRoleAdmin}
                onClick = {()=>setIsRoleAdmin(!isRoleAdmin)}
        />

      
      <Button variant="primary" type="submit" disabled={loading} className="d-block my-4">
        {loading && <Spinner animation="border" size="sm" />} Update
      </Button>
    </Form>
    </Container>
  )
}

export default AdminUserEdit