import { ComponentStory, ComponentMeta } from "@storybook/react";
import ContactForm from ".";

export default {
  title: "Interior/ContactForm",
  component: ContactForm,
} as ComponentMeta<typeof ContactForm>;

const Template: ComponentStory<typeof ContactForm> = (args) => (
  <div style={{ maxWidth: "800px", margin: "0 auto" }}>
    <ContactForm />
  </div>
);

export const Primary = Template.bind({});
