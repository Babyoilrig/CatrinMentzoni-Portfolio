import { Container, Row, Card, Text, Grid } from '@nextui-org/react';
import css from './SkillsHeader.module.css'

const SkillsHeader = ({title}) => {
  const MockItem = ({text}) => {
    return (
      <Card color="primary" css={{ h: '$24' }}>
        <Text h6 size={15} color="black" css={{ mt: 0 }}>
          {text}
        </Text>
      </Card>
    );
}
return (
<Grid.Container gap={2} justify="center">
  <Grid xs={6}>
  <div id="projects-section" className={css.projectsContainer}>
        <h2 className={css.projectsTitle}>{title}</h2>
        <div className={css.projectUnderline}>
       </div>
       </div>
  </Grid>
</Grid.Container>
) }

export default SkillsHeader;