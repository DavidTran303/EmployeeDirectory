import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  generateUsers(){
    return axios.get(
     'https://randomuser.me/api/'
    )
    .then((res) =>{
      console.log(res)
    })
  }







 
};
