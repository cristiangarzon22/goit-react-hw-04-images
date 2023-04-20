
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';

const Searchbar = ({ onSubmit ,query,change}) => {
  //const [searchQuery, setSearchQuery] = useState('');

  //const handleInputChange = (e) => {
    //setSearchQuery(e.target.value);
  //};

  //const handleSubmit = (e) => {
   // e.preventDefault();
    //onSubmit(searchQuery);
    //setSearchQuery('');
  //};

  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={onSubmit}>
        <button onSubmit={onSubmit} className={css.SearchFormbutton}>
          <span className={css.SearchFormbuttonlabel}>Search</span>
        </button>

        <input
          className={css.SearchForminput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={change}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
