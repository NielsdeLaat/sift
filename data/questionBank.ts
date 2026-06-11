import type { Lang } from '@/lib/i18n';
import type { Question } from './questions';

import { nameTrickQuestions as nameTrickNl }   from './questions/nl/name-trick';
import { realOrAiQuestions as realOrAiNl }     from './questions/nl/real-or-ai';
import { leaveThePageQuestions as leaveNl }    from './questions/nl/leave-the-page';
import { whoSaysQuestions as whoSaysNl }       from './questions/nl/who-says';
import { underTheHoodQuestions as underNl }    from './questions/nl/under-the-hood';
import { whenOrWhereQuestions as whenWhereNl } from './questions/nl/when-or-where';
import { weakLinkQuestions as weakLinkNl }     from './questions/nl/weak-link';
import { feedTestQuestions as feedTestNl }     from './questions/nl/feed-test';

import { nameTrickQuestions as nameTrickEn }   from './questions/en/name-trick';
import { realOrAiQuestions as realOrAiEn }     from './questions/en/real-or-ai';
import { leaveThePageQuestions as leaveEn }    from './questions/en/leave-the-page';
import { whoSaysQuestions as whoSaysEn }       from './questions/en/who-says';
import { underTheHoodQuestions as underEn }    from './questions/en/under-the-hood';
import { whenOrWhereQuestions as whenWhereEn } from './questions/en/when-or-where';
import { weakLinkQuestions as weakLinkEn }     from './questions/en/weak-link';
import { feedTestQuestions as feedTestEn }     from './questions/en/feed-test';

export function getQuestions(lang: Lang = 'nl'): Question[] {
  const nl = [...nameTrickNl, ...realOrAiNl, ...leaveNl, ...whoSaysNl, ...underNl, ...whenWhereNl, ...weakLinkNl, ...feedTestNl];
  const en = [...nameTrickEn, ...realOrAiEn, ...leaveEn, ...whoSaysEn, ...underEn, ...whenWhereEn, ...weakLinkEn, ...feedTestEn];
  return lang === 'en' ? en : nl;
}
