interface OscarProps {
  children: React.ReactNode
}

const Oscar = (props: OscarProps) => {
  return (
    <div className="Oscar">
      <h2>{props.children}</h2>
    </div>
  );
};

export default Oscar;
