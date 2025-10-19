import{test,request,expect} from '@playwright/test'

test('Header', async({request})=>{

   const reps =await request.get("https://restful-booker.herokuapp.com/booking/1")

   //way1
   const headervalue = await reps.headers();   //headers methos 
   console.log(headervalue)
   
   await expect(headervalue.server).toEqual("Heroku")

//    await expect(headervalue["content-length"]).toEqual("139")  //here content lenght is separated by - that why use this way to verify 

console.log("####################################################################")
    //way 2

    const arryvalue=reps.headersArray()
    console.log(arryvalue)

       await expect(arryvalue.length).toBe(10)




});