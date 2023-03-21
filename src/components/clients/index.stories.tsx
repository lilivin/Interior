import { ComponentStory, ComponentMeta } from '@storybook/react';
import Clients from '.';

export default {
  title: 'Example/Clients',
  component: Clients,
} as ComponentMeta<typeof Clients>;

const Template: ComponentStory<typeof Clients> = (args) => <Clients />;

export const Primary = Template.bind({});
