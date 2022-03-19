// Write your code here
import './index.css'

const MatchCard = props => {
  const {recentMatches} = props
  const {
    result,

    competingTeam,
    competingTeamLogo,

    matchStatus,
  } = recentMatches
  // eslint-disable-next-line no-unused-vars
  const Won = 'Won'
  const winned = matchStatus === 'Won' ? 'win' : 'loss'
  console.log(matchStatus === 'Won')
  return (
    <li className="eachmatch-container">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="comp-team-logo"
      />
      <p className="compteam">{competingTeam}</p>
      <p className="matchresult">{result}</p>
      <p className={`matchstatus ${winned}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
