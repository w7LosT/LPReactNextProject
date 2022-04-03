import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import { Heading } from './index';

const renderTheme = (children) => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};

describe('<Heading />', () => {
  it('should render heading with default values', () => {
    renderTheme(<Heading>texto</Heading>);
    const headingContainer = screen.getByRole('heading', {name: "texto"});
    expect(headingContainer).toHaveStyle({
      "color": theme.default.mainColor,
      "font-size": theme.fonts.sizes.lg,
    });
  });

  it('should render heading with DarkTheme', () => {
    renderTheme(<Heading colorDark={true}>texto</Heading>);
    const headingContainer = screen.getByRole('heading', {name: "texto"});
    expect(headingContainer).toHaveStyle({
      "color": theme.default.colorWhite,
      "font-size": theme.fonts.sizes.lg,
    });
  });

  it('should render heading with size big as h3 and DarkTheme', () => {
    renderTheme(<Heading colorDark={true} as={"h3"} size={"lg"}>texto</Heading>);
    const headingContainer = screen.getByRole('heading', {name: "texto"});
    expect(headingContainer).toHaveStyle({
      /*"background-color": theme.default.secondaryBG,*/
      "color": theme.default.colorWhite,
      "font-size": theme.fonts.sizes.lg,
    });

  });

  it('should render heading with size MD as h1 and DarkTheme for media medium', () => {
    renderTheme(<Heading colorDark={true} as={"h1"}>texto</Heading>);
    const headingContainer = screen.getByRole('heading', {name: "texto"});

    expect(headingContainer).toHaveStyle({
      "background-color": theme.default.secondaryBG,
      "color": theme.default.colorWhite,
    });

    // expect(headingContainer).toHaveStyleRule(
    //   "font-size",
    //   theme.fonts.sizes.md,
    //   {
    //     media: theme.medias.lteMedium,
    //   },
    // );
  });
});

