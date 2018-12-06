import React from 'react';
import PropTypes from 'prop-types';
import './listItem.scss';

const ListItem = props => (
  <div className="list-item" onClick={props.click ? props.click : () => {}}>
    {props.title && <div className="title">{props.title}</div>}
    {props.subtext && <div className="subtext">{props.subtext}</div>}
    {props.description && (
      <div className="description">{props.description}</div>
    )}
    {props.domain && <div className="domain">{props.domain}</div>}
  </div>
);

ListItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  domain: PropTypes.string,
  click: PropTypes.func,
  subtext: PropTypes.string
};

export default ListItem;
