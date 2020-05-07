import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import Layout from '../Layout';
import { InputField } from '../common';
import useForm from '../form/useForm';
import validate from '../form/SignInValidation';

function SignIn() {
  function FormSignIn() {
    console.log(values);
  }

  const {
    values,
    errors,
    handleChange,
    handleSubmit
  } = useForm(FormSignIn, validate);

  return (
    <Layout>
      <div className="SignIn pt-5 pb-5">
        <Container>
          <Row>
            <Col md={{ span: 4, offset: 4 }}>
              <h3 className="mb-4">Please, Sign In</h3>
              <Form onSubmit={handleSubmit} noValidate>
                <InputField
                  type="email"
                  name="email"
                  label="Email address"
                  value={values.email || ''}
                  onChange={handleChange}
                  errorMsg={errors.email}
                  required
                />
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
                >Sign In</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
}

export default SignIn;