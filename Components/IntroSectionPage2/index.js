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
        <div className={css.introPara}><p>
        Hi, my name is Cat and I grew up near Pwllheli in North West Wales. </p>

<p>During early teens in the mid-1990s I got my first home computer, and spent hours learning 
about different programs and spending time on the Internet. I even completed an AS Level in Computer 
Programming in 2000, in which I learned to code in the ‘Delphi’ language. </p>

<p>Even though I enjoyed working with computers, I ended up studying business studies at university, 
and after leaving university in 2006, I started my own events business “ Curb Promotions” which specialised 
in hosting music events. </p>

<p>In 2010, I spent two years in Cambodia first volunteering with his Cambodians children charity 
(Camkids.org) and then working as a teacher in the capital Phnom Penh. </p>

<p>On returning to the UK in 2012, I trained to be a primary school teacher, a job which I did for 
10 years. Although I enjoyed the job, the lack of opportunities to learn new skills, and the lack 
of challenge motivated me to begin looking for a new career path. </p>

<p>During spring 2021 I read some articles regarding the skills shortage in the software
 engineering sector which mentioned the School of Code and they’re amazing bootcamp. During 
 the summer I decided to apply for the course.</p>

<p>Although the bootcamp was extremely challenging, I soon regained my love of coding!</p>
        </div>

        <div className={css.buttonContainer}>
          <Link href="CV" passHref>
            <button className={css.firstButton}>{introButton1}</button>
          </Link>
          <Link href="Home" passHref>
            <button className={css.secondButton}>{introButton2}</button>
          </Link>
        </div>
      </div>
    </div>
    </Grid>
      
  </Grid.Container>
  ) }

  export default IntroSectionPage2;


