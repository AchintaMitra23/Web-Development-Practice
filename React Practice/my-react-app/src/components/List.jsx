/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import PropTypes from 'prop-types';
let List = props => {
  const items = props.items;

  items.sort ((a, b) => a.name.localeCompare (b.name));
  items.sort ((a, b) => a.calorie - b.calorie);
  let calGreaterThan_30 = items.filter (fruit => fruit.calorie > 30);

  const listItems = items.map (fruit => (
    <li key={fruit.id}>{fruit.name} - {fruit.calorie}</li>
  ));
  return <ul>{listItems}</ul>;
};

List.propTypes = {
  items: PropTypes.arrayOf (
    PropTypes.shape ({
      id: PropTypes.number,
      name: PropTypes.string,
      calorie: PropTypes.number,
    })
  ),
};
export default List;
