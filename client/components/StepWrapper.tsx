import {
  Card,
  Container,
  Grid,
  Step,
  StepLabel,
  Stepper,
} from '@material-ui/core';

interface IProps {
  activeStep: number;
}

const steps = ['Информация о треке', 'Загрузите обложку', 'Загрузите'];

const StepWrapper: React.FC<IProps> = ({ activeStep, children }) => {
  return (
    <Container>
      <Stepper activeStep={activeStep}>
        {steps.map((step, i) => (
          <Step key={i} completed={activeStep > i}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Grid
        container
        justifyContent="center"
        style={{ margin: '70px 0', height: 270 }}
      >
        <Card style={{ width: 600 }}>{children}</Card>
      </Grid>
    </Container>
  );
};

export default StepWrapper;
