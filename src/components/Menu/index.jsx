import P from 'prop-types';
import * as Styled from './styles';
import { NavLinks } from '../NavLinks';
import { LogoLink } from '../LogoLink';
import { SectionComponent } from '../SectionComponent';
import { Menu as Burger } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import { useState } from 'react';

export const Menu = ({links = [], logoData}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Styled.BurgerButton visible={isMenuOpen} onClick={() => setIsMenuOpen(true)} aria-label="Open/Close Menu">
        { isMenuOpen ? <CloseIcon aria-label='Close Menu'/> : <Burger aria-label='Open Menu'/>}
      </Styled.BurgerButton>
      <Styled.Container visible={isMenuOpen} onClick={() => setIsMenuOpen(false)}>
        <SectionComponent>
          <Styled.MenuContainer>
            <LogoLink {...logoData}/>
            <NavLinks links={links}/>
          </Styled.MenuContainer>
        </SectionComponent>
      </Styled.Container>
    </>
  )
}

Menu.propTypes = {
  ...NavLinks.propTypes,
  logoData: P.shape(LogoLink.propTypes).isRequired,
}
