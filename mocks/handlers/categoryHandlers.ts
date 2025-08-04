import { http, HttpResponse } from "msw";
import { mockCategoryList } from "../data/category";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const categoryHandlers = [
  http.get(`${baseURL}/api/v1/categories`, () => {
    return HttpResponse.json(mockCategoryList);
  }),
];
