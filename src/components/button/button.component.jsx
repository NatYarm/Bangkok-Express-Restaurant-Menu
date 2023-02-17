import './button.styles.scss';
import addIcon from '../../assets/images/icons/plus-icon.svg';

const AddButton = (props) => {
  return (
    <button className="button-container">
      <img className="add-icon" src={addIcon} alt="add-icon" {...props} />
    </button>
  );
};

export default AddButton;
