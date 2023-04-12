import { useEffect, useState } from "react";
import img from "../assets/images/img.jpg";
import { Gallery } from "../models/gallery";
import { getGallery } from "../api/database";

const Galleries = () => {
  async function galleryData() {
    const response = await getGallery();
    setGallery(response);
  }

  useEffect(() => {
    galleryData();
  }, []);

  const [gallery, setGallery] = useState<Gallery[]>([]);
  if (gallery.length > 0)
    return (
      <div className="gallery_page" id="gallery">
        <h1>PAST EVENTS</h1>
        <div className="portfolio"></div>
      </div>
    );
};

export default Galleries;
