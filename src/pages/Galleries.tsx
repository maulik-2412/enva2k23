import { useEffect, useState } from "react";
import { Gallery } from "../models/gallery";
import { getGallery } from "../api/database";
import { GalleryCard } from "../components/GalleryCard";

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
        <h1>GALLERY</h1>
        <div className="portfolio">
          {gallery.map((item) => (
            <GalleryCard gallery={item} />
          ))}
        </div>
      </div>
    );
};

export default Galleries;
