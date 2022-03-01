import { Grid, Text, Card } from '@nextui-org/react';
import css from './IntroSection.module.css';
import Link from "next/link";

const IntroSectionPage1 = ({mainTitle, introSentence, introPara, introButton1, introButton2}) => {
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
    <div className={css.intro}>
      <h2 className={css.mainTitle}>{mainTitle}</h2>
      <div className={css.content}>
        <h1 className={css.blackMainTitle}>{introSentence}</h1>
        <p className={css.introPara}>{introPara}</p>

        <div className={css.buttonContainer}>
          <Link href="/about" passHref>
            <button className={css.firstButton}>{introButton1}</button>
          </Link>
          <Link href="#projects-section" passHref>
            <button className={css.secondButton}>{introButton2}</button>
          </Link>
        </div>
      </div>
    </div>
    </Grid>
      <Grid xs={6}>
      <div className={css.catImageContainer}>
      <div>
        <img src="/images/Cat1.png" />
        </div>
      </div>
      </Grid>
  </Grid.Container>
  ) }

  export default IntroSectionPage1;







