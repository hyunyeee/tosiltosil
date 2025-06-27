export interface SearchResult {
  id?: string;
  nickname: string;
  profileImg: string;
  code: string;
  relationship?: "FRIEND" | "PENDING";
}
