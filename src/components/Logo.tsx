import { Flex, Image, rem } from '@mantine/core'

export default function Logo() {
  return (
    <Flex
      justify="center"
      py="xl"
      maw={{ base: rem('400px'), sm: rem('500px') }}
    >
      <div className="bg-animation">
        <Image
          w={{ base: rem('100px'), sm: rem('150px') }}
          radius="md"
          src="/logo.svg"
        />
      </div>
    </Flex>
  )
}
