'use strict';

var _index = require('/Users/grosales/dev/nl-fluid/node_modules/redbox-react/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('/Users/grosales/dev/nl-fluid/node_modules/react-transform-catch-errors/lib/index.js');

var _index4 = _interopRequireDefault(_index3);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index5 = require('/Users/grosales/dev/nl-fluid/node_modules/react-transform-hmr/lib/index.js');

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Component2 = require('./Component');

var _Component3 = _interopRequireDefault(_Component2);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _reactCssTransitionReplace = require('react-css-transition-replace');

var _reactCssTransitionReplace2 = _interopRequireDefault(_reactCssTransitionReplace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  DateTimePicker: {
    displayName: 'DateTimePicker'
  },
  DatePicker: {
    displayName: 'DatePicker'
  },
  DateEditor: {
    displayName: 'DateEditor'
  },
  TimePicker: {
    displayName: 'TimePicker'
  },
  HourEditor: {
    displayName: 'HourEditor'
  },
  MinuteEditor: {
    displayName: 'MinuteEditor'
  }
};

var _UsersGrosalesDevNlFluidNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/grosales/dev/nl-fluid/src/components/DateTimePicker.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersGrosalesDevNlFluidNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/grosales/dev/nl-fluid/src/components/DateTimePicker.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersGrosalesDevNlFluidNode_modulesReactTransformHmrLibIndexJs2(_UsersGrosalesDevNlFluidNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var DateTimePicker = _wrapComponent('DateTimePicker')(function (_Component) {
  _inherits(DateTimePicker, _Component);

  _createClass(DateTimePicker, null, [{
    key: 'propTypes',
    get: function get() {
      return {
        date: _react3.default.PropTypes.object,
        onSelect: _react3.default.PropTypes.func,
        datePicker: _react3.default.PropTypes.bool,
        timePicker: _react3.default.PropTypes.bool
      };
    }
  }, {
    key: 'defaultProps',
    get: function get() {
      return {
        date: (0, _moment2.default)(),
        datePicker: true,
        timePicker: true
      };
    }
  }]);

  function DateTimePicker(props) {
    _classCallCheck(this, DateTimePicker);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DateTimePicker).call(this, props, 'dateTimePicker'));

    _this.state = {
      active: false,
      date: props.date,
      datePicker: props.datePicker,
      timePicker: props.timePicker
    };

    // Methods
    _this.onToggle = _this.onToggle.bind(_this);
    _this.onSelect = _this.onSelect.bind(_this);
    _this.getPicker = _this.getPicker.bind(_this);
    _this.getEditor = _this.getEditor.bind(_this);
    _this.getStyles = _this.getStyles.bind(_this);
    return _this;
  }

  _createClass(DateTimePicker, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      this.setState({
        date: props.date,
        datePicker: props.datePicker,
        timePicker: props.timePicker
      });
    }
  }, {
    key: 'onToggle',
    value: function onToggle(type) {
      if (type === this.state.active) {
        type = false;
      }

      this.setState({
        active: type
      });
    }
  }, {
    key: 'onSelect',
    value: function onSelect(value, type) {
      var date = this.state.date || (0, _moment2.default)();
      var activeState = type || this.state.active;

      switch (activeState) {
        case 'month':
          var valMonth = value.month();
          var valYear = value.year();

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

          if (this.state.date.format('a') === 'pm') {
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
          var hours = parseInt(date.format('H'));
          activeState = false;

          if (value === 'pm') {
            hours -= 12;
          } else {
            hours += 12;
          }

          date.hour(hours);
          break;
      }

      // Send value to select listener
      if (this.props.onSelect) {
        this.props.onSelect(date);
      }

      // Set state
      var stateObj = {};

      if (date !== this.state.date) {
        stateObj.date = date;
      }

      if (!activeState) {
        stateObj.active = activeState;
      }

      this.setState(stateObj);
    }
  }, {
    key: 'addStyles',
    value: function addStyles() {
      var cls = [];

      if (!this.state.datePicker) {
        cls.push('dateTimePicker-noDatePicker');
      }

      return cls;
    }
  }, {
    key: 'getPicker',
    value: function getPicker() {
      var pickers = [];

      if (this.state.datePicker) {
        pickers.push(_react3.default.createElement(DatePicker, { key: 'datePicker', date: this.state.date, active: this.state.active,
          onToggle: this.onToggle }));
      }

      if (this.state.timePicker) {
        pickers.push(_react3.default.createElement(TimePicker, { key: 'timePicker', date: this.state.date, active: this.state.active,
          onToggle: this.onToggle, onSelect: this.onSelect }));
      }

      return pickers;
    }
  }, {
    key: 'getEditor',
    value: function getEditor() {
      var activeState = this.state.active;

      if (activeState === 'date') {
        return _react3.default.createElement(DateEditor, {
          key: 'dateEditor',
          date: this.state.date,
          onSelect: this.onSelect });
      } else if (activeState === 'hour') {
        return _react3.default.createElement(HourEditor, {
          key: 'hourEditor',
          date: this.state.date,
          hours: this.state.hours,
          onSelect: this.onSelect });
      } else if (activeState === 'minute') {
        return _react3.default.createElement(MinuteEditor, {
          key: 'minuteEditor',
          date: this.state.date,
          minutes: this.state.minutes,
          onSelect: this.onSelect });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        'div',
        { className: this.getStyles() },
        _react3.default.createElement(
          'div',
          { className: 'dateTimePicker_container' },
          this.getPicker()
        ),
        _react3.default.createElement(
          _reactCssTransitionReplace2.default,
          { transitionName: 'datePicker_animation',
            transitionEnterTimeout: 300,
            transitionLeaveTimeout: 300 },
          this.getEditor()
        )
      );
    }
  }]);

  return DateTimePicker;
}(_Component3.default));

