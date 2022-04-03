import { GridTwoColumns } from './index';

export default {
  title: 'GridTwoColumns',
  component: GridTwoColumns,
  args: {
    title: 'GridTwoColumns',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores veniam ducimus praesentium dolore laborum hic. At, tenetur vitae necessitatibus pariatur corrupti praesentium sit perspiciatis, eveniet repellendus possimus dicta labore consequatur.',
    imgSrc: 'assets/images/html_css_js.svg',
    background: false,
  },
  argTypes: {
    title: { type: '', },
    text: { type: '', },
    imgSrc: { type: '', },
    background: { type: '', },
  },
}

export const Template = (args) => {
  return (
    <div>
      <GridTwoColumns {...args} />
    </div>
  )
}
