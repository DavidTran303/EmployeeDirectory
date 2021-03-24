import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  generateUsers(){
    return axios.get(
     'https://randomuser.me/api/'
    )
    .then((res) =>{
      let users = res.data.results;
      let id = 1;
      

      users = users.map((users)=>{
        return{
        first: users.name.first,
        last: users.name.last,
        gender: users.gender,
        email: users.email,
        age: users.dob.age,
        picture: users.picture.thumbnail,
        id: id++
        }
      })
      console.log(users);
      return users;
    })
  }







 
};
