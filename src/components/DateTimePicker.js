import React from 'react';
import Component from './Component';
import moment from 'moment';
import Icon from './Icon';
import ReactCSSTransitionReplace from 'react-css-transition-replace';

export default class DateTimePicker extends Component {
  static get propTypes() {
    return {
      date: React.PropTypes.object,
      onSelect: React.PropTypes.func,
      datePicker: React.PropTypes.bool,
      timePicker: React.PropTypes.bool
    }
  }

  static get defaultProps() {
    return {
      date: moment(),
      datePicker: true,
      timePicker: true
    };
  }

  constructor(props) {
    super(props, 'dateTimePicker');

    this.state = {
      active: false,
      date: props.date,
      datePicker: props.datePicker,
      timePicker: props.timePicker
    };

    // Methods
    this.onToggle = this.onToggle.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.getPicker = this.getPicker.bind(this);
    this.getEditor = this.getEditor.bind(this);
    this.getStyles = this.getStyles.bind(this);
  }

  componentWillReceiveProps(props) {
    this.setState({
      date: props.date,
      datePicker: props.datePicker,
      timePicker: props.timePicker
    });
  }

  onToggle(type) {
    if(type === this.state.active) {
      type = false;
    }

    this.setState({
      active: type
    });
  }

  onSelect(value, type) {
    let date = this.state.date || moment();
    let activeState = type || this.state.active;

    switch(activeState) {
      case 'month':
        let valMonth = value.month();
        let valYear = value.year();

        date.month(valMonth);
        date.year(valYear);
        break;
      case 'day':
        activeState = false;
        date.date(value);
        break;
      case 'hour':
        activeState = false;
        value = parseInt(value);

        if(this.state.date.format('a') === 'pm') {
          value += 12;
        }

        date.hour(value);
        break;
      case 'minute':
        activeState = false;
        value = parseInt(value);
        date.minute(value);
        break;
      case 'period':
        let hours = parseInt(date.format('H'));
        activeState = false;

        if(value === 'pm') {
          hours -= 12;
        } else {
          hours += 12;
        }

        date.hour(hours);
        break;
    }

    // Send value to select listener
    if(this.props.onSelect) {
      this.props.onSelect(date);
    }

    // Set state
    let stateObj = {};

    if(date !== this.state.date) {
      stateObj.date = date;
    }

    if(!activeState) {
      stateObj.active = activeState;
    }

    this.setState(stateObj);
  }

  addStyles() {
    let cls = [];

    if(!this.state.datePicker) {
      cls.push('dateTimePicker-noDatePicker');
    }

    return cls;
  }

  getPicker() {
    let pickers = [];

    if(this.state.datePicker) {
      pickers.push(<DatePicker key="datePicker" date={this.state.date} active={this.state.active}
        onToggle={this.onToggle}/>);
    }

    if(this.state.timePicker) {
      pickers.push(<TimePicker key="timePicker" date={this.state.date} active={this.state.active}
        onToggle={this.onToggle} onSelect={this.onSelect}/>);
    }

    return pickers;
  }

  getEditor() {
    let activeState = this.state.active;

    if(activeState === 'date') {
      return (
        <DateEditor
          key="dateEditor"
          date={this.state.date}
          onSelect={this.onSelect}/>
      );
    }
    else if(activeState === 'hour') {
      return (
        <HourEditor
          key="hourEditor"
          date={this.state.date}
          hours={this.state.hours}
          onSelect={this.onSelect}/>
      );
    }
    else if(activeState === 'minute') {
      return (
        <MinuteEditor
          key="minuteEditor"
          date={this.state.date}
          minutes={this.state.minutes}
          onSelect={this.onSelect}/>
      );
    }
  }

  render() {
    return (
      <div className={this.getStyles()}>
        <div className='dateTimePicker_container'>
          {this.getPicker()}
        </div>
        <ReactCSSTransitionReplace transitionName="datePicker_animation"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}>
          {this.getEditor()}
        </ReactCSSTransitionReplace>
      </div>
    );
  }
}

