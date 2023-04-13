import EventsCard from "../components/EventsCard";
import Particle from "../components/Particle";
const Events = () => {
  return (
    <div className="eventpage" id="events">
      <div className="container">
        <EventsCard/>
        <EventsCard/>
        <EventsCard/>
        <EventsCard/>
        {/* <Particle/> */}
      </div>
   </div>  );
};

export default Events;
