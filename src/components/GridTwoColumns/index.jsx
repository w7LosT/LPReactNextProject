import P from 'prop-types';
import * as Styled from './styles';

import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { Text } from '../TextComponent';

export const GridTwoColumns = ({title, text, imgSrc, background = false, sectionId = ''}) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container background={background}>
        <Styled.TextContainer>
          <Heading titleCase='uppercase' as='h2'>
            {title}
          </Heading>
          <Text>
            {text}
          </Text>
        </Styled.TextContainer>
        <Styled.ImageContainer>
          <Styled.Image src={`http://localhost:1337${imgSrc}`} alt="Imagem"/>
        </Styled.ImageContainer>
      </Styled.Container>
    </SectionBackground>
  )
}

GridTwoColumns.propTypes = {
  title: P.string.isRequired,
  text: P.string.isRequired,
  imgSrc: P.string.isRequired,
  background: P.bool,
  sectionId: P.string,
}
