import { Grid, Text, Card } from '@nextui-org/react';
  import css from './Hobbies.module.css';
  
  
  const HobbiesSection = () => {
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
    <Grid.Container  gap={2} justify="center">
      <Grid s={6}>
      <div className={css.hobbiesSection}>   
      <h1 className={css.hobbiesHeading}>Hobbies</h1>
        <ul className={css.hobbiesList}>
       <li>Coding!</li> 
       <li>Music</li>
       <li>Travel</li>
       <li>Walking</li>
       <li>Swimming</li>
       <li>Paddleboarding</li>
       <li>Surfing</li>
       <li>Cooking</li>
       <li>Campervanning</li>
        </ul>
        </div>  
      </Grid>
      
  </Grid.Container>
  ) }

  export default HobbiesSection;