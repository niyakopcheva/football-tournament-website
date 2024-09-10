
import StageBracket from './StageBracket';

export default function Bracket() {

  return (
    <div className="container-stage-brackets">
      <StageBracket title="Round of 16"/>
      <StageBracket title="Quarter-finals"/>
      <StageBracket title="Semi-finals"/>
      <StageBracket title="Final"/>
    </div>
  );
}