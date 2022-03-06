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
        <Grid.Container gap={2} justify="center" wrap="wrap">
        <Grid md={4}><p>In these 16 weeks, I've gained experience with technologies including:
Front end: JavaScript ES6, HTML5, CSS3
Frameworks and libraries: React, Gatsby, Next
Back end: Node, Express, PostgreSQL, WebSocket
Services: Netlify, Heroku, Serverless, AWS, Docker
Tools: Git, Docker
Testing and test-driven development
And soft skills, such as:
Agile methodology
Solo and pair programming
Creative problem solving, both independently and within a larger team
Working, learning, and collaborating remotely</p></Grid>
        <Grid md={4}><p>In these 16 weeks, I've gained experience with technologies including:
Front end: JavaScript ES6, HTML5, CSS3
Frameworks and libraries: React, Gatsby, Next
Back end: Node, Express, PostgreSQL, WebSocket
Services: Netlify, Heroku, Serverless, AWS, Docker
Tools: Git, Docker
Testing and test-driven development
And soft skills, such as:
Agile methodology
Solo and pair programming
Creative problem solving, both independently and within a larger team
Working, learning, and collaborating remotely</p></Grid>
        
      </Grid.Container>

        
  ) }

  export default DeveloperSection;