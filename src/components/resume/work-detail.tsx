import WorkDetailHeader from './work-detail-header';
import type { WorkDetailType as WorkDetailHeaderType } from './work-detail-header';

export interface WorkDetailType extends WorkDetailHeaderType {
  descriptionItems: string[];
}

interface WorkDetailProps {
  detail: WorkDetailType;
}

const WorkDetail = ({ detail }: WorkDetailProps): React.JSX.Element => {
  const { descriptionItems } = detail;

  return (
    <div className="job">
      <WorkDetailHeader detail={detail} />
      <div className="description">
        <ul>
          {descriptionItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkDetail;
