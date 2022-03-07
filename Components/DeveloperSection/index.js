import { Grid, Text, Card } from '@nextui-org/react';
  import css from './DeveloperSection.module.css';
  
  
  const DeveloperSection = () => {
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
        <Grid.Container className={css.developerGrid} gap={2} justify="center" wrap="wrap">
        <Grid md={4} className={css.developerRight}><h2>Becoming a Full Stack Engineer</h2>
        
        <p className={css.developerP1}>In these 16 weeks, I've gained experience with technologies including:
        The School of Code’s 16 week bootcamp has changed my life! The School of Code has an amazing reputation, 
        and I was selected from over 1800 applicants to take part in the bootcamp 10 cohort!</p>

        <p className={css.developerP2}>During the bootcamp I have learnt skills and technologies that have taken me from a coding beginner to a full 
        stack software engineer. We have also learnt how to work effectively as the part of an agile team, including reflecting 
        on our personality traits, listening ability, communication style, and mindset. Also, concepts such as UX/UI, dev ops 
        and project management. </p>

        <p className={css.developerP3}>I enjoy building the front end of applications and styling them to look attractive, and then hooking up the 
        ‘back-end’ logic to make dynamic apps. Moreover though,  I enjoy doing this as part of a team!
        </p></Grid>
        <Grid md={4} className={css.developerLeft}><h1 className={css.skillsHeading}>Skills</h1>
        <ul className={css.list}>
<li>Front end: JavaScript ES6, HTML5, CSS3 </li>
<li>Frameworks and libraries: React, Gatsby, Next </li>
<li>Back end: Node, Express, PostgreSQL, WebSocket </li>
<li>Services: Netlify, Heroku, Serverless, AWS, Docker </li>
<li>Tools: Git, Docker </li>
<li>Testing and test-driven development </li>
<br></br>
<h3 className={css.softSkillsHeading}>And soft skills, such as: </h3>

<li>Agile methodology </li>
<li>Solo and pair programming </li>
<li>Creative problem solving, both independently and within a larger team </li>
<li>Working, learning, and collaborating remotely </li>
</ul></Grid>
        
      </Grid.Container>

        
  ) }

  export default DeveloperSection;