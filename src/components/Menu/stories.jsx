import { Menu } from './index';
import links from '../NavLinks/mock';

export default {
  title: 'Menu',
  component: Menu,
  args: {
    links: links,
    logoData: {
      text: 'Logo',
      image: 'https://raw.githubusercontent.com/luizomf/strapi_landing_pages/master/public/DADOS/landing-page-2.svg',
      link: 'https://www.google.com',
    },
  },
  argTypes: {
    links: { type: '', },
    logoData: { type: '' },
  },
}

export const Template = (args) => {
  return (
    <div>
      <Menu {...args} />
    </div>
  )
}
