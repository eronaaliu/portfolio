import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbAWS from '../public/images/aws.png'
import thumbUL from '../public/images/UL.png'

const Posts = () => (
    <Container>
        <Heading as='h3' fontSize={20} mb={4}>
            Blog Posts
        </Heading>
        <SimpleGrid columns={[1,1,2]} gap={6}>
            <Section>
                <WorkGridItem id='aws-internship' title='AWS Internship' thumbnail={thumbAWS}>
                    How I Studied For Interviews
                </WorkGridItem>
            </Section>
            <Section>
                <WorkGridItem id='uni-notes' title='University' thumbnail={thumbUL}>
                    How I Organised My University Notes
                </WorkGridItem>
            </Section>
        </SimpleGrid>
    </Container>

)

export default Posts;