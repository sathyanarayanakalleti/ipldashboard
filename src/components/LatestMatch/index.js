// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    id,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    matchStatus,
  } = latestMatchDetails
  console.log({id})
  console.log({matchStatus})
  return (
    <div className="latest-match-container">
      <div className="comp-team-container">
        <p className="competingteam">{competingTeam}</p>
        <p className="date">{date}</p>
        <p className="venue">{venue}</p>
        <p className="result">{result}</p>
      </div>
      <div className="comp-team-logo-container">
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="cteamlogo"
        />
      </div>
      <div className="comp-team-container2">
        <p className="firstinnings1">First Innings</p>
        <p className="firstinnings">{firstInnings}</p>
        <p className="secondinnings2">Second Innings</p>
        <p className="secondinnings">{secondInnings}</p>
        <p className="manofmatch1">Man Of The Match</p>
        <p className="manofmatch">{manOfTheMatch}</p>
        <p className="umpire1">Umpires</p>
        <p className="umpire">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
