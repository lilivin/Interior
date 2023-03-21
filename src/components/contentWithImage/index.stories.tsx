import { ComponentStory, ComponentMeta } from "@storybook/react";
import ContentWithImage from ".";

export default {
  title: "Example/ContentWithImage",
  component: ContentWithImage,
} as ComponentMeta<typeof ContentWithImage>;

const Template: ComponentStory<typeof ContentWithImage> = (args) => (
  <ContentWithImage
    {...args}
  >
    {args.children}
  </ContentWithImage>
);

export const Primary = Template.bind({});
Primary.args = {
  children: "It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of usingthat it has a more-or-less normal.",
  title: "What We Do",
  buttonText: "Our Concept",
  buttonHref: "#",
  image: "what-we-do-section",
  reverse: false
};
