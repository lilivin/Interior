import { ComponentStory, ComponentMeta } from "@storybook/react";
import PageTitle from ".";

export default {
  title: "Interior/PageTitle",
  component: PageTitle,
} as ComponentMeta<typeof PageTitle>;

const Template: ComponentStory<typeof PageTitle> = (args) => (
  <PageTitle {...args}/>
);

export const Primary = Template.bind({});
Primary.args = {
  title: "Abous Us",
  path: "Home / Abous Us",
  image: "about-us-page-title"
};
