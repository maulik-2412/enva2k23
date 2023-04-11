const EventsCard = () => {
  return (
      <div className="card">
        <div className="card__content">
          <div className="card__front">
            <h3 className="card__title">Event1</h3>
            <p className="card__subtitle">Open Mic </p>
          </div>

          <div className="card__back">
            <p className="card__body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit qui
              perferendis tenetur iure quod provident sed quas dignissimos,
              deleniti eos optio!
              {/* <button>Register below</button> */}
            </p>
            <button className="event-register">Register</button>
          </div>
        </div>
      </div>
  );
};

export default EventsCard;
