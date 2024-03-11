// import NextLink from 'next/link'
import {
  // Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  // Button,
  // List,
  // ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
// import { ChevronRightIcon } from '@chakra-ui/icons'
// import Paragraph from '../components/paragraph'
// import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem, NotesAccordion } from '../components/grid-item'
// import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import thumbBrainWash from '../public/images/games/brainwash.png'
import thumbCrashLoad from '../public/images/games/crashload.png'
import thumbDipPuzzle from '../public/images/games/dippuzzle.png'
import thumbStar from '../public/images/games/star.png'
import thumbQuadTree from '../public/images/games/quadtree.png'
import thumb3dshader from '../public/images/games/3dshader.png'
import thumb2dshader from '../public/images/games/2dshader.png'
import thumbConvexHull from '../public/images/games/convexhull.png'
import thumbRamerDouglasPeucker from '../public/images/games/Ramer-Douglas-Peucker.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        嗨, 欢迎. 这是我的一些个人作品展示
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            陈 肯
          </Heading>
          <p>3D 前端工程师</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/takuya.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      {/* <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>

        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section> */}

      {/* <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1984</BioYear>
          Born in Osaka (大阪), Japan.
        </BioSection>
        <BioSection>
          <BioYear>2010</BioYear>
          Completed the Master&apos;s Program in the Graduate School of
          Information Science at Nara Institute of Science and Technology
          (奈良先端科学技術大学院大学情報科学研究科修士課程)
        </BioSection>
        <BioSection>
          <BioYear>2010</BioYear>
          Worked at Yahoo! Japan (ヤフー株式会社入社)
        </BioSection>
        <BioSection>
          <BioYear>2012 to present</BioYear>
          Working as a freelancer
        </BioSection>
      </Section> */}

      {/* <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music,{' '}
          <Link href="https://illust.odoruinu.net/" target="_blank">
            Drawing
          </Link>
          , Playing Drums,{' '}
          <Link href="https://500px.com/p/craftzdog" target="_blank">
            Photography
          </Link>
          , Leica, Machine Learning
        </Paragraph>
      </Section> */}

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          2D 游戏
        </Heading>
        {/* <List>
          <ListItem>
            <Link href="https://github.com/craftzdog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @craftzdog
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/inkdrop_app" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @inkdrop_app (English)
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/craftzdog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @craftzdog (日本語)
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/craftzdog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @craftzdog
              </Button>
            </Link>
          </ListItem>
        </List> */}

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="http://oss.mikeken.online/brainwash/web-mobile/index.html"
            title="脑洞太大了吧"
            thumbnail={thumbBrainWash}
          >
            益智解谜类
          </GridItem>
          <GridItem
            href="http://oss.mikeken.online/popstar/web-mobile/index.html"
            title="天天玩消星星"
            thumbnail={thumbStar}
          >
            消除类
          </GridItem>

        </SimpleGrid>

        {/* <Box align="center" my={4}>
          <NextLink href="/posts" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box> */}
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          3D 游戏
        </Heading>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="http://oss.mikeken.online/crashload/web-mobile/index.html"
            title="紧急迫降"
            thumbnail={thumbCrashLoad}
          >
            飞行类
          </GridItem>
          <GridItem
            href="http://oss.mikeken.online/dippuzzle/web-mobile/index.html"
            title="蘸色小能手"
            thumbnail={thumbDipPuzzle}
          >
            休闲益智类
          </GridItem>
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          渲染
        </Heading>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="http://oss.mikeken.online/shader/web-desktop/index.html"
            title="2D shader(电脑打开)"
            thumbnail={thumb2dshader}
          >
            常见的一些 2D shader
          </GridItem>
          <GridItem
            href="http://oss.mikeken.online/blinn-phong/web-desktop/index.html"
            title="3D shader(电脑打开)"
            thumbnail={thumb3dshader}
          >
            法线着色, blinn-phong模型, 纹理映射
          </GridItem>

        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          其他
        </Heading>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="http://oss.mikeken.online/quadTree/web-mobile/index.html"
            title="四叉树"
            thumbnail={thumbQuadTree}
          >
            用于优化碰撞检测的一种数据结构
          </GridItem>
          <GridItem
            href="http://oss.mikeken.online/convexHull/web-mobile/index.html"
            title="凸包"
            thumbnail={thumbConvexHull}
          >
            用于获取一堆点组成的的凸多边形
          </GridItem>
          <GridItem
            href="http://oss.mikeken.online/Ramer-Douglas-Peucker/web-mobile/index.html"
            title="Ramer-Douglas-Peucker"
            thumbnail={thumbRamerDouglasPeucker}
          >
            在一定的阈值范围内简化曲线上的点的算法
          </GridItem>
        </SimpleGrid>
      </Section>




      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          学习笔记
        </Heading>
        <NotesAccordion noteGroups={noteGroups}
        ></NotesAccordion>
        <SimpleGrid columns={[1]} gap={6}>



        </SimpleGrid>
      </Section>
    </Container>
  </Layout >
)

