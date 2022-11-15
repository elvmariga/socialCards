import React from 'react';
import PropTypes from 'prop-types';
import Pic from "../Card/logo192.png";
import styles from './Card.module.css';


const Card = (props) => (
  <div className={styles.Card} data-testid="Card">
    <h1>{props.name}</h1>
    <img src={props.icon} alt="" />
    <h3>{props.userName}</h3>
    <p>{props.posts}</p>
    <a href="https://mail.google.com/mail/u/1/#search/wamaya">Link</a>
  </div>
);

Card.propTypes = {};

Card.defaultProps = {};

export default Card;
