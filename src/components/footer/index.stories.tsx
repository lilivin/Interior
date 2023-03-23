import { ComponentStory, ComponentMeta } from '@storybook/react';
import Footer from '.';

export default {
  title: 'Interior/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer />;

export const Primary = Template.bind({});
