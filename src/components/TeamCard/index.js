// Write your code here
import {Component} from 'react'

import {Link} from 'react-router-dom'
import './index.css'

class TeamCard extends Component {
  render() {
    const {Teams} = this.props
    const {id, name, teamImageUrl} = Teams

    return (
      <li className="teamdata-container">
        <Link to={`/team-matches/${id}`} className="links">
          <div className="team-card-container">
            <img src={teamImageUrl} alt={name} className="team-logo" />

            <p className="teamcardname">{name}</p>
          </div>
        </Link>
      </li>
    )
  }
}

export default TeamCard
