// function maxProfit(prices: number[]): number {
//     let profit = 0;
//     for(let i=0; i<prices.length; i++){
//         for(let j=i+1;j<prices.length;j++){
//             if(profit<prices[j]-prices[i]){
//                 profit = prices[j]-prices[i];
//             }
//         }
//     }
//     return profit
// };

function maxProfit(prices: number[]): number {
    let profit=0;
    let min = prices[0];
    let index =0;
    prices.forEach((e,i)=>{
        if(min>e){
            min = e;
            index = i;
        }
        else{
            profit = Math.max(profit,prices[i]-min)
        }
    })
    return profit
};