exports.default = DateTimePicker;

var DatePicker = _wrapComponent('DatePicker')(function (_React$Component) {
  _inherits(DatePicker, _React$Component);

  _createClass(DatePicker, null, [{
    key: 'propTypes',
    get: function get() {
      return {
        date: _react3.default.PropTypes.object,
        onToggle: _react3.default.PropTypes.func
      };
    }
  }, {
    key: 'defaultProps',
    get: function get() {
      return {
        date: (0, _moment2.default)()
      };
    }
  }]);

  function DatePicker(props) {
    _classCallCheck(this, DatePicker);

    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(DatePicker).call(this, props));

    _this2.state = {
      active: false,
      date: props.date
    };

    // Methods
    _this2.dateCls = _this2.dateCls.bind(_this2);
    return _this2;
  }

  _createClass(DatePicker, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      this.setState({
        active: props.active,
        date: props.date
      });
    }
  }, {
    key: 'dateCls',
    value: function dateCls() {
      var cls = ['datePicker_label'];

      if (this.state.active === 'date') {
        cls.push('dateTimePicker-active');
      }

      return cls.join(' ');
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var date = this.state.date || (0, _moment2.default)();

      return _react3.default.createElement(
        'div',
        { className: 'datePicker' },
        _react3.default.createElement(
          'div',
          { className: this.dateCls(), onClick: function onClick() {
              _this3.props.onToggle('date');
            } },
          date.format('ddd, MMM D')
        )
      );
    }
  }]);

  return DatePicker;
}(_react3.default.Component));

