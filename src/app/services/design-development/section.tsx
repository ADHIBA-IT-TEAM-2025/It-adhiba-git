import {
  chakra,
  useStyleConfig,
  omitThemingProps,
  Container,
  ThemingProps,
  StyleProps,
  HTMLChakraProps,
} from '@chakra-ui/react'

export interface SectionProps
  extends HTMLChakraProps<'div'>,
    ThemingProps<'Section'> {
  children: React.ReactNode
  innerWidth?: StyleProps['width']
}

export const Section: React.FC<SectionProps> = (props) => {
  const { children, innerWidth = 'container.lg', className, ...rest } = props
  const styles = useStyleConfig('Section', rest)

  const ownProps = omitThemingProps(rest)

  return (
    <chakra.div __css={styles} {...ownProps}>
      <Container height="full" maxW={innerWidth}>
        {children}
      </Container>
    </chakra.div>
  )
}

import {
  VStack,
  Heading,
  Box,
  StackProps,
  useMultiStyleConfig,
} from '@chakra-ui/react'

export interface SectionTitleProps extends Omit<StackProps, 'title'> {
  title: React.ReactNode
  description?: React.ReactNode
  align?: 'left' | 'center'
  variant?: string
}

export const SectionTitle: React.FC<SectionTitleProps> = (props) => {
  const { title, description, align, variant, ...rest } = props
  const styles = useMultiStyleConfig('SectionTitle', { variant })

  return (
    <VStack
      sx={styles.wrapper}
      alignItems={align === 'left' ? 'flex-start' : 'center'}
      spacing={4}
      {...rest}
    >
      <Heading sx={styles.title} as="h2">
        {title}
      </Heading>
      {description && (
        <Box sx={styles.description} textAlign={align}>
          {description}
        </Box>
      )}
    </VStack>
  )
}
