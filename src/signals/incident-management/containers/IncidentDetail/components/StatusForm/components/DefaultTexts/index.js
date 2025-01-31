/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';


import './style.scss';

const DefaultTexts = ({ defaultTexts, state, onHandleUseDefaultText }) => {
  const allText = (defaultTexts && defaultTexts.length && defaultTexts.find((text) => text.state === state));
  const showTexts = allText && ['o', 'ingepland'].includes(state);

  return (
    <div className="default-texts">
      {showTexts ?
        <div>
          <h4>Standaard teksten</h4>

          {showTexts && allText.templates.map((text, index) => (
            <div key={index}>
              <div className="default-texts__wrapper">
                <div className="default-texts__title">{text.title}</div>
                <div className="default-texts__text">{text.text}</div>

                <button
                  className="default-texts__button"
                  onClick={(e) => onHandleUseDefaultText(e, text.text)}
                >Gebruik deze tekst</button>
              </div>
            </div>
          ))}
        </div>
      : ''}
    </div>
  );
};

DefaultTexts.propTypes = {
  defaultTexts: PropTypes.array.isRequired,
  state: PropTypes.string.isRequired,

  onHandleUseDefaultText: PropTypes.func.isRequired
};

export default DefaultTexts;
