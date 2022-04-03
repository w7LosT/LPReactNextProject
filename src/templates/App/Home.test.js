import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import Home from './index';

const renderTheme = (children) => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};

describe('<Home />', () => {
  it('should render home', () => {
    renderTheme(<Home />);
  });
})

