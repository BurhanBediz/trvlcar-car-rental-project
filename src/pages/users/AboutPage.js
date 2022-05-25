import React from 'react'
import Team from '../../components/users/about/team/team'
import PageHeader from '../../components/users/common/page-header/page-header'
import Spacer from '../../components/users/common/spacer/spacer'
import Whyus from '../../components/users/common/whyus/whyus'
import Testimonals from '../../components/users/common/testimonals/testimonals'

const AboutPage = () => {
  return (
    <>
    <PageHeader title="About Us"/>
    <Spacer/>
    <Whyus/>
    <Spacer/>
    <Testimonals/>
    <Spacer/>
    <Team/>
    <Spacer/>
    </>
  )
}

export default AboutPage