import { Grid, Text, Card } from '@nextui-org/react';
import Link from "next/link";
import css from './ProjectSection2.module.css'

const ProjectSection2 = ({projectTitle, projectDescription}) => {
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
  <Grid.Container className={css.projectGrid2} gap={2} justify="center" wrap="wrap">
    <Grid md={5} className={css.proj2Right}><div className={css.projectImageBox}>
        <img className={css.bootcamperAppImage} src="/images/bootcamper-app.png" />
        </div></Grid>
      <Grid md={5} className={css.proj2Left}><div className={css.projectTextBox}>
    <h2 className={css.projectTitle}>{projectTitle}</h2>
    <h3 className={css.projectDescription}>{projectDescription}</h3>
    <Link href="https://github.com/orgs/SchoolOfCode/teams/farc-incorporated/repositories" passHref>
    <button className={css.projectButton}>View Project</button>
    </Link>
    </div>
  </Grid>
  </Grid.Container>
  ) }

  export default ProjectSection2;