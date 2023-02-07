// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    timeElapsedInSeconds: 0,
    isTimerRunning: false,
  }

  timeInMinutesAndSeconds = () => {
    const {timeElapsedInSeconds} = this.state
    const minutes = Math.floor(timeElapsedInSeconds / 60)
    const seconds = Math.floor(timeElapsedInSeconds % 60)

    const minutesInString = minutes > 9 ? minutes : `0${minutes}`
    const secondsInString = seconds > 9 ? seconds : `0${seconds}`

    return `${minutesInString}:${secondsInString}`
  }

  onClickStartTimer = () => {
    this.setTimeInterval = setInterval(() => {
      this.setState(prevState => ({
        timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
      }))
    }, 1000)
    this.setState({isTimerRunning: true})
  }

  onClickStopTimer = () => {
    clearInterval(this.setTimeInterval)
    this.setState({isTimerRunning: false})
  }

  onClickResetTimer = () => {
    clearInterval(this.setTimeInterval)
    this.setState({isTimerRunning: false, timeElapsedInSeconds: 0})
  }

  render() {
    const {isTimerRunning} = this.state
    return (
      <div className="app-container">
        <div className="stopwatch-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="timer-container">
            <div className="timer-heading-container">
              <img
                className="timer-img"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p className="timer-heading">Timer</p>
            </div>
            <h1 className="stopwatch-timer">
              {this.timeInMinutesAndSeconds()}
            </h1>
            <div className="button-container">
              <button
                type="button"
                className="button start-button"
                onClick={this.onClickStartTimer}
                disabled={isTimerRunning}
              >
                Start
              </button>
              <button
                type="button"
                className="button stop-button"
                onClick={this.onClickStopTimer}
              >
                Stop
              </button>
              <button
                type="button"
                className="button reset-button"
                onClick={this.onClickResetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
