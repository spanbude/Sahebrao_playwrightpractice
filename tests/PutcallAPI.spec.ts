import{test,request,expect} from '@playwright/test'


test.skip('get call api ', async({request})=>
{


    const resp=await request.get("https://restful-booker.herokuapp.com/booking/1")
    console.log(await resp.json())



})





test('updating above deatils using put call ', async({request})=>
{

    const resp=await request.put("https://restful-booker.herokuapp.com/booking/1",{

         headers:{
                 Authorization:"YWRtaW46cGFzc3dvcmQxMjM=] Basic"

                }, 

     data:
         {
    "firstname" : "James",
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

//  console.log(await resp.json())

const update=await resp.json()
console.log(update)


await expect(update.status()).toBe(200)
await expect(update.statusText()).toBe("OK")





})