import React from 'react';
import _ from 'lodash';
import Icon from 'components/Icon';

// Constants
const Keys = {
  ENTER: 13,
  TAB: 9,
  BACKSPACE: 8,
  UP_ARROW: 38,
  DOWN_ARROW: 40,
  ESCAPE: 27
};


class TagField extends React.Component {
  static get propTypes() {
    return {
      allowDeleteFromEmptyInput: React.PropTypes.bool,
      autofocus: React.PropTypes.bool,
      delimeters: React.PropTypes.array,
      inline: React.PropTypes.bool,
      labelProp: React.PropTypes.string,
      suggestionProp: React.PropTypes.string,
      minQueryLength: React.PropTypes.number,
      onAdd: React.PropTypes.func.isRequired,
      onDelete: React.PropTypes.func.isRequired,
      onInputChange: React.PropTypes.func,
      placeholder: React.PropTypes.string,
      suggestions: React.PropTypes.array,
      tags: React.PropTypes.array
    };
  }

  static get defaultProps() {
    return {
      allowDeleteFromEmptyInput: true,
      autofocus: false,
      delimeters: [Keys.ENTER, Keys.TAB],
      inline: true,
      labelProp: 'id',
      suggestionProp: 'name',
      minQueryLength: 2,
      placeholder: 'Add tag...',
      suggestions: [],
      tags: []
    };
  }

  constructor(props) {
    super(props);

    // Set initial state
    this.state = {
      suggestions: this.props.suggestions,
      query: '',
      selectedIndex: -1,
      selectionMode: false
    };

    // Methods
    this.onChange = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onSuggestionClick = this.onSuggestionClick.bind(this);
    this.onSuggestionHover = this.onSuggestionHover.bind(this);
  }

  componentDidMount() {
    if(this.props.autofocus) {
      this.refs.input.focus();
    }
  }

  componentWillReceiveProps(props) {
    let suggestions = props.suggestions.filter(item => {
      return (item[this.props.suggestionProp].toLowerCase()).search(this.state.query.toLowerCase()) === 0;
    });

    this.setState({
      suggestions
    });
  }

  onDelete(i) {
    this.props.onDelete(i);
    this.setState({
      query: ''
    });
  }

  onChange(e) {
    if(this.props.onInputChange) {
      this.props.onInputChange(e.target.value.trim())
    }

    let query = e.target.value.trim();
    let suggestions = this.props.suggestions.filter(item => {
      return (item[this.props.suggestionProp].toLowerCase()).search(query.toLowerCase()) === 0;
    });

    this.setState({
      query,
      suggestions
    });
  }

  onKeyDown(e) {
    let query = this.state.query;
    let suggestions = this.state.suggestions;

    // hide suggestions menu on escape
    if(e.keyCode === Keys.ESCAPE) {
      e.preventDefault();
      this.setState({
        selectedIndex: -1,
        selectionMode: false,
        suggestions: []
      });
    }

    // When one of the terminating keys is pressed, add current query to the tags.
    // If no text is typed in so far, ignore the action - so we don't end up with a terminating
    // character typed in.
    if(this.props.delimeters.indexOf(e.keyCode) !== -1) {
      e.preventDefault();
      if(query !== '') {
        if(this.state.selectionMode) {
          query = this.state.suggestions[this.state.selectedIndex];
        }
        this.addTag(query);
      }
    }

    // when backspace key is pressed and query is blank, delete tag
    if(e.keyCode === Keys.BACKSPACE && query === '' && this.props.allowDeleteFromEmptyInput) {
      this.onDelete(this.props.tags.length - 1);
    }

    // up arrow
    if(e.keyCode === Keys.UP_ARROW) {
      e.preventDefault();
      let selectedIndex = this.state.selectedIndex;

      // last item, cycle to the top
      if(selectedIndex <= 0) {
        this.setState({
          selectedIndex: this.state.suggestions.length - 1,
          selectionMode: true
        });
      } else {
        this.setState({
          selectedIndex: selectedIndex - 1,
          selectionMode: true
        });
      }
    }

    // down arrow
    if(e.keyCode === Keys.DOWN_ARROW) {
      e.preventDefault();

      this.setState({
        selectedIndex: (this.state.selectedIndex + 1) % suggestions.length,
        selectionMode: true
      });
    }
  }

