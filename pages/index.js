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
// export { getServerSideProps } from '../components/chakra'
const noteGroups = [
  {
    id: 1,
    title: '图形学之数学',
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
        tags: ['数学', '曲线', '曲面', '贝塞尔'],
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
        date: '2022-1-11',
        content: '积分主要用于真实的光照计算',
        tags: ['数学', '积分'],
      }, {
        id: 11,
        title: '求根',
        href: 'http://oss.mikeken.online/notes/数学/求根.html',
        content: '求根是一项重要的数学工具',
        date: '2022-1-01',
        tags: ['数学', '求根'],
      },
      {
        id: 12,
        title: '常见变换',
        href: 'http://oss.mikeken.online/notes/数学/变换.html',
        date: '2021-12-23',
        tags: ['数学', '变换'],
      }, {
        id: 13,
        title: '罗德里格斯旋转公式 (任意轴旋转)',
        href: 'http://oss.mikeken.online/notes/数学/罗德里格斯旋转公式 (任意轴旋转).html',
        date: '2021-12-23',
        tags: ['数学', '旋转'],
      }, {
        id: 14,
        title: '凸包算法',
        href: 'http://oss.mikeken.online/notes/数学/凸包算法.html',
        content: '找出一个点集合的最小凸多边形',
        date: '2021-12-20',
        tags: ['数学', '算法'],
      },
      {
        id: 15,
        title: '减少点算法',
        href: 'http://oss.mikeken.online/notes/数学/减少点算法.html',
        date: '2021-12-7',
        tags: ['数学', '算法'],
      },
      {
        id: 16,
        title: 'Bresenham_s line',
        href: 'http://oss.mikeken.online/notes/数学/Bresenham_s line.html',
        content: 'Bresenham 算法是一种简单的线段绘制算法',
        date: '2021-12-3',
        tags: ['数学', '算法'],
      },
    ],
  },
  {
    id: 2,
    title: '图形学之基础',
    notes: [
      {
        id: 1,
        title: '图形学中的色彩',
        href: 'http://oss.mikeken.online/notes/图形学基础/Color.html',
        content: "如何表达图形颜色?",
        date: '2021-12-01',
        tags: ['图形学', '色彩'],
      },
      {
        id: 2,
        title: '信号处理',
        href: 'http://oss.mikeken.online/notes/图形学基础/信号处理.html',
        date: '2021-11-28',
        tags: ['图形学', '信号处理'],
      },
      {
        id: 3,
        title: '图形学中的数据结构',
        href: 'http://oss.mikeken.online/notes/图形学基础/图形学中的数据结构.html',
        content: '总结了常见的图形学中的数据结构',
        date: '2021-11-22',
        tags: ['图形学', '数据结构'],
      },
      {
        id: 4,
        title: '纹理映射',
        href: 'http://oss.mikeken.online/notes/图形学基础/纹理映射.html',
        date: '2021-11-19',
        tags: ['图形学', '纹理映射', '阴影'],
      },
      {
        id: 5,
        title: '采样',
        href: 'http://oss.mikeken.online/notes/图形学基础/采样.html',
        date: '2021-11-15',
        content: '采样是图形学的基础',
        tags: ['图形学', '采样',],
      },
      {
        id: 6,
        title: '混合',
        href: 'http://oss.mikeken.online/notes/图形学基础/混合.html',
        date: '2021-11-14',
        content: '混合是将透明物体和别的物体颜色混合的一项技术',
        tags: ['图形学', '混合',],
      },
      {
        id: 7,
        title: 'Gamma 矫正',
        href: 'http://oss.mikeken.online/notes/图形学基础/Gamma 矫正.html',
        date: '2021-11-12',
        content: 'Gamma 矫正是正确显示色彩的一项技术',
        tags: ['图形学', 'Gamma 矫正',],
      },
      {
        id: 8,
        title: 'FrameBuffer',
        href: 'http://oss.mikeken.online/notes/图形学基础/FrameBuffer.html',
        date: '2021-11-08',
        tags: ['图形学', 'FrameBuffer',],
      },
      {
        id: 9,
        title: '可见性问题',
        href: 'http://oss.mikeken.online/notes/图形学基础/可见性问题.html',
        date: '2021-11-01',
        tags: ['图形学', '可见性问题', '画家算法'],
      },
      {
        id: 10,
        title: '着色',
        href: 'http://oss.mikeken.online/notes/图形学基础/着色.html',
        content: '如何正确的计算物体表面颜色?',
        date: '2021-11-01',
        tags: ['图形学', '着色', '环境光', '漫反射', 'blinn-phong模型'],
      },
      {
        id: 11,
        title: 'OpenGL',
        href: 'http://oss.mikeken.online/notes/图形学基础/OpenGL.html',
        date: '2021-10-22',
        tags: ['图形学', 'OpenGL', '图形管线'],
      },
      {
        id: 12,
        title: '变换',
        href: 'http://oss.mikeken.online/notes/图形学基础/变换.html',
        date: '2021-10-16',
        tags: ['图形学', '变换', 'MVP变换', '视图变换', '投影变换'],
      },
      {
        id: 12,
        title: '模版测试',
        href: 'http://oss.mikeken.online/notes/图形学基础/模版测试.html',
        date: '2021-10-10',
        content: '额外的缓冲区来操控像素',
        tags: ['图形学', '模版测试'],
      },

    ],
  }, {
    id: 3,
    title: '图形学之离线光线追踪',
    notes: [
      {
        id: 1,
        title: '光线追踪介绍',
        href: 'http://oss.mikeken.online/notes/图形学基础/光线追踪介绍.html',
        date: '2021-09-28',
        tags: ['图形学', '光线追踪介绍'],
      },
      {
        id: 2,
        title: '反射折射与菲涅耳',
        href: 'http://oss.mikeken.online/notes/图形学基础/反射折射与菲涅耳.html',
        date: '2021-09-22',
        tags: ['图形学', '离线光线追踪', '反射', '折射', '菲涅耳'],
      },
      {
        id: 3,
        title: '相机射线',
        href: 'http://oss.mikeken.online/notes/图形学基础/相机射线.html',
        date: '2021-09-11',
        tags: ['图形学', '相机射线'],
      },
      {
        id: 4,
        title: 'Whitted-Style Ray Tracing',
        href: 'http://oss.mikeken.online/notes/图形学基础/Whitted-Style Ray Tracing.html',
        date: '2021-09-02',
        tags: ['图形学', 'Whitted-Style Ray Tracing'],
      },
      {
        id: 5,
        title: '路径追踪',
        href: 'http://oss.mikeken.online/notes/图形学基础/路径追踪.html',
        date: '2021-08-27',
        tags: ['图形学', '路径追踪',],
      },


    ],
  }, {
    id: 3,
    title: '其他',
    notes: [
      {
        id: 1,
        title: '杂项',
        href: 'http://oss.mikeken.online/notes/杂项.html',
        date: '2022-03-28',
        tags: ['数学', '三角', '各向异性',],
      },
      {
        id: 2,
        title: '物理相关',
        href: 'http://oss.mikeken.online/notes/物理.html',
        date: '2022-04-01',
        tags: ['图形学', '力'],
      },
    ],
  },
]