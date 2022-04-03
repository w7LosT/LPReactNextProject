export const mapData = (menu = {}) => {
  // return pagesData.map((data) => {
  //   const {
  //     footer_text = '',
  //     slug = '',
  //     title = '',
  //     sections = [],
  //     menu = {}
  //   } = data;

  //   return{
  //     footerHtml: footer_text,
  //     slug: slug,
  //     title: title,
  //     sections: sections,
  //     menu: menu,
  //   };
  // });
  const {
    logo_text: text = '',
    logo: { url: srcImg = '' } = '',
    menu_link: links = []
  } = menu;
  return {
    text,
    srcImg,
    links: mapMenuLinks(links),
  }
};

export const mapMenuLinks  = (links = []) => {
  return links.map(item => {
    const { link_text: children = '', url: link= '' } = item;

    return {
      children,
      link,
    };
  });
};
