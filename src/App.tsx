import { MantineProvider, createTheme } from '@mantine/core'
import Index from './Index'

import '@mantine/core/styles.css'

const theme = createTheme({
  fontFamily: 'Open Sans, sans-serif',
  primaryColor: 'cyan',
  defaultRadius: 'md',
})

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Index />
    </MantineProvider>
  )
}
