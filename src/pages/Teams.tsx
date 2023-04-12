import { useEffect, useState } from "react";
import { Team } from "../models/team";
import { getTeamList } from "../api/database";
import { TeamCard } from "../components/TeamCard";

const Teams = () => {
  async function getTeam() {
    const response = await getTeamList();
    setTeam(response);
  }
  const [team, setTeam] = useState<Team[]>([]);
  useEffect(() => {
    getTeam();
  }, []);

  if (team.length > 0)
    return (
      <div>
        <section className="team" id="team">
          <div className="center">
            <h1>Our Team</h1>
          </div>

          <div className="team-content">
            {team.map((team) => (
              <TeamCard team={team} />
            ))}
          </div>
        </section>
      </div>
    );
};

export default Teams;
