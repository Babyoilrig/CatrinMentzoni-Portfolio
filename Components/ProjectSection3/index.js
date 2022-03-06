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
  <Grid.Container className={css.projectGrid3} gap={2} justify="center" wrap="wrap">
    <Grid md={5} className={css.proj3Right}><div className={css.projectTextBox}>
    <h2 className={css.projectTitle}>{projectTitle}</h2>
    <h3 className={css.projectDescription}>{projectDescription}</h3>
    <Link href="https://github.com/SchoolOfCode/final-project-repo-node-of-ingenuity-room-17" passHref>
    <button className={css.projectButton}>View Project</button>
    </Link>
    </div>
  </Grid>
      <Grid md={5} className={css.proj3Left} ><div>
        <img className={css.bootcamperAppImage} src="/images/tribeApp-sml.png" />
        </div></Grid>
  </Grid.Container>
  ) }

  export default ProjectSection3;