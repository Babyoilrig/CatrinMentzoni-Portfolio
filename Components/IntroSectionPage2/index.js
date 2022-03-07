import { Grid, Text, Card } from '@nextui-org/react';
import css from './IntroSectionPage2.module.css';
import Link from "next/link";

const IntroSectionPage2 = ({mainTitle, introSentence, introButton1, introButton2}) => {
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
       
        <div className={css.introPara}>
        <h2 className={css.paraHeading}>Background</h2>
        <p className={css.para1}>
        Hi, my name is Cat and I grew up near Pwllheli in North West Wales. </p>

<p className={css.para2}>During early teens in the mid-1990s I got my first home computer, and spent hours learning 
about different programs and spending time on the Internet. I even completed an AS Level in Computer 
Programming in 2000, in which I learned to code in the ‘Delphi’ language. </p>

<p className={css.para3}>Even though I enjoyed working with computers, I ended up studying business studies at university, 
and after leaving university in 2006, I started my own events business “ Curb Promotions” which specialised 
in hosting music events. </p>

<p className={css.para4}>In 2010, I spent two years in Cambodia first volunteering with his Cambodians children charity 
(Camkids.org) and then working as a teacher in the capital Phnom Penh. </p>



        <div className={css.buttonContainer}>
          <Link href="https://drive.google.com/file/d/13l5EDVpTSWMwYZp8rLr1gorKFqCm6Tba/view?usp=sharing" passHref>
            <button className={css.firstButton}>{introButton1}</button>
          </Link>
          <Link href="/" passHref>
            <button className={css.secondButton}>{introButton2}</button>
          </Link>
        </div>
      </div>
    </div>
    </div>
    </Grid>
  </Grid.Container>
  ) }

  export default IntroSectionPage2;


