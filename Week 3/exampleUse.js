var total = 0;
function sale(products){
    let sale = 0;
    products.forEach(product => {
        sale += product;
    });
    total += sale;
    return sale;
}

 let sale1 = [10, 20, 30];
 let sale2 = [20, 100, 90];
 let sale3 = [50, 50, 100];

 let sales = [sale1, sale2, sale3];

 for(let i = 0; i < sales.length(); i++){
     let actualSale = sale(sales[i]);
     if(actualSale > 200){
         console.log("Total in sale "+i.toString() + ": "+ actualSale);
     }
 }
