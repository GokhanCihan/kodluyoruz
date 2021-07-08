import axios from "axios";

const getData = (user_id) => {
    return new Promise(async (resolve, reject) => {
       
        if(Number.isInteger(user_id)){

            const { data: userData}   = await axios(`https://jsonplaceholder.typicode.com/users/${user_id}`);
            const { data: postData} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`)

            userData.posts = postData
            resolve(userData)

        }else{
            reject("Bir tamsayi girmediniz.")
        }
    })
}

export default getData;