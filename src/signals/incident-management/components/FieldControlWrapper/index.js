import React from 'react';
import PropTypes from 'prop-types';
import isEqual from 'lodash.isequal';
import sortBy from 'lodash.sortby';

import { FieldControl } from 'react-reactive-form';

export class FieldControlWrapper extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static formatValues(props) {
    if (props.values.find((value) => value.key === '')) {
      return props.values;
    }
    const sortedValues = props.sort ? sortBy(props.values, (item) => item.value) : props.values;
    return props.emptyOptionText ? [{ key: '', value: props.emptyOptionText, slug: '' }, ...sortedValues] : sortedValues;
  }

  constructor(props) {
    super(props);

    this.state = {
      values: FieldControlWrapper.formatValues(props)
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (!isEqual(props.values, state.values)) {
      return {
        values: FieldControlWrapper.formatValues(props)
      };
    }

    return null;
  }

  componentDidUpdate(prevProps) {
    if (!isEqual(this.props.values, prevProps.values)) {
      this.props.control.updateValueAndValidity();
    }
  }

  render() {
    const { name, control, render, ...props } = this.props;
    return (
      <div>
        <FieldControl
          name={name}
          control={control}
          render={render({
            ...props,
            values: this.state.values,
            name
          })}
        />
      </div>);
  }
}

FieldControlWrapper.defaultProps = {
  emptyOptionText: '',
  values: []
};

FieldControlWrapper.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  values: PropTypes.array,
  render: PropTypes.func.isRequired,
};

export default FieldControlWrapper;
