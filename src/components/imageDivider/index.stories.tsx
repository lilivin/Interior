import { ComponentStory, ComponentMeta } from "@storybook/react";
import ImageDivider from ".";
import Team from ".";

export default {
  title: "Example/ImageDivider",
  component: ImageDivider,
} as ComponentMeta<typeof Team>;

const Template: ComponentStory<typeof ImageDivider> = (args) => (
  <ImageDivider {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  image: "single-service-divider-image",
  height: 300,
};
