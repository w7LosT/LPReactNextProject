import P from 'prop-types';
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { Text } from '../TextComponent';

export const GridSection = ({title, description, grid, background = false}) => {
  return (
    <SectionBackground background={background}>
      <Styled.Container>
        <Heading titleCase='uppercase' colorDark={background}>
          {title}
        </Heading>
        <Text>
          {description}
        </Text>
        <Styled.Grid>
          {grid.map(element => (
            <Styled.GridElement key={element.title}>
              <Heading size='md' as="h3">
                {element.title}
              </Heading>
              <Text>
                {element.description}
              </Text>
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  )
}

GridSection.propTypes = {
  background: P.bool,
  title: P.string.isRequired,
  description: P.string.isRequired,
  grid: P.arrayOf(P.shape({
    title: P.string.isRequired,
    description: P.string.isRequired,
  })).isRequired,
}
