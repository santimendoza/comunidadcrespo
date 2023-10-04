import React from 'react';
import Form from 'react-bootstrap/Form';

function FormInput({label, onChange, required, placeholder, ...restInput}) {
  return (
    <Form.Group className="form-group">
      <Form.Label>
        {label} {required ? <span className="required-mark">*</span> : <></>}
      </Form.Label>
      <Form.Control onChange={onChange} required={required} {...restInput} />
      <Form.Control.Feedback type="invalid">
        Hay un error en el campo "{label}"
      </Form.Control.Feedback>
    </Form.Group>
  );
}

export default FormInput;
