import linksMock from '../../components/NavLinks/mock';
import gridMock from '../../components/GridSection/mock';
import {GridSection} from '../../components/GridSection';

export const mockBase = {
  children: (
    <>
      <GridSection {...gridMock}/>
      <GridSection {...gridMock} background={true}/>
    </>
  ),
  links: linksMock,
  logoData: {
    text: 'Logo',
    link: '#',
  },
  footerHtml: '<p>Teste Footer</p>',
}
