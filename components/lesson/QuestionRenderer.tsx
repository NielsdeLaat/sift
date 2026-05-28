import type { Question } from '@/data/questions';
import { Collaboration }       from './question-types/Collaboration';
import { ManipulationTactics } from './question-types/ManipulationTactics';
import { EvidenceChecking }    from './question-types/EvidenceChecking';
import { AiDetection }         from './question-types/AiDetection';
import { SourceInvestigation } from './question-types/SourceInvestigation';
import { ImageVerification }   from './question-types/ImageVerification';

interface Props {
  question: Question;
  page: number;
  selectedOption: number | null;
  onAnswer: (isCorrect: boolean) => void;
  onSelectOption: (i: number) => void;
  onPageAdvance: () => void;
}

export function QuestionRenderer({
  question,
  page,
  selectedOption,
  onAnswer,
  onSelectOption,
  onPageAdvance,
}: Props) {
  switch (question.type) {
    case 'collaboration':
      return <Collaboration question={question} onAnswer={onAnswer} />;
    case 'manipulation-tactics':
      return (
        <ManipulationTactics
          question={question}
          selectedOption={selectedOption}
          onSelectOption={onSelectOption}
          onAnswer={onAnswer}
        />
      );
    case 'evidence-checking':
      return (
        <EvidenceChecking
          question={question}
          selectedOption={selectedOption}
          onSelectOption={onSelectOption}
          onAnswer={onAnswer}
        />
      );
    case 'ai-detection':
      return (
        <AiDetection
          question={question}
          page={page}
          onAnswer={onAnswer}
          onPageAdvance={onPageAdvance}
        />
      );
    case 'source-investigation':
      return <SourceInvestigation question={question} onAnswer={onAnswer} />;
    case 'image-verification':
      return (
        <ImageVerification
          question={question}
          page={page}
          onAnswer={onAnswer}
          onPageAdvance={onPageAdvance}
        />
      );
  }
}
