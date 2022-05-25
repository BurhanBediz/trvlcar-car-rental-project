import React,{useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PageHeader from '../../components/users/common/page-header/page-header'
import Spacer from '../../components/users/common/spacer/spacer'
import VehicleBookingForm from '../../components/users/vehicles/vehicle-booking-form'
import VehicleDetails from '../../components/users/vehicles/vehicle-details'
import { useStore } from '../../store'

const VehicleDetailsPage = () => {

  const {vehicleId} = useParams();//url den gelen id yi aldık
  const {vehicleState} = useStore();
  const {vehicles} = vehicleState;
  const [selectedVehicle,setSelectedVehicle] = useState(null)
  const navigate = useNavigate();

  useEffect(() => {
    const selectedVehicles = vehicles.filter( item => item.id == vehicleId);
    if(selectedVehicles.length<=0) 
    navigate("/notfound");//olmayan bir araç id'si seçilirse navigate ile 404 sayfasına yönlendir
    setSelectedVehicle(selectedVehicles[0]);
  }, [])//async olduğu için aşağıdaki işlem yapıldı
  
  if(selectedVehicle) // state doluysa a
  return (
    <>
    <PageHeader title={selectedVehicle.model}/>
    <Spacer/>
    <VehicleDetails vehicle={selectedVehicle}/>
    <VehicleBookingForm/>
    <Spacer/>
    </>
  )
}

export default VehicleDetailsPage