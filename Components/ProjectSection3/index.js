import { Grid, Text, Card } from '@nextui-org/react';
import Link from "next/link";
import css from './ProjectSection3.module.css'

const ProjectSection3 = ({projectTitle, projectDescription}) => {
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
  <Grid.Container className={css.projectGrid3} gap={2} justify="center">
    <Grid xs={6}><div className={css.projectTextBox}>
    <h2 className={css.projectTitle}>{projectTitle}</h2>
    <h3 className={css.projectDescription}>{projectDescription}</h3>
    <Link href="https://github.com/orgs/SchoolOfCode/teams/farc-incorporated/repositories" passHref>
    <button className={css.projectButton}>View Project</button>
    </Link>
    </div>
  </Grid>
      <Grid xs={6}><MockItem text="2 of 2" /></Grid>
  </Grid.Container>
  ) }

  export default ProjectSection3;