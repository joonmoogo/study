function lengthOfLastWord(s: string): number {
    return(s.split(' ').filter((e)=>e !='')[s.split(' ').filter((e)=>e !='').length-1].length);
};