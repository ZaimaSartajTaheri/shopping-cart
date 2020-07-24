const btns=document.querySelectorAll(".btn");

const tax=document.querySelector("#tax").innerText;
const total=document.querySelector("#total").innerText;
const subTotal=document.querySelector("#subTotal").innerText;

let subTotalNum=parseFloat(subTotal);
let taxNum=parseFloat(tax);
let totalNum=parseFloat(total);
const crosses=document.querySelectorAll(".remove-item");


function finalCalc(subtotal){
    taxNum=subtotal*0.1;  
    //console.log(taxNum);
    document.querySelector("#tax").innerText=Math.round(taxNum);

    totalNum=subtotal+taxNum;
    document.querySelector("#total").innerText=totalNum;
    }



btns.forEach(function(btn){
    
             
    
   btn.addEventListener("click",function(e){
   
    
    
    const classes=e.currentTarget.classList;
    //console.log(count);

    const price=e.currentTarget.parentElement.nextElementSibling.childNodes[1];
        //console.log(price);
        const priceNum=parseFloat(price.innerText);
        //console.log(priceNum);

        price.style.display="none";
    
    
    
    if(classes.contains("plusBtn")){
        //console.log("plusBtn I am");
        //e.currentTarget.disabled=false;  
        const qtyPlus=e.currentTarget.previousElementSibling.value;
        
        let qtyPlusNum=parseFloat(qtyPlus);
        qtyPlusNum++;
    
        e.currentTarget.previousElementSibling.value=qtyPlusNum;

            //console.log(e.currentTarget.parentElement.nextElementSibling.childNodes);
            
           
             // console.log(btn);
           
        


        
        const incPrice=priceNum*qtyPlusNum;
        e.currentTarget.parentElement.nextElementSibling.lastChild.innerText=incPrice;
        //console.log('incPrice',incPrice);
        
        
        subTotalNum+=priceNum;
        //console.log('subTotal',subTotalNum);
        document.querySelector("#subTotal").innerText=subTotalNum;

       
        finalCalc(subTotalNum);
       
    

        
        
           
    }
    else if(classes.contains("minusBtn")){
        //console.log("minusBtn I am");
       // e.currentTarget.disabled = true;
        const qtyMinus=e.currentTarget.nextElementSibling.value;

        
        

        let qtyMinusNum=parseFloat(qtyMinus);

       
        //e.currentTarget.disabled=false;  
            
        

        
        
        if(qtyMinusNum>1){
            
                //minusBtn.style.cursor="pointer";
               
                   
                
                
        
            qtyMinusNum--;
            e.currentTarget.nextElementSibling.value=qtyMinusNum;
      
   
     

        let decPrice=qtyMinusNum*priceNum;

        if(decPrice>0){
        
        //console.log(decPrice);
        e.currentTarget.parentElement.nextElementSibling.lastChild.innerText=decPrice;
        }
        
        subTotalNum-=priceNum;
        //console.log('subTotal',subTotalNum);
        document.querySelector("#subTotal").innerText=subTotalNum;

        finalCalc(subTotalNum);

        
    }

    else if(qtyMinusNum<=1)
    {
        
        
        decPrice=qtyMinusNum*priceNum;
        e.currentTarget.parentElement.nextElementSibling.lastChild.innerText=decPrice;
       
        
        
            e.currentTarget.disabled=true;
    }

    e.currentTarget.disabled=false;
        
    }
        
    



    
    //console.log(subTotalNum); 

});

});

crosses.forEach(function(cross){
    //console.log(cross);
    let subValue=0;
        cross.addEventListener("click",function(e){
            //console.log(e);
            const removeValue=e.currentTarget.previousElementSibling.lastChild.innerText;
            const removeValueNum=parseFloat(removeValue);
            //console.log(removeValueNum);

            const initialAmount= e.currentTarget.previousElementSibling.childNodes[1].innerText;
                  const initialAmountNum=parseFloat(initialAmount);
                  //console.log(initialAmountNum);

                  if(isNaN(removeValueNum)){
                    subValue=initialAmountNum;  
                    //console.log(subValue);

                 }else{
                    subValue=removeValueNum; 
                    //console.log(subValue);

                 }

                 const mainValue=document.querySelector("#subTotal").innerText;
                 const mainValueNum=parseFloat(mainValue);
                // console.log(mainValue);
                const final=mainValueNum-subValue;
                document.querySelector("#subTotal").innerText=final;
                finalCalc(final);


            
           e.currentTarget.parentElement.parentElement.parentElement.style.display="none";
        });
    });



