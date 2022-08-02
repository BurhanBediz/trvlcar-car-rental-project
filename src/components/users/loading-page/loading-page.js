import React from 'react'
import logo from '../../../assets/img/logo/logo.png'
import {Spinner} from 'react-bootstrap'
import './loading-page.css'

const LoadingPage = () => {
  return (
    <div className="loading-page">
        <img src={logo} alt="Bediz Car"/>
        <Spinner className="spinner" animation = "border"></Spinner>
    </div>
  )
}

export default LoadingPage