import React from 'react'
import CartTable from './components/cartTable'
import CartText from './components/cartText'
import BuyNow from './components/BuyNow'
import Navbar from '../components/navbar'

const Page = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="p-8">
        <h1 className="text-2xl font-bold mb-4 px-14">Cart</h1>
        <div className="flex justify-between items-start">
          <div className="w-2/3 h-full px-14"> {/* Adjusted width for CartTable */}
            <CartTable />
          </div>
          <div className="w-1/3 flex flex-col items-center ml-4">
            <CartText />
            <BuyNow />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Page
