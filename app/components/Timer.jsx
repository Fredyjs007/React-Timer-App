  var React = require('react');
  var TimerClock = require('TimerClock');
  var TimerForm = require('TimerForm');
  var TimerControls = require('TimerControls');

  var Timer = React.createClass({
    getInitialState: function () {
      return {
        timerCount: 0,
        timerStatus: 'stopped'
      };
    },
    componentDidUpdate: function (prevProps, prevState) {
      if (this.state.timerStatus !== prevState.timerStatus) {
        switch (this.state.timerStatus) {
          case 'started':
            this.startClock();
            break;
          case 'stopped':
            this.setState({timerCount: 0});
            break;
        }
      }
    },
    componentWillUnmount: function () {
      console.log('component did unmount');
      clearInterval(this.clock);
      this.clock = undefined;
    },
    startClock: function () {
      this.clock = setInterval(() => {
        var timerCount = this.state.count +1;
        this.setState({
          count: newCount >= 0 ? newCount : 0
        });

        if (newCount === 0) {
          this.setState({timerStatus: 'stopped'});
        }
      }, 1000);
    },
    handleCounter: function (eSeconds) {
      this.setState({
        count: eSeconds,
        timerStatus: 'started'
      });
    },
    handleStatusCounter: function (newStatus) {
      this.setState({timerStatus: newStatus});
    },
    render: function () {
      var {count, timerStatus} = this.state;
      var renderTimerContolArea = () => {
        if (timerStatus !== 'stopped') {
          return <timerControls timerStatus={timerStatus} onControlChange={this.handleStatusCounter}/>;
        } else {
          return /////
        }
      };
      return (
        <div className="timer">
          <h1 className="timer-title">
            Timer
          </h1>
        </div>
      );
    }
  });


  module.exports = Timer;
