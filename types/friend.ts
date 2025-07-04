interface BaseUserInfo {
  id?: string;
  nickname: string;
  profileImg: string;
  code: string;
}

export interface FriendRequest extends BaseUserInfo {}

export interface FriendResult extends BaseUserInfo {}

export interface SearchResult extends BaseUserInfo {
  relationship?: "FRIEND" | "PENDING";
}
