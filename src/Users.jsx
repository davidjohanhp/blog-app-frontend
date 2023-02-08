import React, {useState, useEffect} from "react";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([{}]);
  const [email, setEmail] = useState("");

  useEffect(() =>{
    fetch('/api/user').then(
      response => response.json()
    ).then(
      data => {
        setUsers(data)
      }
      // setEmail(response.data.email)
    )
  }, []
  )

  // function getUser() {
  //   axios.get("https://long-pear-kingfisher-sari.cyclic.app/api/user",  { crossdomain: true }).then(response => {
  //       setName(response.data.name);
  //       setEmail(response.data.email);
  //   });
  // }
  // console.log(axios.get("/api/user"));
  return (
    <div>
      {(typeof users.users == 'undefined') ? (
        <p>Loading</p>
      ) : (
        users.users.map((user, i) => (
          <p key={i}>{user.email}</p>
        )
        )
      )}
    </div>
  )
}

export default Users;