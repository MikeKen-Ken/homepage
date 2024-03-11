import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, VStack, LinkBox, LinkOverlay, Heading, HStack, Tag } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'

export const NotesAccordion = ({ noteGroups }) => (
  <Accordion allowMultiple>
    {noteGroups.map((group) => (
      <AccordionItem key={group.id}>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              {group.title}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <VStack spacing={4} align="stretch">
            {group.notes.map((note) => (
              <LinkBox key={note.id} as="article"
                w="100%"
                p={4}
                borderWidth="1px"
                rounded="md"
                cursor="pointer"
                overflow="hidden"
                _hover={{
                  bg: 'gray.100',
                  '& *': {
                    color: 'gray.700',
                  },
                }}
              >
                <LinkOverlay href={note.href} target="_blank">
                  <Heading as="h3" size="md" mb={2} textAlign="left" color="blue.600">{note.title}</Heading>
                </LinkOverlay>
                <Text fontSize="sm" color="gray.600" textAlign="left" mb={2} noOfLines={2}>{note.content}</Text>
                <HStack spacing={2} wrap="wrap" justify="space-between">
                  <HStack spacing={2} wrap="wrap">
                    {note.tags && note.tags.length > 0 && (
                      note.tags.map((tag) => (
                        <Tag key={tag} size="sm" variant="outline" colorScheme="blue">{tag}</Tag>
                      ))
                    )}
                  </HStack>
                  <Text fontSize="xs" color="gray.500">{note.date}</Text>
                </HStack>
              </LinkBox>
            ))}
          </VStack>
        </AccordionPanel>
      </AccordionItem>
    ))}
  </Accordion>
)
export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const NotesTitle = ({ children, href, title, date, author, tags = [] }) => (
  <LinkBox as="article"
    w="100%"
    p={4}
    borderWidth="1px"
    rounded="md"
    cursor="pointer"
    overflow="hidden"
    _hover={{
      bg: 'gray.100',
      '& *': {
        color: 'gray.700',
      },
    }}
  >
    <LinkOverlay href={href} target="_blank">
      <Heading as="h3" size="md" mb={2} textAlign="left">{title}</Heading>
    </LinkOverlay>
    <HStack spacing={2} mb={2}>
      <Text fontSize="sm" color="gray.500">{date}</Text>
      <Text fontSize="sm" color="gray.500">{author}</Text>
    </HStack>
    <Text fontSize={14} textAlign="left" mb={2} noOfLines={2}>{children}</Text>
    {tags.length > 0 && (
      <HStack spacing={2}>
        {tags.map((tag) => (
          <Tag key={tag} size="sm" variant="outline" colorScheme="blue">{tag}</Tag>
        ))}
      </HStack>
    )}
  </LinkBox>
)

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <NextLink href={`/works/${id}`} passHref scroll={false}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
        />
        <LinkOverlay href={`/works/${id}`}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
)

