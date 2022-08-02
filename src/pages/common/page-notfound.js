import React from 'react'
import NotFound from '../../components/common/not-found/not-found'
import PageHeader from '../../components/users/common/page-header/page-header'
import Spacer from '../../components/users/common/spacer/spacer'


const PageNotFound = () => {
  return (
    <div>
        <PageHeader title="Page Not Found"/>
        <Spacer/>
        <NotFound/>
        <Spacer/>
    </div>
  )
}

export default PageNotFound