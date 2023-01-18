import axios from "axios";
import { IArticle, INews } from "types";

class SpaceBlogApi {
  private readonly BASE_URL = process.env.REACT_APP_BASE_URL_SPACE_BLOG_API;
  private readonly END_POINTS = {
    articles: "articles",
    blogs: "blogs",
  };

  private readonly API = axios.create({
    baseURL: this.BASE_URL,
  });

  public async getAllArticles(page: number, query: string) {
    const params = {
      _limit: 12,
      _start: page,
      _summary_contains: query,
    };
    const { data } = await this.API.get<IArticle[]>(this.END_POINTS.articles, { params });
    return data;
  }

  public async getAllArticlesCount() {
    const { data } = await this.API.get<number>(`${this.END_POINTS.articles}/count`);

    return data;
  }

  public async getAllNewsCount() {
    const { data } = await this.API.get<number>(`${this.END_POINTS.blogs}/count`);

    return data;
  }

  public async getAllNews(page: number) {
    const params = {
      _limit: 12,
      _start: page,
    };
    const { data } = await this.API.get<INews[]>(this.END_POINTS.blogs, { params });

    return data;
  }

  public async getArticleById(id: string) {
    const { data } = await this.API.get<IArticle>(`${this.END_POINTS.articles}/${id}`);
    return data;
  }

  public async getNewsById(id: string) {
    const { data } = await this.API.get<INews>(`${this.END_POINTS.blogs}/${id}`);
    return data;
  }
}

export const spaceBlogApi = new SpaceBlogApi();
