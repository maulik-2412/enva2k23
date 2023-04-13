import EventsCard from "../components/EventsCard";
import Particle from "../components/Particle";
const Events = () => {
  return (
    <div className="eventpage" id="events">
       <ul className="cards">
       <EventsCard/>
        <EventsCard/>
        <EventsCard/>
        <EventsCard/>
       </ul>

        {/* <Particle/> */}

   </div>  );
};

export default Events;
