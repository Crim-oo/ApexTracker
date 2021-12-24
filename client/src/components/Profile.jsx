import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ClassContext } from "../StatsProvider";
import { useNavigate } from "react-router-dom";
import { FaPlaystation, FaWindows, FaXbox } from "react-icons/fa";

const Profile = () => {
  const { stats, fetchStats, resetStats } = useContext(ClassContext);
  const { platform, gamertag } = useParams();
  const navigate = useNavigate();
  let i = 0;

  useEffect(() => {
    async function fetchData() {
      await fetchStats(platform, gamertag);
    }
    fetchData();
  }, []);

  const onClick = () => {
    resetStats();
    navigate("/");
  };

  if (stats.loading === true) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  } else if (stats.loading === false && stats.error === true) {
    return (
      <div className="error">
        <div className="errorMsg">
          <h1>{stats.errorRes}</h1>
          <button className="returnBtn" onClick={onClick}>
          Go Back
          </button>
        </div>
      </div>
    );
  } else
    return (
      <>
        <div className="playerContainer">
          <div className="profileContainer">
            <div className="leftProfile">
              <img
                src={stats.profileData.segments[1].metadata.imageUrl}
                alt="Apex Legends character"
              />
              <button className="returnBtn" onClick={onClick}>
                Go Back
              </button>
            </div>
            <div className="rightProfile">
              <div className="profileInfos">
                <div className="plat">
                <h1>{stats.profileData.platformInfo.platformUserId}</h1>
                {stats.profileData.platformInfo.platformSlug === "origin" ? (
                  <FaWindows className="platform-icon" />
                ) : stats.profileData.platformInfo.platformSlug === "psn" ? (
                  <FaPlaystation className="platform-icon" />
                ) : (
                  <FaXbox className="platform-icon" />
                )}
                </div>
                <div className="legendInfo">
              <p className="stat-name">Last Used Legend:</p>
              <p className="stat-value">
                {stats.profileData.segments[1].metadata.name}
              </p>
              </div>
                {Object.entries(stats.profileData.segments[0].stats).map(
                  ([key, stat]) => {
                    i+=1
                    if(i<=4) return (
                      <div key={key} className="stat">
                        <p className="stat-name">{stat.displayName}:</p>
                        <p className="stat-value">{stat.displayValue}</p>
                      </div>
                    );
                    return <></>;
                  }
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default Profile;
