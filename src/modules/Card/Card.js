import React, { Children } from 'react';
import PropTypes from 'prop-types';
import './card.scss';

const Card = props => (
  <div className="card" style={{ ...props.styles }}>
    <div className="heading">{props.heading}</div>
    {Children.only(props.children)}
    <div className="bottom-info">{props.bottomInfo}</div>
  </div>
);

Card.propTypes = {
  styles: PropTypes.object,
  heading: PropTypes.string,
  bottomInfo: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Card;
