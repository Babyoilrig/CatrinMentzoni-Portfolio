import { Grid, Text, Card } from '@nextui-org/react';
import css from './CatImagePage1.module.css';

const CatImagePage1 = () => {
    const MockItem = ({text}) => {
      return (
        <Card color="primary" css={{ h: '$24' }}>
          <Text h6 size={15} color="white" css={{ mt: 0 }}>
            {text}
          </Text>
        </Card>
      );
  }
  return (
  <Grid.Container gap={2} justify="center">
    <Grid xs={6}>
    <div className={css.catImageContainerPG1}>
    <img className={css.catImage} src="/images/Cat1.png" />
    </div>
    </Grid>
  </Grid.Container>
  ) }

  export default CatImagePage1;




