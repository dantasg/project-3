import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `
    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    Nobis fugiat, distinctio veritatis dignissimos sequi reprehenderit
    dolor id quo repellendus maiores harum alias enim.
    Dolorem, atque vitae tempora pariatur praesentium eius?,
    `,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
