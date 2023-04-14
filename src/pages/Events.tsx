import { useEffect, useState } from "react";
import EventsCard from "../components/EventsCard";
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
  if (events.length > 0)
    return (
      <div className="eventpage" id="events">
        <h1>EVENTS</h1>
        <div className="cards">
          {events.map((event) => (
            <EventsCard event={event} />
          ))}
        </div>
      </div>
    );
};

export default Events;
