import { MenuLink } from './index';

export default {
  title: "MenuLink",
  component: MenuLink,
  args: {
    children: 'MenuLink',
    link: 'https://www.google.com/',
    newTab: false,
  },
  argTypes: {
    children: { type: 'string', },
    link: { type: 'string', },
    newTab: { type: 'boolean', },
  },
}

export const Template = (args) => {
  return (
    <div style={{ display: 'flex' }}>
      <MenuLink {...args} />
    </div>
  )
}
