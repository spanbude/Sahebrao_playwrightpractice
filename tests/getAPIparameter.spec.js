import{expect, test} from '@playwright/test'

test('API-1',async({request})=>{

const resp = await request.get('/booking/183');
await expect(resp.status()).toBe(200);
await expect(resp.ok()).toBeTruthy();

const data = await resp.json();
console.log(data);


await  expect(await resp.json()).toMatchObject({
  firstname: 'Josh',
  lastname: 'Allen',
  totalprice: 111,
  depositpaid: true,
  bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' }, 
  additionalneeds: 'super bowls'
})

await expect(data.firstname).toEqual("Josh")
    


});


// test('API-2',async({request})=>{

//     const resp=await request.get("/booking/183")
//     console.log(await resp.json());
    
// });








