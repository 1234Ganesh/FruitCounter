// Write your code here
// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangos: 0, banans: 0}
  mangoEat = () => {
    this.setState(prevState => ({mangos: prevState.mangos + 1}))
  }
  bananaEat = () => {
    this.setState(prevState => ({banans: prevState.banans + 1}))
  }

  render() {
    const {mangos, banans} = this.state
    return (
      <div className="container">
        <div className="fruit-container">
          <h1 className="heading">
            Bob ate <span className="counter">{mangos}</span> mangoes{' '}
            <span className="counter">{banans}</span> bananas
          </h1>
          <div className="img-container">
            <div className="img1-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="should be mango"
                className="img1"
              />
              <button className="btn" onClick={this.mangoEat}>
                Eat Mango
              </button>
            </div>
            <div className="img1-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="should be banana"
                className="img1"
              />
              <button className="btn" onClick={this.bananaEat}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter

