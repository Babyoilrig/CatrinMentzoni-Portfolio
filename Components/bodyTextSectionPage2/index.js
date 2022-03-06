import { Grid, Text, Card } from '@nextui-org/react';
  import css from './bodyTextSectionPage2.module.css';
  
  
  const BodyTextSectionPage2 = () => {
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
    <Grid.Container className={css.bodySection} gap={2} justify="center">
      <Grid s={6}>     
      <div>
<p className={css.para5}>On returning to the UK in 2012, I trained to be a primary school teacher, a job which I did for 
10 years. Although I enjoyed the job, the lack of opportunities to learn new skills, and the lack 
of challenge motivated me to begin looking for a new career path. </p>

<p className={css.para6}>During spring 2021 I read some articles regarding the skills shortage in the software
 engineering sector which mentioned the School of Code and they’re amazing bootcamp. During 
 the summer I decided to apply for the course.</p>

<p className={css.para7}>Although the bootcamp was extremely challenging, I soon regained my love of coding!</p>
        </div>

        </Grid>
      
  </Grid.Container>
  ) }

  export default BodyTextSectionPage2;