export default Home
export { getServerSideProps } from '../components/chakra'
const noteGroups = [
  {
    id: 1,
    title: '图形学中的数学',
    notes: [
      {
        id: 1,
        title: '图形学中的几何',
        href: 'http://oss.mikeken.online/notes/数学/几何.html',
        content: "几何是图形学的理论基础, 图形学是几何在计算机领域的实践应用",
        date: '2022-06-1',
        tags: ['数学', '几何', "平面", "三角"],
      },
      {
        id: 2,
        title: '数学基础之向量',
        href: 'http://oss.mikeken.online/notes/数学/向量.html',
        content: '向量是图形中最重要的数学基础',
        date: '2022-05-18',
        tags: ['数学', '向量'],
      },
      {
        id: 3,
        title: '四元数与旋转',
        href: 'http://oss.mikeken.online/notes/数学/四元数.html',
        content: '四元数是图形学中广泛应用的旋转方式',
        date: '2022-04-20',
        tags: ['数学', '四元数', '旋转'],
      },
      {
        id: 4,
        title: '常见坐标系',
        href: 'http://oss.mikeken.online/notes/数学/坐标系.html',
        date: '2022-04-15',
        tags: ['数学', '坐标系'],
      },
      {
        id: 5,
        title: '复数与旋转',
        href: 'http://oss.mikeken.online/notes/数学/复数和旋转.html',
        date: '2022-04-2',
        tags: ['数学', '旋转'],
      }, {
        id: 6,
        title: '导数',
        href: 'http://oss.mikeken.online/notes/数学/导数.html',
        date: '2022-03-20',
        tags: ['数学', '导数'],
      }, {
        id: 7,
        title: '曲线和曲面',
        href: 'http://oss.mikeken.online/notes/数学/曲线和曲面.html',
        content: '曲线和曲面是构建逼真、平滑的动画基础',
        date: '2022-03-11',
        tags: ['数学', '曲线', '曲面'],
      },
      {
        id: 8,
        title: '概率论',
        href: 'http://oss.mikeken.online/notes/数学/概率论.html',
        date: '2022-03-01',
        tags: ['数学', '概率论'],
      },
      {
        id: 9,
        title: '矩阵',
        href: 'http://oss.mikeken.online/notes/数学/矩阵.html',
        date: '2022-2-18',
        content: '在图形学中, 矩阵用来表示和变换图形对象的位置、方向等属性',
        tags: ['数学', '矩阵', '变换'],
      }, {
        id: 10,
        title: '积分',
        href: 'http://oss.mikeken.online/notes/数学/积分.html',
        date: '2022-2-18',
        content: '积分主要用于真实的光照计算',
        tags: ['数学', '积分'],
      },
    ],
  },
]