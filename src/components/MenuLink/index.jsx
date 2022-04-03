import P from 'prop-types';
import * as Styled from './styles';

export const MenuLink = ({children, link, newTab = false, role = 'link'}) => {
  return (
    <Styled.Container role={role} href={link} target={newTab ? '_blank' : '_self'}>
      {children}
    </Styled.Container>
  )
}

MenuLink.propTypes = {
  children: P.node.isRequired,
  link: P.string.isRequired,
  newTab: P.bool,
  role: P.string,
}
