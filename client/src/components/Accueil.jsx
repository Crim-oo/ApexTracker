import React, { useState} from 'react'
import {useNavigate } from 'react-router-dom'

export default function Accueil() {
  const navigate = useNavigate();
  const [platform, setPlatform] = useState("psn");
  const [gamertag, setGamertag] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    navigate(`/profile/${platform}/${gamertag}`);
  }

  const onChangePlatform = (e) => {
    setPlatform(e.target.value);
  }

  const onChangeGamertag = (e) => {
    setGamertag(e.target.value);
  }

  return (
       <>
       <div className="container">
    <section className="search">
    <h1>Check Detailed Player Stats</h1>
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="platform">Platform</label>
        <select name="platform" id="platform" onChange={onChangePlatform}>
          <option value="psn">Playstation</option>
          <option value="xbl">Xbox</option>
          <option value="Origin">Origin</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="gamertag">Gamertag</label>
        <input
          type="text"
          name="text"
          id="gamertag"
          placeholder="Origin ID, Xbox Live gamertag, PSN ID, etc"
          onChange={onChangeGamertag}
          required
        />
      </div>
      <div className="form-group">
        <input type="submit" value="Submit" className="btn" />
      </div>
    </form>
  </section>
  </div>
       </>
    )
}
