import PropTypes from 'prop-types';

export default function Searchbar({ value, onChange }) {
  return (
    <input type="text" value={value} onChange={e => onChange(e.target.value)} />
  );
}

Searchbar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
