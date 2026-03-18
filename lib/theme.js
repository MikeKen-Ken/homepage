import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    'html, body, #__next': {
      minHeight: '100%'
    },
    body: {
      bg: mode('#f7f2ea', '#0f1117')(props),
      color: mode('#1a202c', '#edf2f7')(props),
      backgroundImage: mode(
        'linear-gradient(135deg, #f8f4ec 0%, #efe6d7 55%, #e9dfcc 100%)',
        'linear-gradient(135deg, #0f1117 0%, #151824 50%, #0f1117 100%)'
      )(props),
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat'
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#3d7aed', '#ff63c3')(props),
      textUnderlineOffset: 3
    })
  }
}

const fonts = {
  heading: "'LXGW WenKai', sans-serif",
  body: "'LXGW WenKai', sans-serif"
}

const colors = {
  grassTeal: '#88ccca'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme
