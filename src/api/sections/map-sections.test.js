import { mapSectionTwoColumns, mapSectionContent, mapTextGrid, mapImageGrid } from "./map-sections";

describe("map-sections", () => {
  it("should map section two columns", () => {
    const data = mapSectionTwoColumns();
    expect(data.background).toBe(false)
    expect(data.component).toBe('')
    expect(data.sectionId).toBe('')
    expect(data.srcImg).toBe('')
    expect(data.text).toBe('')
    expect(data.title).toBe('')
  });

  it("should map section two columns api data", () => {
    const data = mapSectionTwoColumns(
      {
        "id": 3,
        "__component": "section.section-twocolumns",
        "title": "JANUARY BRINGS US FIREFOX 85",
        "description": "Description of section...",
        "image": {
          "data": {
            "id": 7,
            "attributes": {
              "name": "react-course-lp.svg",
              "alternativeText": "react-course-lp.svg",
              "caption": "react-course-lp.svg",
              "width": 1030,
              "height": 730,
              "formats": null,
              "hash": "react_course_lp_14318837cc",
              "ext": ".svg",
              "mime": "image/svg+xml",
              "size": 36.73,
              "url": "/uploads/react_course_lp_14318837cc.svg",
              "previewUrl": null,
              "provider": "local",
              "provider_metadata": null,
              "createdAt": "2021-12-19T19:01:09.151Z",
              "updatedAt": "2021-12-19T19:01:09.151Z"
            }
          }
        },
        "metadata": {
          "id": 8,
          "name": "Contact",
          "section_id": "contact",
          "has_background": true
        }
      }
    );
    expect(data.background).toBe(true)
    expect(data.component).toBe('section.section-twocolumns')
    expect(data.sectionId).toBe('contact')
    expect(data.srcImg).toBe('/uploads/react_course_lp_14318837cc.svg')
    expect(data.text).toBe('Description of section...')
    expect(data.title).toBe('JANUARY BRINGS US FIREFOX 85')
  });

  it("should map section content with predef data", () => {
    const data = mapSectionContent();
    expect(data.background).toBe(false)
    expect(data.component).toBe('')
    expect(data.sectionId).toBe('')
    expect(data.html).toBe('')
    expect(data.title).toBe('')
  });

  it("should map section content with api data", () => {
    const data = mapSectionContent(
      {
        "id": 3,
        "__component": "section.section-content",
        "title": "PRICING",
        "content": "<p>Hello, World!</p>",
        "metadata": {
          "id": 7,
          "name": "Pricing",
          "section_id": "pricing",
          "has_background": false
        }
      },
    );
    expect(data.background).toBe(false)
    expect(data.component).toBe('section.section-content')
    expect(data.sectionId).toBe('pricing')
    expect(data.html).toBe('<p>Hello, World!</p>')
    expect(data.title).toBe('PRICING')
  });

  it("should map section grid text with predef data", () => {
    const data = mapTextGrid();
    expect(data.background).toBe(false)
    expect(data.component).toBe('section.section-grid-text')
    expect(data.sectionId).toBe('')
    expect(data.description).toBe('')
    expect(data.title).toBe('')
  });

  it("should map section grid text with api data", () => {
    const data = mapTextGrid(
      {
        "id": 2,
        "__component": "section.section-grid",
        "title": "MY GRID",
        "description": "Uma breve descrição.",
        "image_grid": [

        ],
        "text_grid": [
          {
            "id": 3,
            "title": "Teste 1",
            "description": "abc"
          },
          {
            "id": 4,
            "title": "Teste 2",
            "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores."
          },
          {
            "id": 5,
            "title": "Teste ",
            "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores."
          }
        ],
        "metadata": {
          "id": 6,
          "name": "Grid One",
          "section_id": "grid-one",
          "has_background": true
        }
      },
    );
    expect(data.background).toBe(true)
    expect(data.component).toBe('section.section-grid-text')
    expect(data.sectionId).toBe('grid-one')
    expect(data.description).toBe('Uma breve descrição.')
    expect(data.title).toBe('MY GRID')
    expect(data.grid[0].title).toBe('Teste 1')
    expect(data.grid[0].description).toBe('abc')
  });

  it("should map section grid image with predef data", () => {
    const data = mapImageGrid();
    expect(data.background).toBe(false)
    expect(data.component).toBe('section.section-grid-image')
    expect(data.sectionId).toBe('')
    expect(data.description).toBe('')
    expect(data.title).toBe('')
  });

  it("should map section grid image with api data", () => {
    const data = mapImageGrid(
      {
        "id": 4,
        "__component": "section.section-grid",
        "title": "GALLERY",
        "description": "Uma breve descrição.",
        "image_grid": [
          {
            "image": {
              "data": {
                "id": 8,
                "attributes": {
                  "name": "react-course-img-gallery.jpg",
                  "alternativeText": "react-course-img-gallery.jpg",
                  "caption": "react-course-img-gallery.jpg",
                  "width": 360,
                  "height": 360,
                  "formats": {
                    "thumbnail": {
                      "name": "thumbnail_react-course-img-gallery.jpg",
                      "hash": "thumbnail_react_course_img_gallery_2bff678b4b",
                      "ext": ".jpg",
                      "mime": "image/jpeg",
                      "width": 156,
                      "height": 156,
                      "size": 4.13,
                      "path": null,
                      "url": "/uploads/thumbnail_react_course_img_gallery_2bff678b4b.jpg"
                    }
                  },
                  "hash": "react_course_img_gallery_2bff678b4b",
                  "ext": ".jpg",
                  "mime": "image/jpeg",
                  "size": 24.5,
                  "url": "/uploads/react_course_img_gallery_2bff678b4b.jpg",
                  "previewUrl": null,
                  "provider": "local",
                  "provider_metadata": null,
                  "createdAt": "2021-12-19T19:07:28.637Z",
                  "updatedAt": "2021-12-19T19:07:28.637Z"
                }
              }
            }
          },
        ],
        "text_grid": [

        ],
        "metadata": {
          "id": 10,
          "name": "Gallery",
          "section_id": "gallery",
          "has_background": false
        }
      },
    );
    expect(data.background).toBe(false)
    expect(data.component).toBe('section.section-grid-image')
    expect(data.sectionId).toBe('gallery')
    expect(data.description).toBe('Uma breve descrição.')
    expect(data.title).toBe('GALLERY')
    expect(data.grid[0].srcImg).toBe('/uploads/react_course_img_gallery_2bff678b4b.jpg')
    expect(data.grid[0].altText).toBe('react-course-img-gallery.jpg')
  });

});
