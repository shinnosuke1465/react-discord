export interface InitialState {
  displayName: string;
  photo: string | undefined;
  user: null | { //userがnullじゃないとき
    uid: string; //uid(userのid)が文字
    photo: string; //userのプロフィール写真
    email: string;
    displayName: string;
  };
}

export interface InitialAppState {
  channelId: string | null;
  channelName: string | null;
}
