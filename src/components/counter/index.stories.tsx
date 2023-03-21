import { ComponentStory, ComponentMeta } from '@storybook/react';
import Counter from '.';

export default {
  title: 'Example/Counter',
  component: Counter,
} as ComponentMeta<typeof Counter>;

const Template: ComponentStory<typeof Counter> = (args) => <Counter />;

export const Primary = Template.bind({});
