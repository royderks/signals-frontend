import React from 'react';
import PropTypes from 'prop-types';
import { FormBuilder } from 'react-reactive-form';

import './style.scss';

import IncidentPart from '../IncidentPart';

class SplitForm extends React.Component {
  constructor(props) {
    super(props);

    // TEMP work around because the endpoint does not supply category as uri
    const subcategory = `https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/${props.incident.category.main_slug}/sub_categories/${props.incident.category.sub_slug}`;
    this.state = {
      isVisible: props.isVisible,
      splitForm: FormBuilder.group({
        part1: FormBuilder.group({
          subcategory,
          text: props.incident.text,
          image: true,
          note: '',
          priority: props.incident.priority.priority,
        }),
        part2: FormBuilder.group({
          subcategory,
          text: props.incident.text,
          image: true,
          note: '',
          priority: props.incident.priority.priority,
        }),
        part3: FormBuilder.group({
          subcategory,
          text: props.incident.text,
          image: true,
          note: '',
          priority: props.incident.priority.priority,
        }),
      })
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.setVisibility = this.setVisibility.bind(this);
  }

  setVisibility(isVisible) {
    this.setState({ isVisible });
  }

  handleSubmit() {
    const create = [];
    const update = [];
    const parts = ['part1', 'part2'];
    if (this.state.isVisible) {
      parts.push('part3');
    }

    parts.forEach((part) => {
      update.push(this.state.splitForm.value[part]);
      create.push({
        category: {
          sub_category: this.state.splitForm.value[part].subcategory
        },
        reuse_parent_image: this.state.splitForm.value[part].image,
        text: this.state.splitForm.value[part].text
      });
    });

    this.props.handleSubmit({
      id: this.props.incident.id,
      create,
      update
    });
  }

  render() {
    const { incident, attachments, subcategories, priorityList, handleCancel } = this.props;
    return (
      <div className="split-form">
        <h1>Splitsen</h1>

        <div className="split-form__disclainer-top">
          Splitsen mag alleen als de oorspronkelijke melding over twee verschillende onderwerpen gaat, die zonder samenwerking met een andere afdeling kan worden afgehandeld.
        </div>

        <IncidentPart
          index="1"
          attachments={attachments}
          subcategories={subcategories}
          priorityList={priorityList}
          splitForm={this.state.splitForm}
        />

        <IncidentPart
          index="2"
          incident={incident}
          attachments={attachments}
          subcategories={subcategories}
          priorityList={priorityList}
          splitForm={this.state.splitForm}
        />

        {this.state.isVisible ?
          <div>
            <button onClick={() => this.setVisibility(false)} className="action reset split-form__button-hide">Verwijder</button>

            <IncidentPart
              index="3"
              incident={incident}
              attachments={attachments}
              subcategories={subcategories}
              priorityList={priorityList}
              splitForm={this.state.splitForm}
            />

          </div>
          :
          <button onClick={() => this.setVisibility(true)} className="action tertiair split-form__button-show">Deelmelding 3 toevoegen</button>
        }

        <div className="split-form__disclainer">
          <h4>Let op</h4>
          <ul>
            <li>De persoon die de oorspronkelijke melding heeft gedaan, ontvangt een email per deelmelding.</li>
            <li>De oorspronkelijke melding wordt afgesloten als deze gesplitst wordt.</li>
            <li>Een melding kan maar 1 keer gesplitst worden.</li>
          </ul>
        </div>

        <div>
          <button onClick={this.handleSubmit} className="action primary">Splitsen</button>
          <button onClick={handleCancel} className="action tertiair">Annuleer</button>
        </div>
      </div>
    );
  }
}

SplitForm.defaultProps = {
  incident: {
    category: {},
    priority: {
      priority: ''
    }
  },
  isVisible: false,
  subcategories: []
};

SplitForm.propTypes = {
  incident: PropTypes.object,
  attachments: PropTypes.array,
  isVisible: PropTypes.bool,
  subcategories: PropTypes.array,
  priorityList: PropTypes.array,
  handleSubmit: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired
};

export default SplitForm;