class DatePicker extends React.Component {
  static get propTypes() {
    return {
      date: React.PropTypes.object,
      onToggle: React.PropTypes.func
    }
  }

  static get defaultProps() {
    return {
      date: moment()
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      active: false,
      date: props.date
    };

    // Methods
    this.dateCls = this.dateCls.bind(this);
  }

  componentWillReceiveProps(props) {
    this.setState({
      active: props.active,
      date: props.date
    });
  }

  dateCls() {
    let cls = ['datePicker_label'];

    if(this.state.active === 'date') {
      cls.push('dateTimePicker-active');
    }

    return cls.join(' ')
  }

  render() {
    let date = this.state.date || moment();

    return (
      <div className="datePicker">
        <div className={this.dateCls()} onClick={() => {this.props.onToggle('date')}}>
          {date.format('ddd, MMM D')}
        </div>
      </div>
    );
  }
}

class DateEditor extends React.Component {
  static get propTypes() {
    return {
      date: React.PropTypes.object,
      onSelect: React.PropTypes.func
    }
  }

  static get defaultProps() {
    return {
      date: moment()
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      date: props.date
    };

    // Methods
    this._prevMonth = this._prevMonth.bind(this);
    this._nextMonth = this._nextMonth.bind(this);
  }

  componentWillReceiveProps(props) {
    this.setState({
      date: props.date
    });
  }

  getDays(displayDate) {
    let calMonth = moment(displayDate);
    calMonth.date(1);

    let calDays = calMonth.daysInMonth();
    let calWeek = calMonth.day();

    let monthArr = [];
    let weekArr = [];
    let calDate = 0;
    let dayOfWeek = 0;

    for(let g = 0, l = 35; g < l; g++) {
      let dayVal;

      if(g < calWeek) {
        dayVal = '';
      }
      else if(g >= (calDays + calWeek)) {
        dayVal = '';
      } else {
        calDate++;
        dayVal = calDate;
      }

      // Set styles for day of the week
      let weekCls = ['datePicker_calendar_day'];

      if(dayOfWeek === 0 || dayOfWeek === 6) {
        weekCls.push('datePicker_calendar_day-weekend');
      }

      if(displayDate.date() === dayVal) {
        weekCls.push('dateTimePicker-active');
      }

      // Add day to week array
      let key = 'day-' + g;

      weekArr.push(
        <div key={key} className={weekCls.join(' ')} onClick={() => { this.props.onSelect(dayVal, 'day') }}>
          {dayVal}
        </div>
      );

      if(dayOfWeek === 6) {
        // If end of the week, insert week into month array and reset
        monthArr.push(weekArr);
        weekArr = [];
        dayOfWeek = 0;
      } else {
        // Increment day
        dayOfWeek++;
      }
    }

    return (
      <div>
        {monthArr.map((week, i) => {
          let key = 'week-' + i;

          return (
            <div key={key} className="datePicker_calendar_week">{week}</div>
          );
        })}
      </div>
    );
  }

  _prevMonth() {
    let newDate = moment(this.state.date);
    newDate.subtract(1, 'M');

    this.props.onSelect(newDate, 'month');
  }

  _nextMonth() {
    let newDate = moment(this.state.date);
    newDate.add(1, 'M');

    this.props.onSelect(newDate, 'month');
  }

  render() {
    let date = this.state.date || moment();

    return (
      <div className="datePicker_calendar">
        <div className="datePicker_calendar_hdr">
          <div className="datePicker_calendar_hdr_prev" onClick={this._prevMonth}>
            <Icon name="angle-left"/>
          </div>
          <div className="datePicker_calendar_hdr_month">
            <span className="datePicker_calendar_hdr_month_name">{date.format('MMMM')}</span>
            &nbsp;
            <span className="datePicker_calendar_hdr_month_year">{date.format('YYYY')}</span>
          </div>
          <div className="datePicker_calendar_hdr_next" onClick={this._nextMonth}>
            <Icon name="angle-right"/>
          </div>
        </div>
        <div className="datePicker_calendar_weekday">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>
        {this.getDays(date)}
      </div>
    );
  }
}

