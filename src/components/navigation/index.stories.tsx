import { ComponentStory, ComponentMeta } from "@storybook/react";
import Navigation from ".";

export default {
  title: "Interior/Navigation",
  component: Navigation,
} as ComponentMeta<typeof Navigation>;

const Template: ComponentStory<typeof Navigation> = (args) => (
  <Navigation />
);

export const Primary = Template.bind({});
