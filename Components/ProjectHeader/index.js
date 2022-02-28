import { Container, Row, Card, Text } from '@nextui-org/react';

const ProjectsHeader = () => {
      return (
<Container fluid>
  <Card color="white">
    <Row justify="center" align="center">
      <Text h6 size={15} color="black" css={{ m: 0 }}>
        Projects
      </Text>
    </Row>
  </Card>
</Container>
      )
    }

    export default ProjectsHeader;