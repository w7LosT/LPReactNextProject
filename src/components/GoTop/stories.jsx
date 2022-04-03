import { GoTop } from './index';

export default {
  title: 'GoTop',
  component: GoTop,
  args: {},
}

export const Template = (args) => {
  return (
    <div style={{ height: '400vh', }}>
      <GoTop {...args} />
    </div>
  )
}
