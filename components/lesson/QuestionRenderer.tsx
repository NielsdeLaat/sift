import type { Question } from '@/data/questions';
import { NameTrick }      from './question-types/NameTrick';
import { RealOrAi }       from './question-types/RealOrAi';
import { LeaveThePage }   from './question-types/LeaveThePage';
import { WhoSays }        from './question-types/WhoSays';
import { UnderTheHood }   from './question-types/UnderTheHood';
import { WhenOrWhere }    from './question-types/WhenOrWhere';
import { WeakLink }       from './question-types/WeakLink';
import { FeedTest }       from './question-types/FeedTest';

interface Props {
  question: Question;
  locked: boolean;
  selectedOption: number | null;
  onAnswer: (score: boolean | number) => void;
  onSelectOption: (i: number) => void;
}

export function QuestionRenderer({
  question,
  locked,
  selectedOption,
  onAnswer,
  onSelectOption,
}: Props) {
  switch (question.type) {
    case 'name-trick':
      return (
        <NameTrick
          question={question}
          locked={locked}
          selectedOption={selectedOption}
          onSelectOption={onSelectOption}
          onAnswer={onAnswer}
        />
      );
    case 'real-or-ai':
      return <RealOrAi question={question} locked={locked} onAnswer={onAnswer} />;
    case 'leave-the-page':
      return (
        <LeaveThePage
          question={question}
          locked={locked}
          selectedOption={selectedOption}
          onSelectOption={onSelectOption}
          onAnswer={onAnswer}
        />
      );
    case 'who-says':
      return (
        <WhoSays
          question={question}
          locked={locked}
          selectedOption={selectedOption}
          onSelectOption={onSelectOption}
          onAnswer={onAnswer}
        />
      );
    case 'under-the-hood':
      return (
        <UnderTheHood
          question={question}
          locked={locked}
          selectedOption={selectedOption}
          onSelectOption={onSelectOption}
          onAnswer={onAnswer}
        />
      );
    case 'when-or-where':
      return (
        <WhenOrWhere
          question={question}
          locked={locked}
          selectedOption={selectedOption}
          onSelectOption={onSelectOption}
          onAnswer={onAnswer}
        />
      );
    case 'weak-link':
      return <WeakLink question={question} locked={locked} onAnswer={onAnswer} />;
    case 'feed-test':
      return <FeedTest question={question} onAnswer={onAnswer} />;
  }
}
