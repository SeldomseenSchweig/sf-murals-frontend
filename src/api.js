import axios from "axios";
// import { apiKey } from "../apiKey";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";
// const MURAL_URL = `https://data.sfgov.org/resource/wg8w-68vc.json?`


/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class sfMuralsApi {
  // the token for interactive with the API will be stored here.
  //There are three routes, to the database, the SF Mural API and the Googles maps API
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${sfMuralsApi.token}`};
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }
  


  // Individual API routes





  /** Get details on a suggested murals. */

  static async getSuggestedMurals(){
    let data = {}
    if (data){
      
    }

  let res = await this.request(`murals/adminMurals`);
  
  return res;
}

    static async getMurals(filter){
      let data = {}
      console.log(filter)
      if (filter){
        data = {street_address:filter}
        
      }

    let res = await this.request(`murals`,data);
    
    return res;
  }


  // users suggest murals to add to site

  static async suggest(values){

    let data = {
      artist:values.artist,
      street_address:values.street_address,
      img:values.img,
      user_id:values.user_id
    }

  let res = await this.request(`murals/muralSuggest`,data,'post' );
  
  return res;
}

// admin denys suggested mural, deletes from suggestedMurals table

static async deleteSuggested(id){
  let data = {}

  await this.request(`murals/${id}`,data,'delete')
}

static async approve(values){
    
  let data = {
    artist:values.artist,
    street_address:values.address,
    img:values.img,

  }

  let res = this.request('murals', data, 'post' )
return res  
}






    /**register website */

  static async register(values){
    
    let data = {
      username:values.username,
      password:values.password,
      firstName:values.firstName,
      lastName:values.lastName,
      email:values.email
    }

    let res = this.request('auth/register', data, 'post' )
  return res  
}

    /** login. */

  static async login({username,password}){
    

    let data = {
      username:username,
      password:password,
    }
    
      let res = this.request('auth/token', data, 'post' )
      
      return res
      
  }

  static async getUser(testuser){

    let res = this.request(`users/${testuser}`)

    return res

  }


  // static async apply(){
  //   // const {username, jobId} = values;
  //   const data = {username:username, id:jobId}

  //   let res = this.request(`users/${username}/jobs/${jobId}`, data, 'post')
  //   return res

  // }
 
  static async update(username,data){
    console.log(data)
    let res = this.request(`users/${username}`, data, 'patch')
    return res.user



  }


}



export default sfMuralsApi;