import React from "react";
import PropTypes from "prop-types";

const Prezimenaprops = ({ first, last, age, spol, children }) => {
  const user = {
    firstName: first,
    lastName: last,
    age: age,
    gender: spol,
  };

  return (
    <div>
      <h1>Korisnik</h1>
      <p>Ime: {user.firstName}</p>
      <p>Prezime: {user.lastName}</p>
      <p>Broj godina: {user.age}</p>
      <p>Spol: {user.gender}</p>
      <p>{children}</p>
    </div>
  );
};

Prezimenaprops.propTypes = {
  first: PropTypes.string,
  last: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  spol: PropTypes.oneOf(["M", "F"]),
};
Prezimenaprops.defaultProps = {
  spol: "F",
};

export default Prezimenaprops;
