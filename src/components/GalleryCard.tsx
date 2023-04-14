import { Gallery } from "../models/gallery";

export const GalleryCard = (props: { gallery: Gallery }) => {
  return (
    <div className="gallery-card">
      <div className="content">
        <span className="title">{props.gallery.event_name}</span>
        {/* <span className="category">Design / Creative</span> */}
      </div>
      <div className="image">
        <img src={props.gallery.url} alt={props.gallery.event_name} />
      </div>
    </div>
  );
};
