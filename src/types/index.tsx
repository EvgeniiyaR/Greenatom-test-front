export interface IConfig {
  url: string;
  headers: HeadersInit;
}

export interface IButton {
  onClick: () => void;
  text: string;
  type: 'submit' | 'reset' | 'button' | undefined;
}