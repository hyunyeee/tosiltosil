export interface SearchResult {
  id?: string;
  nickname: string;
  profileImg: string;
  code: string;
  relationship?: "FRIEND" | "PENDING";
}

export interface FriendResult {
  id?: string;
  nickname: string;
  profileImg: string;
  code: string;
}
