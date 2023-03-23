import { ComponentStory, ComponentMeta } from '@storybook/react';
import Clients from '.';

export default {
  title: 'Interior/Clients',
  component: Clients,
} as ComponentMeta<typeof Clients>;

const Template: ComponentStory<typeof Clients> = () => <Clients />;

export const Primary = Template.bind({});
