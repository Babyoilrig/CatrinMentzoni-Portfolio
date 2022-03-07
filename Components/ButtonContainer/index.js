import { Grid, Text, Card } from '@nextui-org/react';
  import css from './ButtonContainer.module.css';
  import Link from "next/link";
  
  
  const ButtonContainer = ({introButton1, introButton2}) => {
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
      <div className={css.buttonContainer}>
      
          <Link href="https://drive.google.com/file/d/13l5EDVpTSWMwYZp8rLr1gorKFqCm6Tba/view?usp=sharing" passHref>
            <button className={css.firstButton}>{introButton1}</button>
          </Link>
          <Link href="/" passHref>
            <button className={css.secondButton}>{introButton2}</button>
          </Link>
      </div>
      </Grid>
      
  </Grid.Container>
  ) }

  export default ButtonContainer;