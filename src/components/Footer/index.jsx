import P from 'prop-types';
import * as Styled from './styles';
import {Text} from '../TextComponent';
import { SectionComponent } from '../SectionComponent';

export const Footer = ({footerHtml}) => {
  return (
      <Styled.Container>
        <Text>
          {footerHtml}
        </Text>
      </Styled.Container>
  )
}

Footer.propTypes = {
  footerHtml: P.string.isRequired,
}
