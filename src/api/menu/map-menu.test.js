import { mapData, mapMenuLinks } from './map-menu';

describe("map-data", () => {
  it("should return a predef menu if there is no data", () => {
    const menu = mapData();
    expect(menu.text).toBe('');
    expect(menu.srcImg).toBe('');
  });

  it("should map menu to match keys and values required", () => {
    const menu = mapData({
      "logo_text": "LOGO",
      "menu_link": [
        {
          "link_text": "INTRO",
          "url": "#intro"
        },
        {
          "link_text": "GRID ONE",
          "url": "#grid-one"
        },
        {
          "link_text": "GALLERY",
          "url": "#gallery"
        },
        {
          "link_text": "GRID TWO",
          "url": "#grid-two"
        },
        {
          "link_text": "PRINCING",
          "url": "#pricing"
        },
        {
          "link_text": "CONTACT",
          "url": "#contact"
        }
      ],
      "logo": {
        "data": null
      }
    });
    expect(menu.text).toBe('LOGO');
    expect(menu.srcImg).toBe('');
    expect(menu.links[0].children).toBe('INTRO');
    expect(menu.links[0].link).toBe('#intro');
  });

  it("should return an empty array if there are no links", () => {
    const links = mapMenuLinks();
    expect(links).toEqual([]);
  });

  it("should map links if there are links", () => {
    const links = mapMenuLinks([
      {
        "link_text": "INTRO",
        "url": "#intro"
      },
      {
        "link_text": "GRID ONE",
        "url": "#grid-one"
      },
      {
        "link_text": "GALLERY",
        "url": "#gallery"
      },
      {
        "link_text": "GRID TWO",
        "url": "#grid-two"
      },
      {
        "link_text": "PRINCING",
        "url": "#pricing"
      },
      {
        "link_text": "CONTACT",
        "url": "#contact"
      }
    ]);
    expect(links[0].children).toBe('INTRO');
    expect(links[0].link).toBe('#intro');
  });
});
