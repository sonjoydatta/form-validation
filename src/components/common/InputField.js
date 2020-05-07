import React from 'react';
import { Form } from 'react-bootstrap';

function InputField(props) {
  const { label, labelIsHide, type, name, placeholder, errorMsg, ...rest } = props;

  return (
    <Form.Group controlId={name}>
      <Form.Label className={labelIsHide ? 'sr-only' : ''}>{label}</Form.Label>
      <Form.Control
        {...rest}
        type={type}
        name={name}
        placeholder={placeholder}
        isInvalid={!!errorMsg}
      />
      <Form.Control.Feedback type="invalid">
        {errorMsg}
      </Form.Control.Feedback>
    </Form.Group>
  );
}

export default InputField;