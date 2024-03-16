let Food = () => {
  const food1 = 'Apple', food2 = 'Banana';
  return (
    <ul>
      <li>Orange</li>
      <li>{food1.toLowerCase ()}</li>
      <li>{food2.toUpperCase ()}</li>
    </ul>
  );
};

export default Food;
