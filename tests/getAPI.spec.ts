import {test,request} from '@playwright/test'

let baselink:any


test.beforeAll("before all test",async()=>{
    
    baselink= await request.newContext({
        baseURL: "https://restful-booker.herokuapp.com",
        extraHTTPHeaders:{
            Accept:"application/json" 
        }


    })
})



test.skip('API testing get call_1', async({request})=> //way 1 using request fixture
{ 

const response = await request.get("https://restful-booker.herokuapp.com/booking",{
    headers:{
        Accept:"application/json"

    }
});

console.log(await response.json())

});



test.skip('API testing get call_2', async({})=> ///way 2    here we use new context method but here scop is limited to the test case 
{
const url=await request.newContext({
    baseURL:"https://restful-booker.herokuapp.com",
    extraHTTPHeaders:{
       Accept:"application/json" 
    }
});

const response2= await url.get("/booking")
console.log(await response2.json());

});



test.skip('API testing get call_3', async({})=> // way 3  base url is define at the top level and story in global variable
{

 const response3= await baselink.get("/booking")
console.log(await response3.json());

});



test('API testing get call_4', async({request})=> // way 4  using  playwright config file 
{

const response4= await request.get("/booking")
console.log(await response4.json());

});