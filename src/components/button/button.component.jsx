import './button.styles.scss';
import addIcon from '../../assets/images/icons/plus-icon.svg';

const AddButton = () => {
  return (
    <button className="button-container">
      <img className="add-icon" src={addIcon} alt="add-icon" />
    </button>
  );
};

export default AddButton;
