import P from 'prop-types';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { Text } from '../TextComponent';
import * as Styled from './styles';

export const GridContent = ({title, html, background = false, sectionId = ''}) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container background={background}>
        <Heading>
          {title}
        </Heading>
        <Styled.Html>
          <Text>
            {html}
          </Text>
        </Styled.Html>
      </Styled.Container>
    </SectionBackground>
  )
}

GridContent.propTypes = {
  title: P.string.isRequired,
  html: P.string.isRequired,
  background: P.bool,
  sectionId: P.string,
}
