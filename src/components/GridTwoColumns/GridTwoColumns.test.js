import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { GridTwoColumns } from '.';

const mock = {
  title: 'GridTwoColumns',
  text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores veniam ducimus praesentium dolore laborum hic. At, tenetur vitae necessitatibus pariatur corrupti praesentium sit perspiciatis, eveniet repellendus possimus dicta labore consequatur.',
  imgSrc: 'assets/images/html_css_js.svg',
  background: false,
}

describe('<GridTwoColumns />', () => {
  it('should render', () => {
    const {container} = renderTheme(<GridTwoColumns {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
