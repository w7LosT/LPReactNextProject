import P from 'prop-types';
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { Text } from '../TextComponent';

export const GridImage = ({title, description, grid, background = false, sectionId = ''}) => {
  return (
    <SectionBackground background={background} as='h2' sectionId={sectionId}>
      <Styled.Container>
        <Heading titleCase='uppercase'>
          {title}
        </Heading>
        <Text>
          {description}
        </Text>
        <Styled.Grid>
          {grid.map(element => (
            <Styled.GridElement key={`${element.srcImg}-${element.id}`}>
              <Styled.Image src={`http://localhost:1337${element.srcImg}`} alt={element.altText} />
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  )
}

GridImage.propTypes = {
  title: P.string.isRequired,
  description: P.string.isRequired,
  grid: P.arrayOf(P.shape({
    altText: P.string.isRequired,
    srcImg: P.string.isRequired,
  })).isRequired,
  background: P.bool,
  sectionId: P.string,
}
