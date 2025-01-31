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

  public async getAllPostsStartPage(
    page: number,
    query: string,
    sortParams: string,
    endpoint: string,
    publicationDate: Date,
  ) {
    const params = {
      limit: 12,
      ordering: sortParams,
      offset: page,
      title_contains: query,
      published_at_gt: publicationDate,
    };

    const { data } = await this.API.get<any>("/" + endpoint, { params });
    return data;
  }

  public async getAllPostsCount(endPoint: string) {
    const { data } = await this.API.get<number>("/" + endPoint + "/");
    return data;
  }

  public async getNewsById(id: string, endPoint: string) {
    const { data } = await this.API.get<IPost>("/" + endPoint + "/" + id);
    return data;
  }
}

export const spaceBlogApi = new SpaceBlogApi();
