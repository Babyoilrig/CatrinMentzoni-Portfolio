import { Grid, Text, Card } from '@nextui-org/react';
import css from './IntroSectionPage2.module.css'

// import YoutubeVideo from '../VideoPlayer';


const IntroSectionPage2 = ({mainTitle, introSentence}) => {
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
    <div className={css.intro}>
      <h2 className={css.mainTitle}>{mainTitle}</h2>
      <div className={css.content}>
        <h1 className={css.blackMainTitle}>{introSentence}</h1>
        <div className={css.videoContainer}>
      {/* <YoutubeVideo /> */}
      </div>
      </div>
    </div>
    </Grid>
  </Grid.Container>
  

  ) }

  export default IntroSectionPage2;

