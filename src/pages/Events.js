import React from 'react'
import EventsCard from '../components/EventsCard'
import Particle from '../components/Particle'
const Events = () => {
  return (
    <div className='eventpage'>
    <Particle/>
      <EventsCard/>
      <EventsCard/>
      <EventsCard/>
      <EventsCard/>
      <EventsCard/>
    </div>
  )
}

export default Events