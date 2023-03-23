import { ComponentStory, ComponentMeta } from "@storybook/react";
import Articles from ".";
import Article from "./components/article";

export default {
  title: "Interior/Articles",
  component: Articles,
} as ComponentMeta<typeof Articles>;

const Template: ComponentStory<typeof Articles> = (args) => (
  <Articles {...args}>
    <Article
      id="lets-get-solution-for-building-construction-work"
      category="kitchen"
      date="2023-03-12T12:00:00+00:00"
      photo="article-photo-2"
    >
      Let’s Get Solution For Building Construction Work.
    </Article>
    <Article
      id="lets-get-solution-for-building-construction-work"
      category="kitchen"
      date="2023-03-12T12:00:00+00:00"
      photo="article-photo-2"
    >
      Let’s Get Solution For Building Construction Work.
    </Article>
    <Article
      id="lets-get-solution-for-building-construction-work"
      category="kitchen"
      date="2023-03-12T12:00:00+00:00"
      photo="article-photo-2"
    >
      Let’s Get Solution For Building Construction Work.
    </Article>
  </Articles>
);

export const Primary = Template.bind({});
