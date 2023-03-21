import { ComponentStory, ComponentMeta } from "@storybook/react";
import List, { ListType } from ".";
import ListItem from "./components/listItem";

export default {
  title: "Example/List",
  component: List,
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => (
  <List {...args}>
    <ListItem href="#">List Item 1</ListItem>
    <ListItem href="#">List Item 2</ListItem>
    <ListItem href="#">List Item 3</ListItem>
    <ListItem href="#">List Item 4</ListItem>
    <ListItem href="#">List Item 5</ListItem>
  </List>
);

export const Primary = Template.bind({});
Primary.args = {
  type: ListType.Order,
};
