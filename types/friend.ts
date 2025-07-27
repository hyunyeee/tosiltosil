interface BaseUserInfo {
  id?: string;
  nickname: string;
  profileImg: string;
  code: string;
}

export type FriendRequest = BaseUserInfo;

export type FriendResult = BaseUserInfo;

export interface SearchResult extends BaseUserInfo {
  relationship?: "FRIEND" | "PENDING";
}

export type FriendHomeHeaderRelationship =
  | "REQUEST_RECEIVED"
  | "REQUEST_SENT"
  | "FRIEND"
  | "GENERAL";
