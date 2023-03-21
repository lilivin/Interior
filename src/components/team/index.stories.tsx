import { ComponentStory, ComponentMeta } from "@storybook/react";
import Team from ".";
import PageTitle from ".";

export default {
  title: "Example/Team",
  component: PageTitle,
} as ComponentMeta<typeof Team>;

const Template: ComponentStory<typeof PageTitle> = (args) => (
  <Team/>
);

export const Primary = Template.bind({});
