let Footer = () => {
  let date = new Date ();
  return (
    <footer>
      <p>&copy; {date.getFullYear ()} My Website</p>
    </footer>
  );
};

export default Footer;
