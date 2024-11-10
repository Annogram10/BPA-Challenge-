import React from 'react'
import Navbar from '../components/navbar'
import CreditCardForm from './components/creditCardForm'
const Page = () => {
  return (
    <div>
        <Navbar/>
        <div className=' '>
        <CreditCardForm/>
        </div>
    </div>
    )
}

export default Page