import {
  AiFillGithub,
  AiOutlineGlobal,
  AiFillLinkedin,
  AiFillInstagram,
} from 'react-icons/ai'
import { Container, Flex, Button, rem } from '@mantine/core'
import Logo from './components/Logo'
import './Index.css'

export default function Index() {
  return (
    <Container maw={{ base: rem('400px'), sm: rem('500px') }}>
      <Logo />
      <Flex
        justify="center"
        direction="column"
        gap="md"
      >
        <Button
          color="#3a58ac"
          leftSection={<AiFillGithub />}
          component="a"
          href="https://github.com/FernandoLorca"
          target="_blank"
        >
          Github
        </Button>
        <Button
          color="#3a58ac"
          leftSection={<AiOutlineGlobal />}
          component="a"
          href="https://fernando-lorca.netlify.app/"
          target="_blank"
        >
          Sitio web
        </Button>
        <Button
          color="#d13667"
          component="a"
          href="https://www.linkedin.com/in/fernandolorcapinto/"
          target="_blank"
          leftSection={<AiFillLinkedin />}
        >
          Linkedin
        </Button>
        <Button
          color="#3a58ac"
          leftSection={<AiFillInstagram />}
          component="a"
          href="https://www.instagram.com/type.fernandolorca/"
          target="_blank"
        >
          Instagram
        </Button>
      </Flex>
    </Container>
  )
}
