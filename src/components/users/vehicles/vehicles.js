import React from 'react'
import { useStore } from '../../../store';
import VehicleCard from '../common/vehicle-card/vehicle-card';
import {Container,Row,Col} from 'react-bootstrap'

const Vehicles = () => {

    const {vehicleState} =useStore();
    const {vehicles} = vehicleState;
  return (
    <Container>
        <Row className="g-4">
            {
                vehicles.map((vehicle,index)=>(
                    <Col md={6} lg={3} key={index}>
                        <VehicleCard vehicle={vehicle}/>
                    </Col>
                ))
            }
        </Row>
    </Container>
  )
}

export default Vehicles