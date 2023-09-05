import { filterContact } from 'redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import css from './Filter.module.css';

export default function Filter() {
  const filter = useSelector(state => state.contactsReducer.filter);
  const dispatch = useDispatch();

  const handleChangeFilter = data => {
    dispatch(filterContact(data));
  };

  return (
    <div>
      <label className={css.filterLabel}>Find contacts by Name</label>
      <input
        className={css.filterName}
        type="text"
        name="filter"
        placeholder="Enter filter"
        value={filter}
        onChange={e => handleChangeFilter(e.target.value)}
      ></input>
    </div>
  );
}
