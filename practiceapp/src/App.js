import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import EmployeeTracker from "./pages/EmployeeTracker";
import Search from "./pages/Search";
import Card from ".//components/Card"
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Wrapper>
          
          <Route exact path="/" component={EmployeeTracker} />
          {this.state.friends.map(friend => (
          <Card
        first = {users.name.first}
        last = {users.name.last}
         gender = {users.gender}
         email = {users.email}
         age = {users.dob.age}
         picture = {users.picture.thumbnail}
          id = {id}
          />
        ))}
          <Route exact path="/search" component={Search} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
