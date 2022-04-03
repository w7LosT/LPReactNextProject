import { Text } from ".";

export default {
  title: 'Text',
  component: Text,
  args: {
    children: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quam omnis veritatis, inventore officiis dolorem,
    voluptatibus saepe ab alias dolor eveniet placeat aliquid, magnam eaque excepturi ut. Eligendi, voluptate labore!
    `,
  },
  argTypes: {
    children: { type: 'string' },
  }
}

export const Template = (args) => <Text {...args} />
