import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash.map';
import get from 'lodash.get';
import { injectIntl } from 'react-intl';
import isObject from 'lodash.isobject';

import Header from '../Header/';
import formatIncidentMessage from '../../../services/format-incident-message';

const renderOption = (intl, key, name, value, handler, parent) => {
  const id = `${name}-${key + 1}`;

  const incident = get(parent, 'meta.incident', {});
  const label = formatIncidentMessage(intl, value, incident);

  return (
    <div className="antwoord" key={key}>
      <input
        id={id}
        className="kenmerkradio"
        type="radio"
        checked={handler().value.id === key}
        onChange={() => parent.meta.updateIncident({ [name]: {
          id: key,
          label
        } })}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export const _RadioInput = ({ handler, touched, hasError, meta = {}, parent, getError, validatorsOrOpts, intl }) => {
  const { className, isVisible, name, values } = meta;
  return (
    <div className={`${isVisible ? 'row' : ''}`}>
      {isVisible &&
        <div className={`${className || 'col-12'} mode_input`}>
          <Header
            meta={meta}
            options={validatorsOrOpts}
            touched={touched}
            hasError={hasError}
            getError={getError}
            parent={parent}
          >
            <div className="antwoorden">
              {values && isObject(values) && map(values, (value, key) => (
                renderOption(intl, key, name, value, handler, parent)
              ))}
            </div>
          </Header>
        </div>
      }
    </div>
  );
};

_RadioInput.propTypes = {
  intl: PropTypes.object,
  parent: PropTypes.object,
  handler: PropTypes.func,
  touched: PropTypes.bool,
  getError: PropTypes.func.isRequired,
  hasError: PropTypes.func.isRequired,
  meta: PropTypes.object,
  validatorsOrOpts: PropTypes.object
};

/**
 * React-intl injector creates a class component from our function component.
 * This class component is wrapped inside a function compontent because react-reactive-forms
 * doesn't seem to work with class components in our way of using the form generator
 * (it expects a functional component).
 */
const IntlProvider = injectIntl(_RadioInput);
const FunctionWrappedComponent = (props) => <IntlProvider {...props} parent={props.parent} />;

FunctionWrappedComponent.propTypes = {
  parent: PropTypes.object
};

export default FunctionWrappedComponent;
