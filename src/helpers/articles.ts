import articlesJson from "../data/articles.json";

export type ArticleType = {
  id: string,
  title: string,
  shortDescription: string,
  category: ArticlesCategories,
  date: string,
  photo: string
};

export const enum ArticlesCategories {
  Kitchen = "kitchen",
  LivingRoom = "living room",
  Bathroom = "bathroom",
  Bedroom = "bedroom",
}

export function getArticleById(id: string) {
  const articles = articlesJson.articles;
  return articles.find(article => article.id === id);
}

export function getArticles(amount?: number){
  let articles = articlesJson.articles;
  if(amount){
    articles = articles.slice((articles.length - amount), articles.length)
  }
  return articles;
}

