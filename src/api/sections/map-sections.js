export const mapSections = (sections = []) => {
  return sections.map((section) => {
    if(section.__component === 'section.section-twocolumns'){
      return mapSectionTwoColumns(section);
    }

    if(section.__component === 'section.section-content'){
      return mapSectionContent(section);
    }

    if(section.__component === 'section.section-grid'){
      const { __component: { text_grid = [], image_grid = [] } = '' } = section;

      if(text_grid.length > 0){
        return mapTextGrid(section);
      }

      if(image_grid.length > 0){
        return mapImageGrid(section);
      }

      return mapSectionGrid(section);
    }

    return section;
  });
}

export const mapSectionTwoColumns = (section = {}) => {
  var srcImg = '';
  const {
    __component: component = '',
    title = '',
    description: text = '',
    metadata: { has_background: background = false, section_id: sectionId = '' } = false,
  } = section;

  if (Object.keys(section).length > 0){
    const {
      url: srcImage = '',
    } = section.image.data.attributes;
    srcImg = srcImage;
  } else {
    srcImg = '';
  }

  return {
    component,
    title,
    text,
    srcImg,
    background,
    sectionId,
  };
}

export const mapSectionContent= (section = {}) => {
  const {
    __component: component = '',
    title = '',
    content: html = '',
    metadata: { has_background: background = false, section_id: sectionId = '' } = false,
  } = section;

  return {
    component,
    title,
    html,
    background,
    sectionId,
  };
}

export const mapTextGrid = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description = '',
    metadata: { has_background: background = false, section_id: sectionId = '' } = false,
    text_grid: grid = [],
  } = section;

  return {
    component: 'section.section-grid-text',
    title,
    description,
    background,
    sectionId,
    grid,
  };
}

export const mapImageGrid = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description = '',
    metadata: { has_background: background = false, section_id: sectionId = '' } = false,
    image_grid: grid = [],
  } = section;

  return {
    component: 'section.section-grid-image',
    title,
    description,
    background,
    sectionId,
    grid: grid.map((image) => {
      const { alternativeText: altText = '', url: srcImg = '' } = Object.keys(image.image.data).length > 0 ? image.image.data.attributes : image;
      return {
        altText,
        srcImg
      }
    }),
  };
}
