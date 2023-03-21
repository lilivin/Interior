import { ComponentStory, ComponentMeta } from '@storybook/react';
import Contact from '.';

export default {
  title: 'Example/Contact',
  component: Contact,
} as ComponentMeta<typeof Contact>;

const Template: ComponentStory<typeof Contact> = (args) => <Contact />;

export const Primary = Template.bind({});
