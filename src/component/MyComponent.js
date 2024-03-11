const MyComponent = ({ color, name, isSpecial }) => {
  return (
    <div style={{ color }}>
      {isSpecial && <b>*</b>}
      <h1>리액트 props 공부 {name}</h1>
    </div>
  );
};

export default MyComponent;
