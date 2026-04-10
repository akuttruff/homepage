import WorkDetailHeader, { WorkDetailType as WorkDetailHeaderType } from './work-detail-header';

export interface WorkDetailType extends WorkDetailHeaderType {
  descriptionItems: string[];
}

interface WorkDetailProps {
  detail: WorkDetailType;
}

const WorkDetail = ({ detail }: WorkDetailProps) => {
  const { descriptionItems } = detail;
  return (
    <>
      <WorkDetailHeader detail={detail} />
      <div className="description">
        <ul>
          {descriptionItems.map((item, index) => (
            <li key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default WorkDetail;