class TimePicker extends React.Component {
  static get propTypes() {
    return {
      date: React.PropTypes.object,
      onSelect: React.PropTypes.func,
      onToggle: React.PropTypes.func
    }
  }

  static get defaultProps() {
    return {
      date: moment()
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      active: false,
      date: props.date
    };

    // Methods
    this.hoursCls = this.hoursCls.bind(this);
    this.minutesCls = this.minutesCls.bind(this);
  }

  componentWillReceiveProps(props) {
    this.setState({
      active: props.active,
      date: props.date
    });
  }

  hoursCls() {
    let cls = ['timePicker_label_time_hour'];

    if(this.state.active === 'hour') {
      cls.push('dateTimePicker-active');
    }

    return cls.join(' ')
  }

  minutesCls() {
    let cls = ['timePicker_label_time_minute'];

    if(this.state.active === 'minute') {
      cls.push('dateTimePicker-active');
    }

    return cls.join(' ')
  }

  render() {
    let date = this.state.date || moment();

    return (
      <div className="timePicker">
        <div className="timePicker_label">
          <div className="timePicker_label_time">
            <div className={this.hoursCls()} onClick={() => {this.props.onToggle('hour')}}>
              {date.format('h')}
            </div>
            <div className="timePicker_label_time_separator">:</div>
            <div className={this.minutesCls()} onClick={() => {this.props.onToggle('minute')}}>
              {date.format('mm')}
            </div>
          </div>
          <div className="timePicker_label_period"
            onClick={() => { this.props.onSelect(date.format('a'), 'period') }}>
            {date.format('a')}
          </div>
        </div>
      </div>
    );
  }
}

class HourEditor extends React.Component {
  static get propTypes() {
    return {
      date: React.PropTypes.object,
      hours: React.PropTypes.array,
      onSelect: React.PropTypes.func
    }
  }

  static get defaultProps() {
    return {
      date: moment(),
      hours: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
    };
  }

  constructor(props) {
    super(props);
    this.state = props;
  }

  activeCls(value) {
    let cls = ['timePicker_editor_item'];
    let date = this.state.date;
    let dateVal = parseInt(date.format('H'));

    if(date.format('a') === 'pm') {
      value += 12;
    }

    if(dateVal === value) {
      cls.push('dateTimePicker-active');
    }

    return cls.join(' ')
  }

  render() {
    let hours = this.props.hours;

    return (
      <div className="timePicker_editor">
        <div className="timePicker_editor_label">hours</div>
        {hours.map(val => {
          let key = 'hours-' + val;
          return <div key={key} className={this.activeCls(val)} onClick={() => { this.props.onSelect(val) }}>{val}</div>
        })}
      </div>
    );
  }
}

class MinuteEditor extends React.Component {
  static get propTypes() {
    return {
      date: React.PropTypes.object,
      minutes: React.PropTypes.array,
      onSelect: React.PropTypes.func
    }
  }

  static get defaultProps() {
    return {
      date: moment(),
      minutes: ['00', '10', '20', '30', '40', '50']
    };
  }

  constructor(props) {
    super(props);

    // Methods
    this.activeCls = this.activeCls.bind(this);
  }

  activeCls(value) {
    let cls = ['timePicker_editor_item'];
    let dateVal = parseInt(this.props.date.format('m'));

    if(dateVal === value) {
      cls.push('dateTimePicker-active');
    }

    return cls.join(' ')
  }

  render() {
    let minutes = this.props.minutes;

    return (
      <div className="timePicker_editor">
        <div className="timePicker_editor_label">minutes</div>
        {minutes.map(val => {
          let key = 'minutes-' + val;
          return <div key={key} className={this.activeCls(val)} onClick={() => { this.props.onSelect(val) }}>{val}</div>
        })}
      </div>
    );
  }
}
