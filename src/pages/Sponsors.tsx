import { useEffect, useState } from "react";
import { getSponsors } from "../api/database";
import { Sponsor } from "../models/sponsor";
import { SponsorComponent } from "../components/SponsorComponent";

function Sponsors() {
  async function sponsorData() {
    const response = await getSponsors();
    setSponsors(response);
  }
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);

  useEffect(() => {
    sponsorData();
  }, []);
  if (sponsors.length > 0)
    return (
      <div className="sponsor-page" id="sponsors">
        <div className="sponsor-container">
          <h2 className="sponsor-heading">Sponsors</h2>
          <section className="sponsor-image-container">
            {sponsors.map((sponsor) => (
              <SponsorComponent sponsor={sponsor} />
            ))}
          </section>
        </div>
      </div>
    );
}

export default Sponsors;
