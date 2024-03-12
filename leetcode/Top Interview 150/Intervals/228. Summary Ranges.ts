function summaryRanges(nums: number[]): string[] {
    let temp: number[] = [];
    let result: string[] = [];

    for (let i = 0; i < nums.length; i++) {
        if(nums[i]+1 == nums[i+1]){
            temp.push(nums[i]);
        }
        else{
            temp.push(nums[i]);
            temp.length!=1?result.push(`${temp[0]}->${temp[temp.length-1]}`):result.push(`${temp[0]}`);
            temp=[];
        }
    }
    console.log(temp);
    console.log(result);
    return result
};

