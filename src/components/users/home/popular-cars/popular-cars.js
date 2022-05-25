import React from "react";
import { Container,Row, Col } from "react-bootstrap";
import { useStore } from "../../../../store";
import SectionHeader from "../../common/section-header/section-header";
import VehicleCard from "../../common/vehicle-card/vehicle-card";

const PopularCars = () => {
  const { vehicleState } = useStore();
  const { vehicles } = vehicleState;

  return (
    <section>
      <SectionHeader
        title="Popular Cars"
        desc="Inbecilloque elegans errorem concedo etsi electram"
      />

      <Container>
        <Row className="g-4">
          {vehicles.slice(0,8).map((vehicle, index) => (
            <Col md={6} lg={3} key={index}>
              <VehicleCard vehicle={vehicle} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default PopularCars;