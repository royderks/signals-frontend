/**
*
* RadioInput
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export const RadioInput = (props) => {
  const { name, display, values } = props;
  const render = ({ handler }) => (
    <div className="radio-input">
      <div className="mode_input text rij_verplicht">
        <div className="radio-input__label">
          <label htmlFor={`form${name}`}>{display}</label>
        </div>

        <div className="radio-input__control invoer">
          {values && values.map(({ key, value }) => (
            <div className="antwoord" key={`${name}-${key}`}>
              <input
                id={`${name}-${key}`}
                className="kenmerkradio"
                {...handler('radio', key)}
              />
              <label htmlFor={`${name}-${key}`}>{value}</label>
            </div>
          ))}
        </div>
      </div>
    </div>);

  render.defaultProps = {
    touched: false
  };

  render.propTypes = {
    handler: PropTypes.func.isRequired
  };
  return render;
};


export default RadioInput;
