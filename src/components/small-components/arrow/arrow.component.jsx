import { ReactComponent as ArrowRight } from '../../../assets/images/icons/angle-icon.svg';
import { ReactComponent as ArrowLeft } from '../../../assets/images/icons/angle-left-icon.svg';
import './arrow.styles.scss';

const ARROW_TYPE = {
  carousel: 'carousel-arrow',
};

const Arrow = (props) => {
  const { arrowDirection, arrowType, handleClick } = props;
  const icon =
    arrowDirection === 'left' ? (
      <ArrowLeft className="arrow-icon" />
    ) : (
      <ArrowRight className="arrow-icon" />
    );

  return (
    <div
      className={`arrow-container ${ARROW_TYPE[arrowType]} ${arrowDirection}`}
      onClick={handleClick}
    >
      {icon}
    </div>
  );
};

export default Arrow;
