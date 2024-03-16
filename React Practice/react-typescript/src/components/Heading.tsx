interface HeadingProps {
  children: string
}

const Heading = (props: HeadingProps) => {
  return (
    <div className="Heading">
      <h2>{props.children}</h2>
    </div>
  );
};

export default Heading;