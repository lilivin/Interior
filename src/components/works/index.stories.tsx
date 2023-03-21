import { ComponentStory, ComponentMeta } from "@storybook/react";
import Works from ".";
import SignleWork from "./component/singleWork";

export default {
  title: "Example/Works",
  component: Works,
} as ComponentMeta<typeof Works>;

const Template: ComponentStory<typeof Works> = (args) => (
  <Works>
    <SignleWork title="Project Plan" href="#">
      There are many variations of the passages of lorem Ipsum from available,
      majority.
    </SignleWork>
    <SignleWork title="Interior Work " href="#">
      There are many variations of the passages of lorem Ipsum from available,
      majority.
    </SignleWork>
    <SignleWork title="Realization" href="#">
      There are many variations of the passages of lorem Ipsum from available,
      majority.
    </SignleWork>
  </Works>
);

export const Primary = Template.bind({});
