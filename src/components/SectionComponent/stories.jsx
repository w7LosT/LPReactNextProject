import { SectionComponent } from './index';

export default {
  title: 'SectionComponent',
  component: SectionComponent,
  args: {
    children: (
      <div>
        <h1>SectionComponent</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptate rerum voluptas qui, eligendi temporibus minima,
          excepturi provident explicabo numquam nihil optio ipsam sapiente quos blanditiis recusandae doloremque reprehenderit. Sapiente.
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: '', },
  },
}

export const Template = (args) => {
  return (
    <div>
      <SectionComponent {...args} />
    </div>
  )
}
