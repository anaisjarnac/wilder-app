import React, { useEffect, useState } from "react";
import Header from "./layout/components/Header";
import CardList from "./view/wilders/components/CardList";
import Form from "./view/wilders/Form";
import axios from "axios";
function App(props) {
  const [wilders, setWilders] = useState([]);

  const getWilders = () => {
    // Send the request
    axios
      .get("/api/wilder")
      // Extract the DATA from the received response
      .then((response) => response.data.result)
      // Use this data to update the state
      .then((data) => {
        setWilders(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getWilders();
  }, [wilders]);

  return (
    <div>
      <Header />
      <CardList wilders={wilders} />
      <Form refetch={getWilders}/>
    </div>
  );
}

export default App;
