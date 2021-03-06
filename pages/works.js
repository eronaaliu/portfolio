import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbGym from '../public/images/toto_.png'
import Layout from '../components/layouts/article'

const Works = () => (
    <Layout>
        <Container>
            <Heading as='h3' fontSize={20} mb={4}>
                Works
            </Heading>
            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem id='gym' title='gym' thumbnail={thumbGym}>
                        A top down pixel art game
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    </Layout>
)

export default Works