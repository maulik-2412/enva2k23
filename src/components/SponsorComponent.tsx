import { useState } from "react";
import { Sponsor } from "../models/sponsor";
import { getFilePreview } from "../api/storage";
import { Constants } from "../utils/constants";

export const SponsorComponent = (prop: { sponsor: Sponsor }) => {
  const [image, setImage] = useState<string>("");
  async (id: string) => {
    const url = await getFilePreview(Constants.SPONSORHIP_BUCKET, id);
    setImage(url.href);
  };
  return (
    <div className="slide">
      <img src={image} alt={prop.sponsor.sponsor_name} />
    </div>
  );
};
