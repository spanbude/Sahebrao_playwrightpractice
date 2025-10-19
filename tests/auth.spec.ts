import { test, expect } from '@playwright/test';

test('auth - update booking', async ({ request }) => {


const resp = await request.put("https://restful-booker.herokuapp.com/booking/1",{
    headers:{Authorization:"YWRtaW46cGFzc3dvcmQxMjM=] Basic"},

    data:{
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

expect (await resp.status()).toBe(200)
   


})