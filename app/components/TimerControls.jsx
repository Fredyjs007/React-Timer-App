  var React = require('react');

  var timerControls = React.createClass({
    propTypes: {
      timerStatus: React.PropTypes.string.isRequired,
      onControlChange: React.PropTypes.func.isRequired
  },
  onControlChange: function (newStatus) {
    return () => {
      this.props.onControlChange(newStatus);
    }
  },
  render: function () {
    var {timerStatus} = this.props;
    var renderControlButtons = () => {
      if (timerStatus === 'started') {
        return <button className="button secondary" onClick={this.timerStatus('stopped')}>Stop</button>
      } else if (timerStatus === 'stopped') {
        return <button className="button primary" onClick={this.timerStatus('started')}>Start</button>
      }
    };
    return (
      <div className="timer-controls">
        {renderControlButtons()}
      <button className="button alert hollow" onClick={this.timerStatus('started || stopped')}>Clear</button>
      </div>
    )
  },
});


   module.exports = TimerControls;
