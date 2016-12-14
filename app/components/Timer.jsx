var React = require('react');
var Clock = require('Clock');
var Buttons = require('Buttons');

var Timer = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      status: 'stopped'
    }
  },
  componentWillMount: function () {
    clearInterval(this.timer);
    this.timer = undefined;
  },
  componentDidUpdate: function (prevProps, prevState) {
    if (this.state.status !== prevState.status) {
      switch (this.state.status) {
        case 'started':
          this.setTimer();
          break;
        case 'stopped':
          this.setState({count: 0});
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },
  setTimer: function () {
    this.timer = setInterval( () => {
      let newCount = this.state.count + 1;
      this.setState({
        count: newCount
      })
    }, 1000)
  },
  handleStatusChange: function (newStatus) {
    this.setState({
      status: newStatus
    })
  },
  render: function () {
    let { count, status } = this.state;
    return (
      <div>
        <h1 className="page-title">Timer App</h1>
        <Clock totalSeconds={count}/>
        <Buttons countdownStatus={status} onStatusChange={this.handleStatusChange}/>
      </div>
    )
  }
});

module.exports = Timer;