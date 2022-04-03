import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import { Text } from './index';

const renderTheme = (children) => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};

describe("<Text />", () => {
  it("should render <Text />", () => {
    renderTheme(<Text>algum texto</Text>)
  });
});
