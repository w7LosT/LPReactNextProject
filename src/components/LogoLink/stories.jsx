import { LogoLink } from './index';

export default {
  title: 'LogoLink',
  component: LogoLink,
  args: {
    text: 'LogoLink',
    image: 'https://raw.githubusercontent.com/luizomf/strapi_landing_pages/master/public/DADOS/landing-page-2.svg',
    link: 'https://www.google.com',
  },
  argTypes: {
    text: { type: 'string', },
    image: { type: 'string', },
    link: { type: 'string', },
  },
}

export const ImageOnly = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  )
}

export const TextOnly = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  )
}

TextOnly.args = {
  image: '',
}
