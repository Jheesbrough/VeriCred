export interface ScoreData {
  score: number;
  categories: {
    network: number;
    experience: number;
    personal: number;
    socialMedia: number;
    reputation: number;
  };
}
