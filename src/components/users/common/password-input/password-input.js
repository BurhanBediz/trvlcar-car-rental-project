import React,{ useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";
import {InputGroup, Form} from 'react-bootstrap'

const PasswordInput = (props) => {
    const [isInputVisible, setIsInputVisible] = useState(false);
  return (
    <InputGroup className="mb-3">
      <Form.Control
        type={isInputVisible ? "text" : "password"}
       {...props}
      />
      <InputGroup.Text
        id="basic-addon1"
        onClick={() => setIsInputVisible(!isInputVisible)}
      >
        {isInputVisible ? (
          <BiHide className="eyeHide" />
        ) : (
          <BiShow className="eyeView" />
        )}
      </InputGroup.Text>

      <Form.Control.Feedback type="invalid">
        {props.error}
      </Form.Control.Feedback>
    </InputGroup>
  );
};

export default PasswordInput;
