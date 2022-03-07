import { Grid, Text, Card } from '@nextui-org/react';
import Link from "next/link";
import css from './ProjectSection1.module.css'

const ProjectSection1 = ({projectTitle, projectDescription}) => {
    const MockItem = ({text}) => {
      return (
        <Card color="white" css={{ h: '$24' }}>
          <Text h6 size={15} color="white" css={{ mt: 0 }}>
            {text}
          </Text>
        </Card>
      );
  }
  return (
  <Grid.Container className={css.projectGrid1} gap={2} justify="center" wrap="wrap">
    <Grid md={5} className={css.proj1Left}>
    <div className={css.projectTextBox}>
    <h2 className={css.projectTitle}>{projectTitle}</h2>
    <h3 className={css.projectDescription}>{projectDescription}</h3>
    <Link href="https://github.com/Babyoilrig/CatrinMentzoni-Portfolio" passHref>
    <button className={css.projectButton}>View Project</button>
    </Link>
    </div>
  </Grid>
      <Grid md={5} className={css.proj1Right}>
      
        <img className={css.bootcamperAppImage} src="/images/mywebsite-sml.png" />
        </Grid>
  </Grid.Container>
  ) }

  export default ProjectSection1;