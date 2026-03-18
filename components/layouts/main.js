import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'
import { keyframes } from '@emotion/react'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const floatGlow = keyframes`
  0% {
    transform: translate3d(0, 0, 0) scale(1);
  }
  50% {
    transform: translate3d(18px, -18px, 0) scale(1.08);
  }
  100% {
    transform: translate3d(-12px, 12px, 0) scale(0.98);
  }
`

const shimmer = keyframes`
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 240px 240px;
  }
`

const Main = ({ children, router }) => {
  return (
    <Box
      as="main"
      pb={8}
      position="relative"
      overflow="hidden"
      isolation="isolate"
    >
      <Box
        position="fixed"
        inset={0}
        zIndex={0}
        pointerEvents="none"
        bgGradient="linear(135deg, #0f1117 0%, #151824 45%, #101319 100%)"
      />
      <Box
        position="fixed"
        inset="-10%"
        zIndex={0}
        pointerEvents="none"
        opacity={0.75}
        bgImage="radial-gradient(circle at 20% 20%, rgba(61,122,237,0.28) 0, rgba(61,122,237,0) 30%), radial-gradient(circle at 80% 15%, rgba(255,99,195,0.18) 0, rgba(255,99,195,0) 28%), radial-gradient(circle at 70% 80%, rgba(136,204,202,0.16) 0, rgba(136,204,202,0) 24%)"
        filter="blur(36px)"
        animation={`${floatGlow} 18s ease-in-out infinite`}
      />
      <Box
        position="fixed"
        inset={0}
        zIndex={0}
        pointerEvents="none"
        opacity={0.18}
        bgImage="linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)"
        bgSize="48px 48px"
        animation={`${shimmer} 24s linear infinite`}
      />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="CK's homepage" />
        <meta name="author" content="陈 肯" />
        <meta property="og:site_name" content="陈 肯" />
        <meta name="og:title" content="陈 肯" />
        <meta property="og:type" content="website" />
        <title>陈 肯 - Homepage</title>
      </Head>

      <Box position="relative" zIndex={1}>
        <NavBar path={router.asPath} />

        <Container maxW="container.md" pt={14}>
        <LazyVoxelDog />

        {children}

        <Footer />
        </Container>
      </Box>
    </Box>
  )
}

export default Main
