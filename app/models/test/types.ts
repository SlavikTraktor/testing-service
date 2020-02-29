export type TestQuestion = {
  type: string;
  question: string;
  options: string[];
  answer: number;
  userAnswer?: number;
};

export type TestsState = {
  username?: string;
  tests?: TestQuestion[];
  testStep: number;
};
