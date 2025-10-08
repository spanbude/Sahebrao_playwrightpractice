import{test} from '@playwright/test'

test('API-1',async({request})=>{

    const resp=await request.get("/booking/183")
    console.log(await resp.json());




});