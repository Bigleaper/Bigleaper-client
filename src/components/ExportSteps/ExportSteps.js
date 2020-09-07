import React, { Fragment } from 'react';
import { makeStyles, Stepper, Step, StepLabel, Button, Typography, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    background: 'white',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const getSteps = () => {
  return ['Folio Creation', 'Export Docs', 'Carrier Docs', 'Custom Broker Docs', 'Import Docs', 'Freight Delivery'];
}

const getStepContent = (stepIndex) => {
  switch (stepIndex) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      return 'Step 1: You need to asign your actors';
    default:
      return 'Unknown stepIndex';
  }
}

const ExportSteps = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);
  const handleReset = () => setActiveStep(0);

  return (
    <Container className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography variant="caption" className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography variant="caption" className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <Fragment>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </Fragment>
          </div>
        )}
      </div>
    </Container>
  );
}

export default ExportSteps;