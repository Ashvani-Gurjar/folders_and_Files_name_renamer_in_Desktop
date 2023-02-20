const fs = require('fs');
const path = require('path');
const replacethis = "Ashvani";
const replacewith = "Gurjar";
const preview = false;
const folder = __dirname;


try {
   fs.readdir(folder,(err,data)=>{
     for(index =0 ; index < data.length ; index++){
            const item = data[index];
            let olditem = path.join(folder,item);
            let newitem = path.join(folder,item.replaceAll(replacethis,replacewith));
           if(!preview){
                fs.rename(olditem ,newitem,()=>{
                     console.log("Rename successful");
                 }) 
            }   
            else{
               if("data/"+item !== newitem){
                    console.log(""+item  +" rename to :" + newitem )
               }
            }
        }
   });

} catch (err) {
  console.error(err);
}