var DateEditor = _wrapComponent('DateEditor')(function (_React$Component2) {
  _inherits(DateEditor, _React$Component2);

  _createClass(DateEditor, null, [{
    key: 'propTypes',
    get: function get() {
      return {
        date: _react3.default.PropTypes.object,
        onSelect: _react3.default.PropTypes.func
      };
    }
  }, {
    key: 'defaultProps',
    get: function get() {
      return {
        date: (0, _moment2.default)()
      };
    }
  }]);

  function DateEditor(props) {
    _classCallCheck(this, DateEditor);

    var _this4 = _possibleConstructorReturn(this, Object.getPrototypeOf(DateEditor).call(this, props));

    _this4.state = {
      date: props.date
    };

    // Methods
    _this4._prevMonth = _this4._prevMonth.bind(_this4);
    _this4._nextMonth = _this4._nextMonth.bind(_this4);
    return _this4;
  }

  _createClass(DateEditor, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      this.setState({
        date: props.date
      });
    }
  }, {
    key: 'getDays',
    value: function getDays(displayDate) {
      var _this5 = this;

      var calMonth = (0, _moment2.default)(displayDate);
      calMonth.date(1);

      var calDays = calMonth.daysInMonth();
      var calWeek = calMonth.day();

      var monthArr = [];
      var weekArr = [];
      var calDate = 0;
      var dayOfWeek = 0;

      var _loop = function _loop(g, l) {
        var dayVal = undefined;

        if (g < calWeek) {
          dayVal = '';
        } else if (g >= calDays + calWeek) {
          dayVal = '';
        } else {
          calDate++;
          dayVal = calDate;
        }

        // Set styles for day of the week
        var weekCls = ['datePicker_calendar_day'];

        if (dayOfWeek === 0 || dayOfWeek === 6) {
          weekCls.push('datePicker_calendar_day-weekend');
        }

        if (displayDate.date() === dayVal) {
          weekCls.push('dateTimePicker-active');
        }

        // Add day to week array
        var key = 'day-' + g;

        weekArr.push(_react3.default.createElement(
          'div',
          { key: key, className: weekCls.join(' '), onClick: function onClick() {
              _this5.props.onSelect(dayVal, 'day');
            } },
          dayVal
        ));

        if (dayOfWeek === 6) {
          // If end of the week, insert week into month array and reset
          monthArr.push(weekArr);
          weekArr = [];
          dayOfWeek = 0;
        } else {
          // Increment day
          dayOfWeek++;
        }
      };

      for (var g = 0, l = 35; g < l; g++) {
        _loop(g, l);
      }

      return _react3.default.createElement(
        'div',
        null,
        monthArr.map(function (week, i) {
          var key = 'week-' + i;

          return _react3.default.createElement(
            'div',
            { key: key, className: 'datePicker_calendar_week' },
            week
          );
        })
      );
    }
  }, {
    key: '_prevMonth',
    value: function _prevMonth() {
      var newDate = (0, _moment2.default)(this.state.date);
      newDate.subtract(1, 'M');

      this.props.onSelect(newDate, 'month');
    }
  }, {
    key: '_nextMonth',
    value: function _nextMonth() {
      var newDate = (0, _moment2.default)(this.state.date);
      newDate.add(1, 'M');

      this.props.onSelect(newDate, 'month');
    }
  }, {
    key: 'render',
    value: function render() {
      var date = this.state.date || (0, _moment2.default)();

      return _react3.default.createElement(
        'div',
        { className: 'datePicker_calendar' },
        _react3.default.createElement(
          'div',
          { className: 'datePicker_calendar_hdr' },
          _react3.default.createElement(
            'div',
            { className: 'datePicker_calendar_hdr_prev', onClick: this._prevMonth },
            _react3.default.createElement(_Icon2.default, { name: 'angle-left' })
          ),
          _react3.default.createElement(
            'div',
            { className: 'datePicker_calendar_hdr_month' },
            _react3.default.createElement(
              'span',
              { className: 'datePicker_calendar_hdr_month_name' },
              date.format('MMMM')
            ),
            ' ',
            _react3.default.createElement(
              'span',
              { className: 'datePicker_calendar_hdr_month_year' },
              date.format('YYYY')
            )
          ),
          _react3.default.createElement(
            'div',
            { className: 'datePicker_calendar_hdr_next', onClick: this._nextMonth },
            _react3.default.createElement(_Icon2.default, { name: 'angle-right' })
          )
        ),
        _react3.default.createElement(
          'div',
          { className: 'datePicker_calendar_weekday' },
          _react3.default.createElement(
            'div',
            null,
            'Sun'
          ),
          _react3.default.createElement(
            'div',
            null,
            'Mon'
          ),
          _react3.default.createElement(
            'div',
            null,
            'Tue'
          ),
          _react3.default.createElement(
            'div',
            null,
            'Wed'
          ),
          _react3.default.createElement(
            'div',
            null,
            'Thu'
          ),
          _react3.default.createElement(
            'div',
            null,
            'Fri'
          ),
          _react3.default.createElement(
            'div',
            null,
            'Sat'
          )
        ),
        this.getDays(date)
      );
    }
  }]);

  return DateEditor;
}(_react3.default.Component));

var TimePicker = _wrapComponent('TimePicker')(function (_React$Component3) {
  _inherits(TimePicker, _React$Component3);

  _createClass(TimePicker, null, [{
    key: 'propTypes',
    get: function get() {
      return {
        date: _react3.default.PropTypes.object,
        onSelect: _react3.default.PropTypes.func,
        onToggle: _react3.default.PropTypes.func
      };
    }
  }, {
    key: 'defaultProps',
    get: function get() {
      return {
        date: (0, _moment2.default)()
      };
    }
  }]);

  function TimePicker(props) {
    _classCallCheck(this, TimePicker);

    var _this6 = _possibleConstructorReturn(this, Object.getPrototypeOf(TimePicker).call(this, props));

    _this6.state = {
      active: false,
      date: props.date
    };

    // Methods
    _this6.hoursCls = _this6.hoursCls.bind(_this6);
    _this6.minutesCls = _this6.minutesCls.bind(_this6);
    return _this6;
  }

  _createClass(TimePicker, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      this.setState({
        active: props.active,
        date: props.date
      });
    }
  }, {
    key: 'hoursCls',
    value: function hoursCls() {
      var cls = ['timePicker_label_time_hour'];

      if (this.state.active === 'hour') {
        cls.push('dateTimePicker-active');
      }

      return cls.join(' ');
    }
  }, {
    key: 'minutesCls',
    value: function minutesCls() {
      var cls = ['timePicker_label_time_minute'];

      if (this.state.active === 'minute') {
        cls.push('dateTimePicker-active');
      }

      return cls.join(' ');
    }
  }, {
    key: 'render',
    value: function render() {
      var _this7 = this;

      var date = this.state.date || (0, _moment2.default)();

      return _react3.default.createElement(
        'div',
        { className: 'timePicker' },
        _react3.default.createElement(
          'div',
          { className: 'timePicker_label' },
          _react3.default.createElement(
            'div',
            { className: 'timePicker_label_time' },
            _react3.default.createElement(
              'div',
              { className: this.hoursCls(), onClick: function onClick() {
                  _this7.props.onToggle('hour');
                } },
              date.format('h')
            ),
            _react3.default.createElement(
              'div',
              { className: 'timePicker_label_time_separator' },
              ':'
            ),
            _react3.default.createElement(
              'div',
              { className: this.minutesCls(), onClick: function onClick() {
                  _this7.props.onToggle('minute');
                } },
              date.format('mm')
            )
          ),
          _react3.default.createElement(
            'div',
            { className: 'timePicker_label_period',
              onClick: function onClick() {
                _this7.props.onSelect(date.format('a'), 'period');
              } },
            date.format('a')
          )
        )
      );
    }
  }]);

  return TimePicker;
}(_react3.default.Component));

