import { useEffect, useState } from "react";
import EventsCard from "../components/EventsCard";
import Particle from "../components/Particle";
import { getEvents } from "../api/database";
const EventList = () => {
  const [events, setEvents] = useState<Array<Event>>([]);
};

 async function getData() {
   const response = await getEvents();
   
  //  setEvents(response);
 }
const Events = () => {
  useEffect(() => {
   
    getData();
  }, []);
  return (
    <div className="eventpage" id="events">
      <EventsCard />
      <EventsCard />
      <EventsCard />
      <EventsCard />
      <EventsCard />
      <Particle />
    </div>
  );
};

export default Events;
