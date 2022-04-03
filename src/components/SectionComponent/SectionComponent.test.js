import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { SectionComponent } from '.';

describe('<SectionComponent />', () => {
  it('should render', () => {
    const {container} = renderTheme(<SectionComponent>SectionComponent</SectionComponent>);
    expect(container).toMatchSnapshot();
  });
});
