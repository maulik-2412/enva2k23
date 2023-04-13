import { Event } from "../models/event";

const EventsCard = (prop: {event: Event}) => {
  return (
<li className="cards_item">
      <div className="card">
        <div className="card_image"><img src="https://picsum.photos/500/300/?image=10"/></div>
        <div className="card_content">
          <h2 className="card_title">{prop.event.event_name}</h2>
          <p className="card_text">{prop.event.event_description}</p>
          <a href="" className="btn card_btn">Register</a>
        </div>
      </div>
    </li>
  );
  }
export default EventsCard;

