import React from "react";
import {
  Container,
  Form,
  Row,
  Col,
  FloatingLabel,
  InputGroup,
  Button,
} from "react-bootstrap";
import SectionHeader from "../common/section-header/section-header";
import * as Yup from "yup";
import { useFormik } from "formik";
import MaskedInput from "react-maskedinput";


const VehicleBookingForm = () => {

  const initialValues = {
    pickupLocation: "",
    dropoffLocation: "",
    pickupDate: "",
    pickupTime: "",
    dropoffDate: "",
    dropoffTime: "",
    cardNumber: "",
    nameOnCard: "",
    expireDate: "",
    cvc: "",
  };
  const validationSchema = Yup.object({
    pickupLocation: Yup.string().required("Please enter a pickup location"),
    dropoffLocation: Yup.string().required("Please enter a dropoff location"),
    pickupDate: Yup.string().required("Please enter a pickup date"),
    pickupTime: Yup.string().required("Please enter a pickup time"),
    dropoffDate: Yup.string().required("Please enter a dropoff date"),
    dropoffTime: Yup.string().required("Please enter a dropoff time"),
    cardNumber: Yup.string().required("Please enter the card number on card")
    .test(
      "includes_",
      "Please enter the card number on card",
      (value) => value && !value.includes("_")),
    nameOnCard: Yup.string().required("Please enter the name on card"),
    expireDate : Yup.string().required("Please enter the expire date on card")
    .test(
      "includes_",
      "Please enter the CVC number on card",
      (value) => value && !value.includes("_")),
    cvc: Yup.string().required("Please enter the CVC number on card")
    .test(
      "includes_",
      "Please enter the CVC number on card",
      (value) => value && !value.includes("_")),
  });
  const onSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  return (
    <>
      <SectionHeader title="Booking Form" />
      <Form noValidate onSubmit={formik.handleSubmit}>
        <Container>
          <Row>
            <Col md={6}>
              <FloatingLabel label="Pickup Location" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Pickup Location"
                  {...formik.getFieldProps("pickupLocation")}
                  isInvalid={
                    formik.touched.pickupLocation &&
                    formik.errors.pickupLocation
                  }
                  isValid={
                    formik.touched.pickupLocation &&
                    !formik.errors.pickupLocation
                  }
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.pickupLocation}
                </Form.Control.Feedback>
              </FloatingLabel>
              <FloatingLabel label="Dropoff Location" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Dropoff Location"
                  {...formik.getFieldProps("dropoffLocation")}
                  isInvalid={
                    formik.touched.dropoffLocation &&
                    formik.errors.dropoffLocation
                  }
                  isValid={
                    formik.touched.dropoffLocation &&
                    !formik.errors.dropoffLocation
                  }
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.dropoffLocation}
                </Form.Control.Feedback>
              </FloatingLabel>
              <InputGroup className="mb-3">
                <FloatingLabel label="Pickup Date" className="flex-grow-1">
                  <Form.Control
                    type="date"
                    placeholder="Pickup Date"
                    {...formik.getFieldProps("pickupDate")}
                    isInvalid={
                      formik.touched.pickupDate && formik.errors.pickupDate
                    }
                    isValid={
                      formik.touched.pickupDate && !formik.errors.pickupDate
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.pickupDate}
                  </Form.Control.Feedback>
                </FloatingLabel>
                <FloatingLabel label="Time">
                  <Form.Control
                    type="time"
                    placeholder="Pickup Time"
                    {...formik.getFieldProps("pickupTime")}
                    isInvalid={
                      formik.touched.pickupTime && formik.errors.pickupTime
                    }
                    isValid={
                      formik.touched.pickupTime && !formik.errors.pickupTime
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.pickupTime}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </InputGroup>
              <InputGroup className="mb-3">
                <FloatingLabel label="Dropoff Date" className="flex-grow-1">
                  <Form.Control
                    type="date"
                    placeholder="Dropoff Date"
                    {...formik.getFieldProps("dropoffDate")}
                    isInvalid={
                      formik.touched.dropoffDate && formik.errors.dropoffDate
                    }
                    isValid={
                      formik.touched.dropoffDate && !formik.errors.dropoffDate
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.dropoffDate}
                  </Form.Control.Feedback>
                </FloatingLabel>
                <FloatingLabel label="Time">
                  <Form.Control
                    type="time"
                    placeholder="Dropoff Time"
                    {...formik.getFieldProps("dropoffTime")}
                    isInvalid={
                      formik.touched.dropoffTime && formik.errors.dropoffTime
                    }
                    isValid={
                      formik.touched.dropoffTime && !formik.errors.dropoffTime
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.dropoffTime}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </InputGroup>
            </Col>
            <Col md={6}>
              <FloatingLabel label="Card Number" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Card Number"
                  as={MaskedInput}
                  mask="1111-1111-1111-1111"
                  {...formik.getFieldProps("cardNumber")}
                  isInvalid={
                    formik.touched.cardNumber && formik.errors.cardNumber
                  }
                  isValid={
                    formik.touched.cardNumber && !formik.errors.cardNumber
                  }
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.cardNumber}
                </Form.Control.Feedback>
              </FloatingLabel>
              <FloatingLabel label="Name on Card" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Name on Card"
                  {...formik.getFieldProps("nameOnCard")}
                  isInvalid={
                    formik.touched.nameOnCard && formik.errors.nameOnCard
                  }
                  isValid={
                    formik.touched.nameOnCard && !formik.errors.nameOnCard
                  }
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.nameOnCard}
                </Form.Control.Feedback>
              </FloatingLabel>
              <InputGroup className="mb-3">
                <FloatingLabel label="Expire Date" className="flex-grow-1">
                  <Form.Control
                    type="text"
                    placeholder="Expire Date"
                    {...formik.getFieldProps("expireDate")}
                    isInvalid={
                      formik.touched.expireDate && formik.errors.expireDate
                    }
                    isValid={
                      formik.touched.expireDate && !formik.errors.expireDate
                    }
                    as={MaskedInput} mask="11/11"
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.expireDate}
                  </Form.Control.Feedback>
                </FloatingLabel>
                <FloatingLabel label="CVC" className="flex-grow-1">
                  <Form.Control
                    type="text"
                    placeholder="CVC"
                    {...formik.getFieldProps("cvc")}
                    isInvalid={formik.touched.cvc && formik.errors.cvc}
                    isValid={formik.touched.cvc && !formik.errors.cvc}
                    as={MaskedInput} mask="111"
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.cvc}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </InputGroup>
              <Form.Check
                type="checkbox"
                label="I have read and aggree the sales contract"
                id="contract"
              />
            </Col>
            <Col className="text-center">
              <Button variant="primary" size="lg" type="submit" style={{marginTop:"1rem"}}>
                Book Now
              </Button>
            </Col>
          </Row>
        </Container>
      </Form>
    </>
  );
};
export default VehicleBookingForm;
