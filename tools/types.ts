export interface FeedItem {
  title: string;
  link: string;
  isoDate: string;
  contentSnippet?: string;
  content?: string;
}

export interface CandidateInput {
  id: number;
  source: string;
  title: string;
  date: string;
  url: string;
  content: string;
}

export interface CandidateResult {
  id: number;
  significance: 0 | 1 | 2 | 3 | 4;
  reason: string;
  // present only when significance > 0:
  title?: string;
  description?: string;
  slug?: string;
  tags?: string[];
  summarySection?: string;
  commentarySection?: string;
}

// used at write step only
export type ArticleJudgment = Required<Omit<CandidateResult, 'id'>>;
