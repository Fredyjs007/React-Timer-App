  var React = require('react');

  var TimerClock = React.createClass({
    getDefaultProps: function () {
      elapsedSeconds : 0
    },
    propTypes : {
      elapsedSeconds: React.PropTypes.number
    },
    formatTime: function (elapsedSeconds) {
      var eSeconds = elapsedSeconds % 60;
      var eMinutes = Math.floor(elapsedSeconds / 60);

      if (eSeconds < 10) {
        eSeconds = '0' + eSeconds;
      }

      if (eMinutes < 10) {
        eMinutes = '0' + eMinutes;
      }

      return eMinutes + ':' + eSeconds;
    },
    render: function () {
      var {elapsedSeconds} = this.props;
      return (
        <div className="timer-clock">
          <span className="timer-text">
            {this.formatTime(elapsedSeconds)}
          </span>
        </div>
      );
    }
  });





  module.exports = TimerClock;
