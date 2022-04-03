import * as Styled from './styles';
import { Heading } from '../../components/Heading';
import { Text } from '../../components/TextComponent';
import {Base} from '../Base';
import { mockBase } from '../Base/mock';
import { useEffect, useState } from 'react';
import { mapData } from '../../api/general/map-data';
import { PageNotFound } from '../PageNotFound';
import { Loading } from '../Loading';
import { GridTwoColumns } from '../../components/GridTwoColumns';
import { GridContent } from '../../components/GridContent';
import { GridImage } from '../../components/GridImage';
import { GridSection } from '../../components/GridSection';
import P from 'prop-types';

function App({ pageData = null }) {
    const data = pageData[0];
//   const [data, setData] = useState([]);
//   const [errorMessage, setErrorMessage] = useState('');

//   useEffect(() => {
//     const load = async () => {
//       try{
//         const data = await fetch('http://localhost:1337/api/pages/?populate=*');
//         const json = await data.json();
//         const processedData = [json.data[0].attributes];
//         const pageData = mapData(processedData);
//         setData(pageData[0]);
//         // console.log(pageData[0]);
//         document.title = 'Landing Page';

//       } catch (e){
//         setData(undefined);
//         setErrorMessage(e.message);
//       }
//     }

//     load();
//   }, []);

//   if(data === undefined){
//     return <PageNotFound errorMessage={errorMessage}/>
//   }

//   if(data && !data.slug){
//     return <Loading />
//   }

  const { menu, sections, footerHtml, slug } = data;
  const { logo_text: text } = menu;
  const { url: image } = menu.logo.data.attributes;
  const links = menu.menu_link.map((link) => {
    link.children = link.link_text;
    link.link = link.url
    return link;
  });
  const link = 'http://localhost:3000/';

  // console.log(menu)

  return <Base links={links} footerHtml={footerHtml} logoData={{ text, image, link }}>
    {
      sections.map((section, index) => {
        const { __component: component } = section;
        const key = `${slug}-${index}`;
        section.background = section.metadata.has_background;
        section.sectionId = section.metadata.section_id;
        console.log(section);
        if(component === 'section.section-twocolumns'){
          section.text = section.description;
          section.imgSrc = section.image.data.attributes.url;
          return <GridTwoColumns key={key} {...section} />;
        }

        if(component === 'section.section-content'){
          section.html = section.content;
          return <GridContent key={key} {...section} />;
        }

        if(component === 'section.section-grid'){
          if(section.image_grid.length > 0){
            section.grid = section.image_grid.map((image) => {
              image.altText = image.image.data.attributes.alternativeText;
              image.srcImg = image.image.data.attributes.url;
              console.log(image)
              return image;
            });
            return <GridImage key={key} {...section} />;
          } else {
            section.grid = section.text_grid;
            return <GridSection key={key} {...section} />;
          }
        }
      })
    }
  </Base>;
}

export default App;

App.propTypes = {
    pageData: P.array
}
