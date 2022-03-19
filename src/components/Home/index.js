// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class Home extends Component {
  state = {TeamData: [], isLoading: true}

  componentDidMount() {
    this.getteamsdata()
  }

  getteamsdata = async () => {
    const response = await fetch(`https://apis.ccbp.in/ipl`)

    const data = await response.json()
    const updateddata = data.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({TeamData: updateddata, isLoading: false})
  }

  render() {
    const {TeamData, isLoading} = this.state

    return (
      <div className="home-bg-container">
        <div className="home-logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo-img"
          />
          <h1 className="iplhead">IPL Dashboard </h1>
        </div>
        <ul className="teamcard-container">
          {isLoading ? (
            <div testid="loader">
              <Loader type="TailSpin" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            TeamData.map(eachItem => (
              <TeamCard Teams={eachItem} key={eachItem.id} />
            ))
          )}
        </ul>
      </div>
    )
  }
}
export default Home
