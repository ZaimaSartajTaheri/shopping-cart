const btns=document.querySelectorAll(".btn");

const tax=document.querySelector("#tax").innerText;
const taxWithoutComma=tax.replace(",","");
const total=document.querySelector("#total").innerText;
const totalWithoutComma=total.replace(",","");
const subTotal=document.querySelector("#subTotal").innerText;
const subTotalWithoutComma=subTotal.replace(",","");

let subTotalNum=parseFloat(subTotalWithoutComma);

let taxNum=parseFloat(taxWithoutComma);
let totalNum=parseFloat(totalWithoutComma);
const crosses=document.querySelectorAll(".remove-item");

window.addEventListener("load",function(){
    const prices=document.querySelectorAll(".price");
    prices.forEach(function(price){
        const priceWithoutComma=price.innerText.replace(",","");
        intPrice=parseFloat(priceWithoutComma);
        //console.log(intPrice);
        subTotalNum+=intPrice;
        

    });
    const subTotalNumWithComma=thousands_separators(subTotalNum);
     //console.log(subTotalNum);
     document.querySelector("#subTotal").innerText=subTotalNumWithComma;
     finalCalc(subTotalNum);

});


function finalCalc(subtotal){
    taxNum=subtotal*0.1;  
    //console.log(taxNum);
    const taxNumWithComma=thousands_separators(Math.round(taxNum));
    document.querySelector("#tax").innerText=taxNumWithComma;

    totalNum=subtotal+taxNum;
    const totalNumWithComma=thousands_separators(totalNum);
    document.querySelector("#total").innerText=totalNumWithComma;
    }

function thousands_separators(num)
  {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  }



btns.forEach(function(btn){
    
             
    
   btn.addEventListener("click",function(e){
   
    
    
    const classes=e.currentTarget.classList;
    //console.log(count);

    const price=e.currentTarget.parentElement.nextElementSibling.childNodes[1];
        //console.log(price);
        const priceWithoutComma=price.innerText.replace(",","");
        //console.log(priceWithoutComma);
        const priceNum=parseFloat(priceWithoutComma);
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
        const incPriceWithComma=thousands_separators(incPrice);
        e.currentTarget.parentElement.nextElementSibling.lastChild.innerText=incPriceWithComma;
        //console.log('incPrice',incPrice);
        
        
        subTotalNum+=priceNum;
        //console.log('subTotal',subTotalNum);
        const subTotalNumWithComma=thousands_separators(subTotalNum);
        document.querySelector("#subTotal").innerText=subTotalNumWithComma;

       
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
            const decPriceWithComma=thousands_separators(decPrice);
        //console.log(decPrice);
        e.currentTarget.parentElement.nextElementSibling.lastChild.innerText=decPriceWithComma;
        }
        
        subTotalNum-=priceNum;
        const subTotalNumWithComma=thousands_separators(subTotalNum);
        //console.log('subTotal',subTotalNum);
        document.querySelector("#subTotal").innerText=subTotalNumWithComma;

        finalCalc(subTotalNum);

        
    }

    else if(qtyMinusNum<=1)
    {
        
        
        decPrice=qtyMinusNum*priceNum;
        const decPriceWithComma=thousands_separators(decPrice);
        e.currentTarget.parentElement.nextElementSibling.lastChild.innerText=decPriceWithComma;
       
        
        
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
            const removeValueWithoutComma=removeValue.replace(",","");
            const removeValueNum=parseFloat(removeValueWithoutComma);
            //console.log(removeValueNum);

            const initialAmount= e.currentTarget.previousElementSibling.childNodes[1].innerText;
            const initialAmountWithoutComma=initialAmount.replace(",","");
                  const initialAmountNum=parseFloat(initialAmountWithoutComma);
                  //console.log(initialAmountNum);

                  if(isNaN(removeValueNum)){
                    subValue=initialAmountNum;  
                    //console.log(subValue);

                 }else{
                    subValue=removeValueNum; 
                    //console.log(subValue);

                 }

                 const mainValue=document.querySelector("#subTotal").innerText;
                 const mainValueWithoutComma=mainValue.replace(",","");
                 const mainValueNum=parseFloat(mainValueWithoutComma);
                // console.log(mainValue);
                const final=mainValueNum-subValue;
                const finalWithComma=thousands_separators(final);
                document.querySelector("#subTotal").innerText=finalWithComma;
                finalCalc(final);


            
           e.currentTarget.parentElement.parentElement.parentElement.style.display="none";
        });
    });



