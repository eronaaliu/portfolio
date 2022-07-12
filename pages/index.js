import NextLink from 'next/link'
import { Container, Box, Heading, Image, useColorModeValue, Link, Button } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/Bio'
import { UniversityBioSection, UniversityBioYear } from '../components/UniversityBio'

const Page = () => {
  return (
  <Layout>
    <Container maxW='2xl'>
      <Box 
        borderRadius="lg" 
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} 
        p={3} 
        mb={6} 
        textAlign="center"
        css={{backdropFilter:'blur(10px)'}}>
        Hello, I'm a graduate software engineer based in Ireland!
      </Box>

      <Box display={{md: 'flex'}}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Erona Aliu
          </Heading>
          <p> Software Engineer (Artist / Developer) </p>
        </Box>
        <Box 
          flexShrink={0} 
          mt={{ base: 4, md: 0}} 
          ml={{ md: 6 }} 
          textAlign='center'>
          <Image 
            borderColor='whiteAlpha.800' 
            borderWidth={2} 
            borderStyle='solid' 
            w='100px' 
            h='100px' 
            display='inline-block' 
            borderRadius='full' 
            src='/images/portfolio_pic_3.jpg' 
            alt='Profile Image'/>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as='h3' variant='section-title'>
          Work
        </Heading>
        <Paragraph>
          I am a recent graduate from the University of Limerick with a 1:1 honours degree in Computer Science. I am currently finding my path in Computer Science through personal projects and reading popular books in the area.
          I am currently working on a top down pixel art game called{' '}
          <NextLink href="/works/gym" passHref scroll={false}>
              <Link>Gym: The Game</Link>
            </NextLink>
            .
        </Paragraph>

        <Box align='center' my={4}>
          <NextLink href='/works' passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme='teal'>
              My Portfolio
            </Button>
          </NextLink>
        </Box>

      </Section>

      <Section delay={0.2}>
        <Heading as='h3' variant='section-title'>
          Bio
        </Heading>

        <BioSection>
        <BioYear>2000</BioYear>
        Born in Co. Kerry, Ireland
        </BioSection>

        <BioSection>
        <BioYear>2022</BioYear>
        Completed a four year BSc in Computer Science in the University of Limerick, Ireland
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as='h3' variant='section-title'>
        University
        </Heading>

        <UniversityBioSection>
        <UniversityBioYear>January 2021</UniversityBioYear>
        Completed an eight month internship at ACI Worldwide
        </UniversityBioSection>

        <UniversityBioSection>
        <UniversityBioYear>September 2021</UniversityBioYear>
        Completed a five month internship at Amazon Web Services 
        </UniversityBioSection>
      </Section>

      <Section delay={0.4}>
        <Heading as='h3' variant='section-title'>
          I ♥
        </Heading>
          Art, Music, Machine Learning, Video Games, Unity
      </Section>
      
    </Container>
  </Layout>
  )
}

export default Page
