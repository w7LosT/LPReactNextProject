import P from 'prop-types';
import * as Styled from './styles';
import { ArrowCircleUp } from '@styled-icons/material-outlined/ArrowCircleUp';

export const GoTop = () => {
  return (
    <Styled.Container href="#" aria-label='Go to top' title='Go to top'>
        <ArrowCircleUp />
    </Styled.Container>
  )
}
