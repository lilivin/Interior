import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button, { ButtonSize, ButtonStyles } from '.';

export default {
  title: 'Example/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} >Button Text</Button>;

export const Primary = Template.bind({});
Primary.args = {
  size: ButtonSize.Default,
  style: ButtonStyles.Primary,
  href: "/login"
};