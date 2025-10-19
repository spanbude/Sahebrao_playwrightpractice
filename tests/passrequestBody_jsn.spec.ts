import {test,request,expect} from '@playwright/test'
import apijson  from "../test-data/post.json"

test.skip('payload vai jsnfile', async({request})=>{

const swapnil= await request.post("https://restful-booker.herokuapp.com/booking",{
      

     data:{
    "firstname" : "Jim",
    "lastname" : "Brown",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"
}



})

const data=await swapnil.json()
console.log(data)
await expect(data.booking ).toMatchObject({
    "firstname" : "Jim",
    "lastname" : "Brown",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"
})


   

    
})




test('request body via json file', async({request})=>{

const swapnil= await request.post("https://restful-booker.herokuapp.com/booking",{data:apijson.newdata1})
const data=await swapnil.json()
console.log(data)
expect(data.booking).toMatchObject(apijson.newdata1)





})




    






