const EventDescription = (props) => {
  return (
    <div className="event-description-page">
      <div className="event-closing-menu">
          <i className="fa-sharp fa-solid fa-x" onClick={props.close}></i>
      </div>
      <div className="event-desc">
            <h1>Event Description</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ipsa eius odit quam unde alias iste, placeat fugiat sed debitis repudiandae magni, porro vel! Tempora deleniti doloremque velit incidunt assumenda.
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet sint excepturi tenetur! Inventore, nisi. Velit, est corrupti quasi rerum accusantium sunt ipsa recusandae ut vitae? Illum commodi necessitatibus quod vitae.
            </p>
      </div>
      <div className="event-desc">
            <h1>Detail</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ipsa eius odit quam unde alias iste, placeat fugiat sed debitis repudiandae magni, porro vel! Tempora deleniti doloremque velit incidunt assumenda.
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet sint excepturi tenetur! Inventore, nisi. Velit, est corrupti quasi rerum accusantium sunt ipsa recusandae ut vitae? Illum commodi necessitatibus quod vitae.
            </p>
      </div>
      <div className="event-desc">
            <h1>Team Details</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ipsa eius odit quam unde alias iste, placeat fugiat sed debitis repudiandae magni, porro vel! Tempora deleniti doloremque velit incidunt assumenda.
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet sint excepturi tenetur! Inventore, nisi. Velit, est corrupti quasi rerum accusantium sunt ipsa recusandae ut vitae? Illum commodi necessitatibus quod vitae.
            </p>
      </div>
      <div className="event-desc">
            <h1>General Instructions</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ipsa eius odit quam unde alias iste, placeat fugiat sed debitis repudiandae magni, porro vel! Tempora deleniti doloremque velit incidunt assumenda.
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet sint excepturi tenetur! Inventore, nisi. Velit, est corrupti quasi rerum accusantium sunt ipsa recusandae ut vitae? Illum commodi necessitatibus quod vitae.
            </p>
      </div>
      <a href="" className="event-register-btn">
            Register
          </a>
    </div>
  )
}

export default EventDescription