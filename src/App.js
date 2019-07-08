//TODO: STEP 1 - Import the useState hook.
import React, {useState, useEffect} from "react";
import "./App.css";
import "./Animation.css"
import BottomRow from "./BottomRow";

function App() {
  const [homeScore, setHomeScore] = useState(32)
  const [awayScore, setAwayScore] = useState(32)
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const homeTeam = "Colts"
  const awayTeam = "Patriots"
  const homeTouchdown = () => setHomeScore(homeScore + 7);
  const homeFieldgoal = () => setHomeScore(homeScore + 3);
  const awayTouchdown = () => setAwayScore(awayScore + 7);
  const awayFieldgoal = () => setAwayScore(awayScore + 3);


  useEffect(() => {
    const timeout = setTimeout(() => {
      const date = new Date()
      setTime(date.toLocaleTimeString());
    }, 1000);
    return () => {
      clearTimeout(timeout);
    }
  }, [time]);

  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name pulse">{ homeTeam }</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{ homeScore }</div>
          </div>
          <div className="timer">{time}</div>
          <div className="away">
            <h2 className="away__name pulse">{ awayTeam }</h2>
            <div className="away__score">{ awayScore }</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick = {homeTouchdown} className=" home_color homeButtons__touchdown">Home Touchdown</button>
          <button onClick = {homeFieldgoal} className=" home_color homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick = {awayTouchdown} className=" away_color awayButtons__touchdown">Away Touchdown</button>
          <button onClick = {awayFieldgoal}  className=" away_color awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