  onSuggestionClick(i) {
    this.addTag(this.state.suggestions[i]);
  }

  onSuggestionHover(i) {
    this.setState({
      selectedIndex: i,
      selectionMode: true
    });
  }

  addTag(tag) {
    if(typeof tag === 'string') {
      let id = tag.trim();
      id = _.deburr(id);
      id = _.camelCase(id);
      id = _.replace(id, /\W/g, '');
      id = _.upperFirst(id);

      tag = {
        id,
        name: tag
      };
    }

    let input = this.refs.input;

    // Call method to add
    this.props.onAdd(tag);

    // Reset the state
    this.setState({
      query: '',
      selectionMode: false,
      selectedIndex: -1
    });

    // Focus back on the input box
    input.value = '';
    input.focus();
  }

  render() {
    let tags = this.props.tags.map((tag, i) => {
      return <Tag key={tag.id} tag={tag} labelProp={this.props.labelProp} onDelete={this.onDelete.bind(this, i)} />
    });

    // Get the suggestions for the given query
    let query = this.state.query.trim();

    let tagInput = (
      <div>
        <input className="tagField_input"
          ref="input"
          type="text"
          placeholder={this.props.placeholder}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}/>
        <Suggestions query={query}
          labelProp={this.props.suggestionProp}
          suggestions={this.state.suggestions}
          selectedIndex={this.state.selectedIndex}
          onClick={this.onSuggestionClick}
          onHover={this.onSuggestionHover}
          minQueryLength={this.props.minQueryLength}/>
      </div>
    );

    return (
      <div className="tagField">
        <div className="tagField_selected">
          {tags}
          {this.props.inline && tagInput}
        </div>
        {!this.props.inline && tagInput}
      </div>
    )
  }
}

class Tag extends React.Component {
  static get propTypes() {
    return {
      labelProp: React.PropTypes.string,
      onDelete: React.PropTypes.func.isRequired,
      tag: React.PropTypes.object.isRequired
    };
  }

  static get defaultProps() {
    return {
      label: 'name'
    };
  }

  render() {
    let tag = this.props.tag || {};

    if(!tag.id) {
      return null;
    }

    let label = [this.props.tag[this.props.labelProp]];

    return (
      <div className="tagField_tag">
        #{label}
        <div className="tagField_remove" onClick={this.props.onDelete}>
          <Icon name="cross"/>
        </div>
      </div>
    );
  }
}

class Suggestions extends React.Component {
  static get propTypes() {
    return {
      labelProp: React.PropTypes.string,
      query: React.PropTypes.string.isRequired,
      selectedIndex: React.PropTypes.number.isRequired,
      suggestions: React.PropTypes.array.isRequired,
      onClick: React.PropTypes.func.isRequired,
      onHover: React.PropTypes.func.isRequired,
      minQueryLength: React.PropTypes.number
    };
  }

  markIt(input, query) {
    let escapedRegex = query.trim().replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');
    let r = RegExp(escapedRegex, 'gi');

    return {__html: input[this.props.labelProp].replace(r, '<mark>$&</mark>')}
  }

  render() {
    let suggestions = this.props.suggestions.map((item, i) => {
      return (
        <li key={i}
          onClick={this.props.onClick.bind(null, i)}
          onMouseOver={this.props.onHover.bind(null, i)}
          className={i === this.props.selectedIndex ? 'active' : ''}>
          <span dangerouslySetInnerHTML={this.markIt(item, this.props.query)}/>
        </li>
      )
    });

    let minQueryLength = this.props.minQueryLength || 2;

    if(suggestions.length === 0 || this.props.query.length < minQueryLength) {
      return null;
    }

    return (
      <ul className="tagField_suggestions">
        {suggestions}
      </ul>
    )
  }
}

export default TagField;
