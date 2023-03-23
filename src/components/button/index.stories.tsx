import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button, { ButtonSize, ButtonStyles } from '.';

export default {
  title: 'Interior/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} >{args.children}</Button>;

export const Primary = Template.bind({});
Primary.args = {
  children: "Button Text",
  size: ButtonSize.Default,
  style: ButtonStyles.Primary,
  href: "/login"
};