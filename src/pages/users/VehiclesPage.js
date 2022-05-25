import React from 'react'
import Spacer from '../../components/users/common/spacer/spacer'
import PageHeader from '../../components/users/common/page-header/page-header'
import Vehicles from '../../components/users/vehicles/vehicles'

const VehiclesPage = () => {
  return (
    <div>
      <PageHeader title="Our Cars"/>
      <Spacer/>
      <Vehicles/>
      <Spacer/>
    </div>
  )
}

export default VehiclesPage