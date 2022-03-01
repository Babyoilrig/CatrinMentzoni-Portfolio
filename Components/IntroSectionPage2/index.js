import { Grid, Text, Card } from '@nextui-org/react';
import css from './IntroSectionPage2.module.css'
import Link from "next/link";
import Video from '../Video';

const IntroSectionPage2 = ({mainTitle, introSentence, introPara, introButton1, introButton2}) => {
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
      </div>
    </div>
    </Grid>
      <Grid xs={6}>
      <div className={css.catImageContainer}>
      <Video />
      </div>
      </Grid>
  </Grid.Container>
  ) }

  export default IntroSectionPage2;

