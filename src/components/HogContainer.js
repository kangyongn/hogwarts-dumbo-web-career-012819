import React from 'react'
import HogCard from './HogCard'

class HogContainer extends React.Component {

  generateHogCard = () => {
    return this.props.allHogs.map(hog => <HogCard hog={hog} />)
  }

  render() {
    return (
      <div className="ui grid container">
        {this.generateHogCard()}
      </div>
    )
  }
}

export default HogContainer
