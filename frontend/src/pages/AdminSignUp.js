import React from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { Formik, Field, Form as FormikForm, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import API from '../utils/api';
import { toast } from "react-toastify";

const initialValues = { fname: "", lname: "", email: "", password: "", role: "admin" }

const AdminSignUp = () => {

  const navigate = useNavigate();

  // Validation Schema using Yup
  const validationSchema = Yup.object().shape({
    fname: Yup.string()
      .min(2, "First name must be at least 2 characters")
      .required("First name is required"),
    lname: Yup.string()
      .min(2, "Last name must be at least 2 characters")
      .required("Last name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = async (values, resetForm) => {
    try {
      const data = {
        firstName: values.fname,
        lastName: values.lname,
        email: values.email,
        password: values.password,
        role: values.role
      }
      const response = await API.post(`/auth-signup`, data)
      if(response?.data?.code === 200 && response.data){
        toast.success(response?.data?.message);
        resetForm();
      }else{
        toast.error(response?.data?.message);
      }
    } catch (error) {
       console.log(error);
       toast.error("Something went wrong!");
    }
  }

  return (
    <Container fluid className="d-flex align-items-center justify-content-center vh-100 position-relative">
      {/* Back Button at Top Left */}
      <Button
        variant="outline-secondary"
        className="position-absolute top-0 start-0 m-3"
        onClick={() => navigate("/")}
      >
        ⬅ Back to Home
      </Button>

      <Row className="w-100 justify-content-center">
        <Col md={5}>
          <Card className="p-4 shadow-lg border-0 rounded">
            <h2 className="text-center mb-4">Admin Sign Up</h2>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setSubmitting(false);
                handleSubmit(values, resetForm)
              }}
            >
              {({ isSubmitting }) => (
                <FormikForm as={Form}>
                  <Form.Group className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <Field
                      type="text"
                      name="fname"
                      as={Form.Control}
                      placeholder="Enter first name"
                    />
                    <ErrorMessage name="fname" component="div" className="text-danger small" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Field
                      type="text"
                      name="lname"
                      as={Form.Control}
                      placeholder="Enter last name"
                    />
                    <ErrorMessage name="lname" component="div" className="text-danger small" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <Field
                      type="email"
                      name="email"
                      as={Form.Control}
                      placeholder="Enter email"
                    />
                    <ErrorMessage name="email" component="div" className="text-danger small" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Field
                      type="password"
                      name="password"
                      as={Form.Control}
                      placeholder="Enter password"
                    />
                    <ErrorMessage name="password" component="div" className="text-danger small" />
                  </Form.Group>

                  <Button type="submit" variant="warning" disabled={isSubmitting} className="w-100">
                    {isSubmitting ? "Signing Up..." : "Sign Up"}
                  </Button>
                </FormikForm>
              )}
            </Formik>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminSignUp;
