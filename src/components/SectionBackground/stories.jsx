import { SectionBackground } from './index';
import { SectionComponent } from '../SectionComponent';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
    <SectionComponent>
      <div>
        <h1>SectionComponent</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptate rerum voluptas qui, eligendi temporibus minima,
          excepturi provident explicabo numquam nihil optio ipsam sapiente quos blanditiis recusandae doloremque reprehenderit. Sapiente.
        </p>
      </div>
    </SectionComponent>),
  },
  argTypes: {
    children: { type: '', },
    background: { type: 'boolean' }
  },
}

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  )
}
