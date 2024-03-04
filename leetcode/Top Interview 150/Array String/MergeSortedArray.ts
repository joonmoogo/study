/**
 Do not return anything, modify nums1 in-place instead.
 */
 function merge(nums1: number[], m: number, nums2: number[], n: number): void {

    let i:number=0,j:number=0
    let result:number[] = [];

    while(i<m && j<n){
        if(m==0 || n==0){
            break;
        }
        if(nums1[i]<nums2[j]){
            result.push(nums1[i]);
            i++;
        }
        else{
            result.push(nums2[j]);
            j++;
        }
    }
    while(i<m){
        result.push(nums1[i]);
        i++;
    }
    while(j<n){
        result.push(nums2[j]);
        j++;
    }
    nums1.length = 0;
    nums1.push(...result)
};