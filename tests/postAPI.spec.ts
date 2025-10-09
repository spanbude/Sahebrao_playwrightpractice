import {test,request, expect} from '@playwright/test'


test('post call-1',async({request})=>{

const sresp=await request.post("https://restful-booker.herokuapp.com/booking",{
     data:
     {
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
const swap=await sresp.json()
console.log(swap)


//assertions 
await expect(await sresp.status()).toBe(200)
await expect(await sresp.statusText()).toBe("OK")
await expect(await sresp.ok()).toBeTruthy();


await expect(swap.booking).toMatchObject({
    firstname: 'Jim',
    lastname: 'Brown',
    totalprice: 111,
    depositpaid: true,
    bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
    additionalneeds: 'Breakfast'
  })

await expect(swap.booking.firstname).toEqual("Jim")



})



test('post call-1',async({request})=>{

 const sresp = await request.post('https://restful-booker.herokuapp.com/booking', {
    headers: {
      'Content-Type': 'application/json'   
    },
    data: {
      firstname: 'Jim',
      lastname: 'Brown',
      totalprice: 111,
      depositpaid: true,
      bookingdates: {
        checkin: '2018-01-01',
        checkout: '2019-01-01'
      },
      additionalneeds: 'Breakfast'
    }
  });





  

})