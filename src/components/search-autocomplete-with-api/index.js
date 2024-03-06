import React, { useEffect, useState } from "react";
import { FaUnderline } from "react-icons/fa";
import Suggestions from "./suggesstions";

function SearchAutocomplete() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchParam, setSearchParam] = useState("");
  const [users, setUsers] = useState([]);
  const [loding, setLoding] = useState([false]);
  const [error, setError] = useState(null);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    fetchListOfUsers();
  }, []);
  async function fetchListOfUsers() {
    try {
      setLoding(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      console.log(data, "datfa");
      setUsers(data.users.map((userItem) => userItem.firstName));
      setLoding(false);
      setError("");
    } catch (err) {
      setLoding(`false`);
      setError(error);
    }
  }
  function handleChange(event) {
    const value = event.target.value;
    setSearchParam(value);
    if (value.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(value) > -1)
          : [];
      setFilteredUsers(filteredData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }
  function handleClick(event) {
    setShowDropdown(false);
    console.log(event.target.innerText, "event");
    setSearchParam(event.target.innerText);
    setFilteredUsers([]);
  }
  return (
    <div style={{ marginTop: "50px" }}>
      {loding ? (
        <h1>Loading Data ! Please wait</h1>
      ) : (
        <input
          name="search-users"
          placeholder="Search Users here ."
          value={searchParam}
          onChange={handleChange}
        ></input>
      )}

      {showDropdown && (
        <Suggestions data={filteredUsers} handleClick={handleClick} />
      )}
    </div>
  );
}

export default SearchAutocomplete;
