import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Markdown from 'react-remarkable';
import hljs from 'highlight.js';
import './hljs.scss';
import './tutorial.scss';

class Tutorial extends Component {
  componentDidMount() {
    const urlParams = new URLSearchParams(window.location.search);
    const tutorialId = urlParams.get('id');
    if (tutorialId)
      this.props.fetchTutorial({ id: tutorialId, history: this.props.history });
    else this.props.history.push('/tutorials');
  }

  render() {
    return (
      <div className="tutorial-page">
        <div className="tutorial">
          <div className="name">{this.props.name}</div>
          <div className="author">Written by {this.props.author}</div>
          <div className="domain">{this.props.domain}</div>
          <div className="content">
            <Markdown
              source={this.props.content}
              options={{
                linkify: true,
                langPrefix: 'code-block language-',
                highlight: function(str, lang) {
                  if (lang && hljs.getLanguage(lang)) {
                    try {
                      return hljs.highlight(lang, str).value;
                    } catch (err) {
                      console.log(err);
                    }
                  }
                  try {
                    return hljs.highlightAuto(str).value;
                  } catch (err) {
                    console.log(err);
                  }
                  return '';
                }
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

Tutorial.propTypes = {
  author: PropTypes.string.isRequired,
  tutorialId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  content: PropTypes.string.isRequired,
  domain: PropTypes.string,
  fetchTutorial: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default Tutorial;
