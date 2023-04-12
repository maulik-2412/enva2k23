import { useEffect, useState } from "react";
import EventsCard from "../components/EventsCard";
import Particle from "../components/Particle";
import { getEvents } from "../api/database";
import { Event } from "../models/event";

const Events = () => {
  async function getData() {
    const response = await getEvents();

    setEvents(response);
  }
  const [events, setEvents] = useState<Event[]>([]);
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="eventpage" id="events">
      {events.map((event) => (
        <EventsCard />
      ))}

      {/* <EventsCard />
      <EventsCard />
      <EventsCard />
      <EventsCard />
      <EventsCard />
      <Particle /> */}
    </div>
  );
};

export default Events;
