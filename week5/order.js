let order = [{
    
    "Customer":"Mr.Lee",
    "Item":["A4 Paper","Ruler"],
    "Qty":[5,2],
    "Price":[120,25],
},
{
    "Customer":"Mr.Yue",
    "Item":["Flash Drive","A4 Paper"],
    "Qty":[2,3],
    "Price":[130,120],
},
{
    "Customer":"Mr.not",
    "Item":["Flash Drive","A4 Paper","Ruler"],
    "Qty":[2,5,3],
    "Price":[130,120,25],
}
]
//console.log(order[0].Item.length);
for(i=0;i<order.length;i++){
let sum =0;
for(let j=0;j<order [i].Item.length;j++){
    sum += order[i].Qty[j] * order[i].Price[j];
}
console.log(order[i].Customer,sum);
}