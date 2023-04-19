import { useEffect, useState } from "react";
import { Sponsor } from "../models/sponsor";
import { getFilePreview } from "../api/storage";
import { Constants } from "../utils/constants";

export const SponsorComponent = (prop: { sponsor: Sponsor }) => {
  const [image, setImage] = useState<string>("");
  async function getSponsorImage(id: string) {
    const url = await getFilePreview(Constants.SPONSORHIP_BUCKET, id);
    setImage(url.href);
  }

  useEffect(() => {
    getSponsorImage(prop.sponsor.image_id);
  }, []);
  return (
    <div className="slide">
      <img src={image} alt={prop.sponsor.sponsor_name} />
    </div>
  );
};
