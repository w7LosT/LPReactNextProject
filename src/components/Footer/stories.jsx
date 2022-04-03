import { Footer } from './index';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    footerHtml: 'Footer',
  },
  argTypes: {
    footerHtml: { type: 'string', },
  },
}

export const Template = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  )
}
