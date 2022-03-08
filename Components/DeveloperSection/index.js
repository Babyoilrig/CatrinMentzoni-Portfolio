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
        
        <p className={css.developerP1}>
        I attended the School of Code’s 16 week bootcamp, between 15th November 2021 - 11th March 2022, 
        and taking part in the course has completely changed my life!</p>

        <p className={css.developerP2}>During the bootcamp I have learnt skills and technologies that have taken me from a coding novice to a full 
        stack software engineer - some of these are detailed in the next section. I have also learnt how to work effectively as the part of an agile team, 
        including reflecting on my personality traits, listening ability, communication style, and mindset. I have also learnt about concepts such as UX/UI, dev ops 
        and project management. </p>

        <p className={css.developerP3}>I enjoy building the front end of applications using frameworks like React, styling them to look attractive, and then hooking up the 
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