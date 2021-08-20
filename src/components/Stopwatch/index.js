import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {
    isTimerRunning: false,
    timeElapsedInSeconds: 0,
  }

  componentWillUnmount() {
    clearInterval(this.timerInterval)
  }

  onClickReset = () => {
    this.setState({
      timeElapsedInSeconds: 0,
    })
    clearInterval(this.timerInterval)
  }

  onClickStop = () => {
    clearInterval(this.timerInterval)
  }

  onClickStart = () => {
    this.timerInterval = setInterval(this.updateTimer, 1000)
  }

  updateTimer = () => {
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }))
  }

  renderTimeInSeconds = () => {
    const {timeElapsedInSeconds} = this.state
    const seconds = Math.floor(timeElapsedInSeconds % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderTimeInMinutes = () => {
    const {timeElapsedInSeconds} = this.state
    const minutes = Math.floor(timeElapsedInSeconds / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const time = `${this.renderTimeInMinutes()}:${this.renderTimeInSeconds()}`

    return (
      <div className="app_container">
        <div className="stopwatch_container">
          <h1 className="heading">Stopwatch</h1>
          <div className="timer_card">
            <div className="timer_heading">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="timer"
                className="img"
              />
              <p className="timer">Timer</p>
            </div>
            <h1 className="timer" testid="timer">
              {time}
            </h1>
            <div className="btn_container">
              <button
                type="button"
                className="start_btn"
                onClick={this.onClickStart}
              >
                Start
              </button>
              <button
                type="button"
                className="stop_btn"
                onClick={this.onClickStop}
              >
                Stop
              </button>
              <button
                type="button"
                className="reset_btn"
                onClick={this.onClickReset}
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
