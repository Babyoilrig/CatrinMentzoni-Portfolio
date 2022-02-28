import { Grid, Text, Card } from '@nextui-org/react';
const TwoContainers = () => {
    const MockItem = ({text}) => {
      return (
        <Card color="white" css={{ h: '$24' }}>
          <Text h6 size={15} color="white" css={{ mt: 0 }}>
            {text}
          </Text>
        </Card>
      );
  }
  return (
  <Grid.Container gap={2} justify="center">
    <Grid xs={6}><MockItem text="1 of 2" /></Grid>
      <Grid xs={6}><MockItem text="2 of 2" /></Grid>
  </Grid.Container>
  ) }

  export default TwoContainers;