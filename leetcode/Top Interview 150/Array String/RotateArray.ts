/**
 Do not return anything, modify nums in-place instead.
 */
 function rotate(nums: number[], k: number): void {
    const array : number[] = [];
    nums.forEach((e,index)=>{
        array[(k+index)%nums.length] = e;
    })
    console.log(array);

    nums.length = 0;
    nums.push(...array);

};