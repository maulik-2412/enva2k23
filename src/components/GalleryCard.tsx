import { useEffect, useState } from "react";
import { Gallery } from "../models/gallery";
import { getFilePreview } from "../api/storage";
import { Constants } from "../utils/constants";

export const GalleryCard = (props: { gallery: Gallery }) => {
  const [image, setImage] = useState<string>("");

  async function getImage() {
    const response = await getFilePreview(Constants.GALLERY_BUCKET,props.gallery.event_image_id,500,300);
    setImage(response.href);
  }

  useEffect(() => {
    getImage()
  }, []);


  return (
    <div className="gallery-card">
      <div className="content">
        <span className="title">{props.gallery.event_name}</span>
        {/* <span className="category">Design / Creative</span> */}
      </div>
      <div className="image">
        <img src={image} alt={props.gallery.event_name} />
      </div>
    </div>
  );
};
