import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { SectionBackground } from '.';

describe('<SectionBackground />', () => {
  it('should render with background dark', () => {
    const { container } = renderTheme(<SectionBackground background={true}>SectionBackground</SectionBackground>);
    expect(container).toMatchSnapshot();
  });

  it('should render with background light', () => {
    const {container} = renderTheme(<SectionBackground>SectionBackground</SectionBackground>);
    expect(container).toMatchSnapshot();
  });
});
