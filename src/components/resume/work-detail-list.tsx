import WorkDetail, { type WorkDetailType } from './work-detail';

interface WorkDetailListProps {
  workDetails: WorkDetailType[];
}

const WorkDetailList = ({ workDetails }: WorkDetailListProps): React.JSX.Element => (
  <div>
    <h1 className="resume-subhead">Work</h1>
    {workDetails.map((detail, index) => <WorkDetail detail={detail} key={index} />)}
  </div>
);

export default WorkDetailList;
