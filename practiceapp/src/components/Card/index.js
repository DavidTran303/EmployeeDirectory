import React from "react";
import "./style.css";
import axios from "axios";

function getEmployee(props){
    // console.log("click")
  return axios.get("https://randomuser.me/api/")
    .then(function (response) {
    // handle success
    console.log(response.data.results[0]);
      const randomEmployee = response.data.results[0];
      const employeeName = randomEmployee.name.first + " " + randomEmployee.name.last
      console.log(employeeName)
  })
  };

function Card(props) {
  getEmployee()
  return (
    <div>
    </div>
  );
}

export default Card;
