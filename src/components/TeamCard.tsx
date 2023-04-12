import { useEffect, useState } from "react";
import { getFilePreview } from "../api/storage";
import { Team } from "../models/team";
import { Constants } from "../utils/constants";

export const TeamCard = (prop: { team: Team }) => {
  async function getImage(fileId: string) {
    const imgData = await getFilePreview(Constants.TEAM_BUCKET, fileId);

    setImage(imgData.href);
  }
  const [image, setImage] = useState<string>("");
  useEffect(() => {
    getImage(prop.team.image_id);
  }, []);
  return (
    <div className="box">
      <img src={image} />
      <h3>{prop.team.name}</h3>
      <h5>{prop.team.designation}</h5>
      <div className="icons">
        {prop.team.github && (
          <a href={prop.team.github}>
            {" "}
            <i className="fa-brands fa-github"></i>{" "}
          </a>
        )}

        {prop.team.linkedin && (
          <a href={prop.team.linkedin}>
            <i className="fa-brands fa-linkedin"></i>
          </a>
        )}
        {prop.team.instagram && (
          <a href={prop.team.instagram}>
            <i className="fa-brands fa-instagram"></i>
          </a>
        )}
        {prop.team.twitter && (
          <a href={prop.team.twitter}>
            {" "}
            <i className="fa-brands fa-twitter"></i>{" "}
          </a>
        )}
        {prop.team.facebook && (
          <a href={prop.team.facebook}>
            {" "}
            <i className="fa-brands fa-facebook"></i>{" "}
          </a>
        )}

        {prop.team.website && (
          <a href={prop.team.website}>
            {" "}
            <i className="fa-brands fa-globe"></i>{" "}
          </a>
        )}
      </div>
    </div>
  );
};
