function twoSum(nums: number[], target: number): number[] {
    for(let i=0; i<nums.length; i++){
        for(let j=0; j<nums.length; j++){
            if(j==i){
                break;
            }
            else{
                if(nums[i] + nums[j]==target){
                    return [i,j]
                }   
            }
        }
    }
    return [0,0]

};