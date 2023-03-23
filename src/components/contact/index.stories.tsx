import { ComponentStory, ComponentMeta } from '@storybook/react';
import Contact from '.';

export default {
  title: 'Interior/Contact',
  component: Contact,
} as ComponentMeta<typeof Contact>;

const Template: ComponentStory<typeof Contact> = () => <Contact />;

export const Primary = Template.bind({});
