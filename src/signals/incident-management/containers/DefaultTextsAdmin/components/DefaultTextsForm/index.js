import React from 'react';
import PropTypes from 'prop-types';
import { FormBuilder, FieldGroup, Validators } from 'react-reactive-form';
import isEqual from 'lodash.isequal';

import FieldControlWrapper from '../../../../components/FieldControlWrapper';
import TextInput from '../../../../components/TextInput';
import TextAreaInput from '../../../../components/TextAreaInput';
import HiddenInput from '../../../../components/HiddenInput';


import './style.scss';

class DefaultTextsForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  form = FormBuilder.group({ // eslint-disable-line react/sort-comp
    item0: FormBuilder.group({
      title: [''],
      text: [''],
    }),
    item1: FormBuilder.group({
      title: [''],
      text: [''],
    }),
    item2: FormBuilder.group({
      title: [''],
      text: [''],
    }),
    item3: FormBuilder.group({
      title: [''],
      text: [''],
    }),
    item4: FormBuilder.group({
      title: [''],
      text: [''],
    }),
    categoryUrl: ['', Validators.required],
    state: ['', Validators.required]
  });

  items = Object.keys(this.form.controls).slice(0, -2);

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeOrdering = this.changeOrdering.bind(this);
  }

  componentDidMount() {
    this.items.forEach((item, index) => {
      this.form.get(item).valueChanges.subscribe((data) => {
        this.props.onSaveDefaultTextsItem({ index, data });
      });
    });
  }

  componentWillUnmount() {
    this.items.forEach((item) => {
      this.form.get(item).valueChanges.unsubscribe();
    });
  }

  componentDidUpdate(prevProps) {
    const newValue = {};
    if (!isEqual(prevProps.defaultTexts, this.props.defaultTexts)) {
      this.items.forEach((item, index) => {
        const empty = { title: '', text: '' };
        const data = this.props.defaultTexts[index] || {};
        this.form.get(item).patchValue({ ...empty, ...data });
      });
    }

    if (!isEqual(prevProps.categoryUrl, this.props.categoryUrl)) {
      newValue.categoryUrl = this.props.categoryUrl;
    }

    if (!isEqual(prevProps.state, this.props.state)) {
      newValue.state = this.props.state;
    }

    this.form.patchValue(newValue);
    this.form.updateValueAndValidity();
  }

  handleSubmit(e) {
    e.preventDefault();

    const categoryUrl = this.form.get('categoryUrl').value;
    const payload = {
      post: {
        state: this.form.get('state').value,
        templates: []
      }
    };
    const found = this.props.subCategories.find((sub) => sub.key === categoryUrl);
    if (found && found.slug && found.category_slug) {
      payload.sub_slug = found.slug;
      payload.main_slug = found.category_slug;

      this.items.forEach((item) => {
        const data = this.form.get(item).value;
        if (data.text && data.title) {
          payload.post.templates.push({ ...data });
        }
      });

      this.props.onSubmitTexts(payload);
    }

    this.form.updateValueAndValidity();
  }

  changeOrdering(e, index, type) {
    e.preventDefault();
    this.props.onOrderDefaultTexts({ index, type });
    this.form.updateValueAndValidity();
  }

  render() {
    return (
      <div className="default-texts-form">
        <FieldGroup
          control={this.form}
          render={({ invalid }) => (
            <form onSubmit={this.handleSubmit} className="default-texts-form__form">
              <FieldControlWrapper
                render={HiddenInput}
                name="state"
                control={this.form.get('state')}
              />

              <FieldControlWrapper
                render={HiddenInput}
                name="categoryUrl"
                control={this.form.get('categoryUrl')}
              />

              {this.items.map((item, index) => (
                <div key={item} className="row default-texts-form__row">
                  <div className="col-10">
                    <FieldControlWrapper
                      placeholder="Titel"
                      render={TextInput}
                      name={`title${index}`}
                      control={this.form.get(`${item}.title`)}
                    />

                    <FieldControlWrapper
                      placeholder="Tekst"
                      render={TextAreaInput}
                      name={`text${index}`}
                      control={this.form.get(`${item}.text`)}
                    />
                  </div>
                  <div className="col-2 default-texts-form__actions">
                    <button
                      disabled={index === 0 || !this.form.get(`${item}.text`).value}
                      className="default-texts-form__order-button default-texts-form__order-button--up"
                      onClick={(e) => this.changeOrdering(e, index, 'up')}
                    />
                    <button
                      disabled={index === this.items.length - 1 || !this.form.get(`item${index + 1}.text`).value}
                      className="default-texts-form__order-button default-texts-form__order-button--down"
                      onClick={(e) => this.changeOrdering(e, index, 'down')}
                    />
                  </div>
                </div>
              ))}

              <button className="status-form__form-submit action primary" type="submit" disabled={invalid}>Opslaan</button>
            </form>
              )}
        />
      </div>
    );
  }
}

DefaultTextsForm.defaultProps = {
  defaultTexts: [],
  categoryUrl: '',
  subCategories: [],
  state: '',

  onSubmitTexts: () => {},
  onOrderDefaultTexts: () => {},
  onSaveDefaultTexts: () => {},
  onSaveDefaultTextsItem: () => {}
};

DefaultTextsForm.propTypes = {
  defaultTexts: PropTypes.array,
  subCategories: PropTypes.array,
  categoryUrl: PropTypes.string,
  state: PropTypes.string,

  onSubmitTexts: PropTypes.func,
  onOrderDefaultTexts: PropTypes.func,
  onSaveDefaultTextsItem: PropTypes.func
};

export default DefaultTextsForm;
