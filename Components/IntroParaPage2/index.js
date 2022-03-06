import { Grid, Text, Card } from '@nextui-org/react';
import css from './IntroParaPage2.module.css';
import Link from "next/link";



const IntroParaPage2 = ({ introPara, introButton1, introButton2}) => {
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
  <Grid.Container justify="flex-start">
    <Grid xs={6}>
    <div className={css.introPara}><p className={css.introParaText}>{introPara}</p>
        </div>

        <div className={css.buttonContainer}>
          <Link href="CV" passHref>
            <button className={css.firstButton}>{introButton1}</button>
          </Link>
          <Link href="/" passHref>
            <button className={css.secondButton}>{introButton2}</button>
          </Link>
        </div>
    </Grid>
  </Grid.Container>

  ) }

  export default IntroParaPage2;

