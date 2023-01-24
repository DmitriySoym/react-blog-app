import axios from "axios";
import { IPost } from "types";

class SpaceBlogApi {
  private readonly BASE_URL = process.env.REACT_APP_BASE_URL_SPACE_BLOG_API;
  private readonly END_POINTS = {
    articles: "articles",
    blogs: "blogs",
  };

  private readonly API = axios.create({
    baseURL: this.BASE_URL,
  });

  public async getAllPosts(page: number, query: string, sortParams: string, endpoint: string) {
    const params = {
      _limit: 9,
      _start: page,
      _title_contains: query,
      _sort: sortParams,
    };

    const { data } = await this.API.get<IPost[]>("/" + endpoint, { params });
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

  public async getArticleById(id: string) {
    const { data } = await this.API.get<IPost>(`${this.END_POINTS.articles}/${id}`);
    return data;
  }

  public async getNewsById(id: string) {
    const { data } = await this.API.get<IPost>(`${this.END_POINTS.blogs}/${id}`);
    return data;
  }
}

export const spaceBlogApi = new SpaceBlogApi();
