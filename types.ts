
export enum ArticleCategory {
  LITIGATION = 'Litigation',
  CORPORATE = 'Corporate',
  REAL_ESTATE = 'Real Estate',
  FAMILY_LAW = 'Family Law',
  CRIMINAL = 'Criminal Defense',
  INSURANCE = 'Insurance Claims'
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: ArticleCategory;
  author: string;
  publishDate: string;
  imageUrl: string;
}

export interface PracticeArea {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  qualifications?: string[];
  memberships?: string[];
  publications?: string[];
  fullBio?: string;
}
