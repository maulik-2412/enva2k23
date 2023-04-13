import { Event } from "../models/event";

const EventsCard = (prop: { event: Event }) => {
  return (

    <div className="event-card">
      <img src="https://via.placeholder.com/150" alt={prop.event.event_name} />
      <div className="event-details">
        <h3>{prop.event.event_name}</h3>
        <p>{prop.event.event_description}</p>
        <a href="" className="register-btn">
          Register Now
        </a>
      </div>
    </div>
  );
};

export default EventsCard;

