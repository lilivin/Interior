import { ComponentStory, ComponentMeta } from '@storybook/react';
import Header, { HeaderType } from '.';

export default {
  title: 'Example/Header',
  component: Header,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} >Header</Header>;

export const Primary = Template.bind({});
Primary.args = {
  as: "h3",
  type: HeaderType["Header01"],
};
