import { ComponentStory, ComponentMeta } from '@storybook/react';
import Header, { HeaderType } from '.';

export default {
  title: 'Interior/Header',
  component: Header,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} >{args.children}</Header>;

export const Primary = Template.bind({});
Primary.args = {
  children: "Header",
  as: "h3",
  type: HeaderType["Header01"],
};
