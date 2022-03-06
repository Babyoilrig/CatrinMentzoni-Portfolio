import { Grid, Text, Card } from '@nextui-org/react';
import css from './ImagePage2.module.css'



const ImagePage2 = () => {
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
  <Grid.Container justify="flex-end">
    <Grid xs={6}>
    <div className={css.catImageContainer}>
      <div>
        <img className={css.catImage} src="/images/Cat1.png" />
        </div>
      </div>
    </Grid>
  </Grid.Container>

  ) }

  export default ImagePage2;

