import React from 'react'

class HogCard extends React.Component {

  state = {
    clicked: false,
    hide: false
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    }, () => console.log(this.state))
  }

  handleHide = () => {
    this.setState({
      hide: !this.state.hide
    }, () => console.log(this.state))
  }

  hogImg = () => {
    let imgName = this.props.hog.name.toLowerCase().split(' ').join('_')
    return require(`../hog-imgs/${imgName}.jpg`)
  }

  showDetail = (weight, medal) => {
    if(this.state.clicked === true) {
      return (
        <div>
          <div className="meta">
            <span>{this.props.hog.specialty}</span>
          </div>
          <div className="description">
            {this.props.hog[weight]}
          </div>
          <div className="extra content">
            <i className="star icon"></i>
            {this.props.hog[medal]}
          </div>
        </div>
      )
    }
  }

  style = () => {
    return (this.state.hide ? {display:"none"} : {display:"block"})
  }
  render() {
    const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
    const medal = 'highest medal achieved'
    return (
      <div className="ui card eight wide column" style={this.style()}>
        <div className="image">
          <img onClick={() => this.handleClick()} src={this.hogImg()} />
        </div>
        <div className="content">
          <a className="header">{this.props.hog.name}</a>
        </div>
        <button onClick={() => this.handleHide()}>Hide</button>
        {this.showDetail(weight, medal)}
      </div>

    )
  }
}

export default HogCard

// <div className="meta">
//   <span>{props.hog.specialty}</span>
// </div>
// <div className="description">
//   {props.hog[weight]}
// </div>
// </div>
// <div className="extra content">
//   <i className="star icon"></i>
//   {props.hog[medal]}
// </div>
// </div>
