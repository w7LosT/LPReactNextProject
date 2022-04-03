import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { NavLinks } from '.';
import links from './mock';

describe('<NavLinks />', () => {
  it('should render', () => {
    renderTheme(<NavLinks links={links} />);
    expect(screen.getAllByRole('link')).toHaveLength(links.length);
  });

  it('should match snapshot', () => {
    renderTheme(<NavLinks links={links} />);
    expect(screen.getAllByRole('link')).toMatchSnapshot();
  });
});
