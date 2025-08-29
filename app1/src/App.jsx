import { useState } from 'react'
import hero from './assets/illustration-hero.svg'
import music from './assets/icon-music.svg'
import './App.css'
function App() {
  return (
    <>
      <Card />
    </>
  )
}

function Card(){
  return(
    <div className='card'>
      <div style={{width: '100%', height: '200px', display: 'flex', justifyContent: 'center'}}>
        <img src={hero} alt="Hero Illustration" />
      </div>
      <CardBody />
    </div>
  )
}

function CardBody(){
  const cardDetails={
    title: "Order Summary",
    description:  "You can now listen to million of strong audiobooks on any device anywhere you like!",
  }
  return(
    <div className='card-body'>
      <h2>{cardDetails.title}</h2>
      <p>{cardDetails.description}</p>
      <div className='description'>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <img src={music} alt="Music Icon" />
          <div>
            <h5>Annual Plan</h5>
            <span className='price'>$59.99/year</span>
          </div>
        </div>
        <a href="#">Change</a>
      </div>
      <Boutton />
      <span className='cancel'>Cancel Order</span>
    </div>
  )
}

function Boutton(){
  return(
    <button style={{ backgroundColor: 'blue', color: 'white'}}>Proceed to Payment</button>
  )
}

export default App