var HourEditor = _wrapComponent('HourEditor')(function (_React$Component4) {
  _inherits(HourEditor, _React$Component4);

  _createClass(HourEditor, null, [{
    key: 'propTypes',
    get: function get() {
      return {
        date: _react3.default.PropTypes.object,
        hours: _react3.default.PropTypes.array,
        onSelect: _react3.default.PropTypes.func
      };
    }
  }, {
    key: 'defaultProps',
    get: function get() {
      return {
        date: (0, _moment2.default)(),
        hours: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
      };
    }
  }]);

  function HourEditor(props) {
    _classCallCheck(this, HourEditor);

    var _this8 = _possibleConstructorReturn(this, Object.getPrototypeOf(HourEditor).call(this, props));

    _this8.state = props;
    return _this8;
  }

  _createClass(HourEditor, [{
    key: 'activeCls',
    value: function activeCls(value) {
      var cls = ['timePicker_editor_item'];
      var date = this.state.date;
      var dateVal = parseInt(date.format('H'));

      if (date.format('a') === 'pm') {
        value += 12;
      }

      if (dateVal === value) {
        cls.push('dateTimePicker-active');
      }

      return cls.join(' ');
    }
  }, {
    key: 'render',
    value: function render() {
      var _this9 = this;

      var hours = this.props.hours;

      return _react3.default.createElement(
        'div',
        { className: 'timePicker_editor' },
        _react3.default.createElement(
          'div',
          { className: 'timePicker_editor_label' },
          'hours'
        ),
        hours.map(function (val) {
          var key = 'hours-' + val;
          return _react3.default.createElement(
            'div',
            { key: key, className: _this9.activeCls(val), onClick: function onClick() {
                _this9.props.onSelect(val);
              } },
            val
          );
        })
      );
    }
  }]);

  return HourEditor;
}(_react3.default.Component));

var MinuteEditor = _wrapComponent('MinuteEditor')(function (_React$Component5) {
  _inherits(MinuteEditor, _React$Component5);

  _createClass(MinuteEditor, null, [{
    key: 'propTypes',
    get: function get() {
      return {
        date: _react3.default.PropTypes.object,
        minutes: _react3.default.PropTypes.array,
        onSelect: _react3.default.PropTypes.func
      };
    }
  }, {
    key: 'defaultProps',
    get: function get() {
      return {
        date: (0, _moment2.default)(),
        minutes: ['00', '10', '20', '30', '40', '50']
      };
    }
  }]);

  function MinuteEditor(props) {
    _classCallCheck(this, MinuteEditor);

    // Methods

    var _this10 = _possibleConstructorReturn(this, Object.getPrototypeOf(MinuteEditor).call(this, props));

    _this10.activeCls = _this10.activeCls.bind(_this10);
    return _this10;
  }

  _createClass(MinuteEditor, [{
    key: 'activeCls',
    value: function activeCls(value) {
      var cls = ['timePicker_editor_item'];
      var dateVal = parseInt(this.props.date.format('m'));

      if (dateVal === value) {
        cls.push('dateTimePicker-active');
      }

      return cls.join(' ');
    }
  }, {
    key: 'render',
    value: function render() {
      var _this11 = this;

      var minutes = this.props.minutes;

      return _react3.default.createElement(
        'div',
        { className: 'timePicker_editor' },
        _react3.default.createElement(
          'div',
          { className: 'timePicker_editor_label' },
          'minutes'
        ),
        minutes.map(function (val) {
          var key = 'minutes-' + val;
          return _react3.default.createElement(
            'div',
            { key: key, className: _this11.activeCls(val), onClick: function onClick() {
                _this11.props.onSelect(val);
              } },
            val
          );
        })
      );
    }
  }]);

  return MinuteEditor;
}(_react3.default.Component));