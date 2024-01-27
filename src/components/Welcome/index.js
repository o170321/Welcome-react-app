// Write your code here

import React, {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: true}

  clicked = () => {
    // Use this.setState to update the state
    this.setState(prevState => ({
      isSubscribed: !prevState.isSubscribed,
    }))
  }

  render() {
    const {isSubscribed} = this.state

    return (
      <div className="bg">
        <h1 className="heading-color">Welcome</h1>
        <h2 className="heading-2">Thank you! Happy Learning</h2>
        <button className="butt" onClick={this.clicked}>
          {isSubscribed ? 'Subscribe' : 'subscribed'}
        </button>
      </div>
    )
  }
}

export default Welcome
