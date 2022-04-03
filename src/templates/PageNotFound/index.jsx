import P from 'prop-types';
import { GridContent } from '../../components/GridContent';

export const PageNotFound = ({errorMessage}) => {
  return (
    <GridContent title='Erro 404' html={'<p>A página que você tentou acessar não foi encontrada.</p><p>'+ errorMessage +'</p>'} />
  )
}

PageNotFound.propTypes = {
  errorMessage: P.string.isRequired,
};
