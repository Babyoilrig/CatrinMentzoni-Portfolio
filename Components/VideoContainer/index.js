import { Grid, Text, Card } from '@nextui-org/react';
  import css from './VideoContainer.module.css'
  import YoutubeVideo from '../VideoPlayer';
  
  
  const VideoContainer = () => {
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
    <Grid.Container className={css.videoContainer} justify="center">
      <Grid s={6}>     
      <div>
        <YoutubeVideo />
        </div>

        </Grid>
      
  </Grid.Container>
  ) }

  export default VideoContainer;