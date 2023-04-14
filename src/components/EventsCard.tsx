import { useEffect, useState } from "react";
import { Event } from "../models/event";
import { getFilePreview } from "../api/storage";
import { Constants } from "../utils/constants";

const EventsCard = (prop: { event: Event }) => {
  const [image, setImage] = useState<string>("");
  async function getImage() {
    const response = await getFilePreview(
      Constants.EVENT_BUCKET,
      prop.event.event_image_id
    );
    setImage(response.href);
  }
  useEffect(() => {
    getImage();
  }, []);
  return (
    <li className="cards_item">
      <div className="card">
        <div className="card_image">
          <img
            src={
              image.length == 0
                ? "https://picsum.photos/500/300/?image=10"
                : image
            }
          />
        </div>
        <div className="card_content">
          <h2 className="card_title">{prop.event.event_name}</h2>
          <p className="card_text">{prop.event.event_description}</p>
          <a href="" className="btn card_btn">
            Register
          </a>
        </div>
      </div>
    </li>
  );
};
export default EventsCard;
