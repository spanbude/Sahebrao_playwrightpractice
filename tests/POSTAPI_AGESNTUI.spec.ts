import{test,request,expect} from '@playwright/test'


test('API againest UI ', async({request})=>{


    const resps=await request.post("https://api.demoblaze.com/addtocart",{
   data:
    {"id":"c69ed348-3f57-959d-c965-6e21f3c3cbd5",
        "cookie":"user=4a072cc0-9726-7e7d-10ce-a1aa537eaf08; ext_name=ojplmecpdpgccookcobabopnaifgidhf",
        "prod_id":5,"flag":false  }
   

    })


//assertions
    await expect(resps.status()).toBe(200)
    await expect(resps.statusText()).toBe("OK")
    await expect(resps.ok()).toBeTruthy();


    //validate UI side // assisgmnet 







})