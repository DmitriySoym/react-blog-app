import axios from "axios";
import { IArticle } from "types";

class SpaceBlogApi {
  private readonly BASE_URL = "https://api.spaceflightnewsapi.net/v3/";
  private readonly END_POINTS = {
    articles: "articles",
    blogs: "blogs",
  };

  private readonly API = axios.create({
    baseURL: this.BASE_URL,
  });

  public async getAllArticles(options: number) {
    const params = {
      _limit: options,
    };
    const { data } = await this.API.get<IArticle[]>(this.END_POINTS.articles, { params });

    return data;
  }

  public async getAllNews(options: number) {
    const params = {
      _limit: options,
    };
    const { data } = await this.API.get<IArticle[]>(this.END_POINTS.blogs, { params });

    return data;
  }

  public async getArticleById(id: string) {
    const { data } = await this.API.get<IArticle>(`${this.END_POINTS.articles}/${id}`);
    return data;
  }
}

export const spaceBlogApi = new SpaceBlogApi();
