import { Event } from "../models/event";

const EventsCard = (props: {event: Event}) => {
  return (
    <div className="card">
      <div className="card__content">
        <div className="card__front">
          <h3 className="card__title">{props.event.event_name}</h3>
          {/* <p className="card__subtitle">Open Mic </p> */}
        </div>

        <div className="card__back">
          <p className="card__body">
            {props.event.event_description}
            {/* <button>Register below</button> */}
          </p>
          <button className="event-register">Register</button>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
