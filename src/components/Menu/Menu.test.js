import { fireEvent, screen } from "@testing-library/react";
import 'jest-styled-components';
import { renderTheme } from "../../styles/render-theme";
import { Menu } from '.';
import links from '../NavLinks/mock';
import { theme } from "../../styles/theme";

const logoData = {
  text: 'Logo',
  image: 'https://raw.githubusercontent.com/luizomf/strapi_landing_pages/master/public/DADOS/landing-page-2.svg',
  link: 'https://www.google.com',
}

describe('<Menu />', () => {
  it('should render Logo and NavLinks', () => {
    const {container} = renderTheme(<Menu links={links} logoData={logoData} />);
    expect(screen.getByRole('heading', { name: 'Logo' })).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: 'Main Menu' })).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should render menu mobile and Button for open and close menu', () => {
    const {container} = renderTheme(<Menu links={links} logoData={logoData} />);
    const button = screen.getByLabelText('Open/Close Menu');
    const menuContainer = button.nextSibling;

    expect(button).toHaveStyle('display: none;');

    expect(button).toHaveStyleRule('display', 'flex', {
      media: theme.medias.lteMedium,
    });

    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.medias.lteMedium,
    });

    expect(screen.getByLabelText('Open Menu')).toBeInTheDocument();

    fireEvent.click(button);

    expect(menuContainer).toHaveStyleRule('opacity', '1', {
      media: theme.medias.lteMedium,
    });

    expect(screen.getByLabelText('Close Menu')).toBeInTheDocument();

    fireEvent.click(menuContainer);

    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.medias.lteMedium,
    });

    expect(screen.getByLabelText('Open Menu')).toBeInTheDocument();
  });

  it('should not render links', () => {
    const {container} = renderTheme(<Menu logoData={logoData} />);

    expect(screen.queryByRole('navigation', { name: 'Main Menu' }).firstChild).not.toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
