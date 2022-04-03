import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { MenuLink } from '.';

describe('<MenuLink />', () => {
  it('should render <MenuLink />', () => {
    renderTheme(<MenuLink link="https://www.google.com">MenuLink</MenuLink>);
    expect(screen.getByRole('link', { name: 'MenuLink' })).toBeInTheDocument();
  });

  it('should have target self', () => {
    renderTheme(<MenuLink link="https://www.google.com" newTab={false}>MenuLink</MenuLink>);

    expect(screen.getByRole('link', { name: 'MenuLink' })).toHaveAttribute('target', '_self');
  });

  it('should have target blank', () => {
    renderTheme(<MenuLink link="https://www.google.com" newTab={true}>MenuLink</MenuLink>);

    expect(screen.getByRole('link', { name: 'MenuLink' })).toHaveAttribute('target', '_blank');
  });

  it('should match Snapshot', () => {
    renderTheme(<MenuLink link="https://www.google.com" newTab={true}>MenuLink</MenuLink>);
    expect(screen.getByRole('link', { name: 'MenuLink' })).toMatchSnapshot();
  });
});
