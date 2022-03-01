import { Container, Row, Card, Text, Grid } from '@nextui-org/react';
import css from './SkillsSection.module.css'

const SkillsSection = () => {
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
<Grid.Container className={css.skillsIcons} gap={2} justify="center">
  <Grid xs={6}>
      <div className={css.jsIcon}>
        <img
          className={css.jsImage}
          src="/images/js-removebg-preview.png"
        ></img>
      </div>
      <div className={css.reactIcon}>
        <img
          className={css.reactImage}
          src="/images/react-removebg-preview.png"
        ></img>
      </div>
      <div className={css.nodeIcon}>
        <img
          className={css.nodeImage}
          src="/images/nodejs-removebg-preview.png"
        ></img>
      </div>
      <div className={css.RNIcon}>
        <img
          className={css.RNImage}
          src="/images/React-native.png"
        ></img>
      </div>
      <div className={css.htmlIcon}>
        <img
          className={css.htmlImage}
          src="/images/HTML5_logo_black.svg-removebg-preview.png"
        ></img>
      </div>
      <div className={css.cssIcon}>
        <img className={css.cssImage} src="/images/css-removebg-preview-big.png"
	></img>
      </div>
      <div className={css.postgresIcon}>
        <img
          className={css.postgresImage}
          src="images/postgres-removebg-preview-big.png"
        ></img>
      </div>
      <div className={css.nextIcon}>
        <img className={css.nextImage} src="/images/Next.png"
	></img>
      </div>
      <div className={css.expressIcon}>
        <img
          className={css.expressImage}
          src="/images/express-removebg-preview.png"
        ></img>
      </div> 
  </Grid>
</Grid.Container>
) }

export default SkillsSection;