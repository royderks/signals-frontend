function onNext(wizardDefinition, { step, steps, push }, incident, isAuthenticated) {
  const wizardStep = step.id && step.id.split('/').reverse()[0];
  const nextStep = wizardStep &&
    wizardDefinition[wizardStep] &&
    wizardDefinition[wizardStep].getNextStep &&
    wizardDefinition[wizardStep].getNextStep(wizardDefinition, incident, isAuthenticated);

  if (nextStep) {
    push(nextStep);
  } else if (steps.length > 0) {
    push();
  }
}

export default onNext;
