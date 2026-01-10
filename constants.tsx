import { ArticleCategory, PracticeArea, TeamMember, Article } from './types';
import { articleData } from './data/articles';

export const MOCK_ARTICLES = articleData;

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'personal-law',
    title: 'practice_areas.personal_law.title',
    description: 'practice_areas.personal_law.description',
    icon: 'Contact'
  },
  {
    id: 'business-law',
    title: 'practice_areas.business_law.title',
    description: 'practice_areas.business_law.description',
    icon: 'Building'
  },
  {
    id: 'corporate-law',
    title: 'practice_areas.corporate_law.title',
    description: 'practice_areas.corporate_law.description',
    icon: 'Building2'
  },
  {
    id: 'regulatory-compliance',
    title: 'practice_areas.regulatory_compliance.title',
    description: 'practice_areas.regulatory_compliance.description',
    icon: 'Package'
  },
  {
    id: 'family-office',
    title: 'practice_areas.family_office.title',
    description: 'practice_areas.family_office.description',
    icon: 'HandHelping'
  },
  {
    id: 'estate-planning',
    title: 'practice_areas.estate_planning.title',
    description: 'practice_areas.estate_planning.description',
    icon: 'TrendingUp'
  }
];

export const TEAM: TeamMember[] = [
  {
    id: '1',
    name: 'Chris Chua',
    role: 'Managing Director',
    bio: 'Chris Chua is a corporate and financial advisory lawyer with more than 20 years of experience. She manages a versatile legal practice and represents clients in myriad different industries.',
    imageUrl: '/images/chris-chua.png', // Updated with client provided image
    qualifications: [
      'LL. B. (Hons), University of Liverpool, England',
      'Barrister-at-Law, Lincoln’s Inn, England & Wales',
      'Advocate & Solicitor, Singapore',
      'Certificate in Trust Services, Wealth Management Institute, Singapore',
      'Certificate in Family Office Advisors, Wealth Management Institute, Singapore',
      'Graduate Diploma, Compliance in Financial Services, Wealth Management Institute, Singapore'
    ],
    memberships: [
      'Member, Law Society of Singapore',
      'Member, Singapore Academy of Law'
    ],
    publications: [
      '“Compliance Issues for the Financial Services Firm in light of Singapore’s New Financial Advisers Act”; Asia Pacific Financial Planning Conference, Singapore',
      'Contributing Author: LexisNexis Advance® Practical Guidance – Commercial Law Module',
      'Contributing Author: “Know the Law NOW!”; A Special Commemorative Publication by the Singapore Academy of Law and the Law Society of Singapore',
      'Contributing Author: “legalese – A Legal Handbook for Social Enterprises”; Publication by the Law Society of Singapore'
    ],
    fullBio: `Chris Chua is a corporate and financial advisory lawyer with more than 20 years of experience. She manages a versatile legal practice and represents clients in myriad different industries.

Her experience in corporate and financial advisory work includes understanding the financial sector regulations, which allows her to be involved in advising / drafting trust deeds and prospectuses for financial investment schemes and being involved in regulatory licensing of capital markets and financial intermediaries.

Chris offers a unique perspective in the financial industry as she has experience not only as a legal advisor but also as Chief Compliance Officer in a Singapore External Asset Management company. She is well versed in Risk Management and Internal Audit on risk-related issues and compliance with internal policies, legislation, rules and regulations.

In her Family Office Practice, Chris advises individuals and families on establishing and managing their family office, including estate planning matters, wills, trusts and family governance/constitution. Chris also helps clients with developing onshore and offshore asset holding protection structures.

Chris has an abiding interest in helping start-ups and small businesses succeed. She started Chris Chua & Associates LLC to provide affordable, quality legal advice to fledgling businesses. To this end, Chris advises general corporate work such as buy-sell agreements, shareholders and partnership agreements, and distributorship and agency agreements.`
  }
];