import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import Layout from '../Layout';
import { InputField } from '../common';
import useForm from '../form/useForm';
import validate from '../form/RegisterValidation';

function Register() {
  function FormRegister() {
    console.log(values);
  }

  const {
    values,
    errors,
    handleChange,
    handleSubmit
  } = useForm(FormRegister, validate);

  return (
    <Layout>
      <div className="Register pt-5 pb-5">
        <Container>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <h3 className="mb-4">Register now!</h3>
              <Form onSubmit={handleSubmit} noValidate>
                <Row>
                  <Col xs={6}>
                    <InputField
                      type="text"
                      name="firstName"
                      label="First name"
                      value={values.firstName || ''}
                      onChange={handleChange}
                      errorMsg={errors.firstName}
                      required
                    />
                  </Col>
                  <Col xs={6}>
                    <InputField
                      type="text"
                      name="lastName"
                      label="Last name"
                      value={values.lastName || ''}
                      onChange={handleChange}
                      errorMsg={errors.lastName}
                      required
                    />
                  </Col>
                  <Col xs={12}>
                    <InputField
                      type="text"
                      name="company"
                      label="Company"
                      value={values.company || ''}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col md={6}>
                    <InputField
                      type="email"
                      name="email"
                      label="Email address"
                      value={values.email || ''}
                      onChange={handleChange}
                      errorMsg={errors.email}
                      required
                    />
                  </Col>
                  <Col md={6}>
                    <InputField
                      type="text"
                      name="phone"
                      label="Phone number"
                      value={values.phone || ''}
                      onChange={handleChange}
                      errorMsg={errors.phone}
                      required
                    />
                  </Col>
                </Row>
                <InputField
                  type="password"
                  name="password"
                  label="Password"
                  value={values.password || ''}
                  onChange={handleChange}
                  errorMsg={errors.password}
                  required
                />
                <Button
                  block
                  type="submit"
                  variant="primary"
                >Create new account</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
}

export default Register;