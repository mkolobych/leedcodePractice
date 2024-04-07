//Array
function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) return 0;
    let uniqueIndex = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[uniqueIndex]) {
            uniqueIndex++;
            nums[uniqueIndex] = nums[i];
        }
    }
    return uniqueIndex + 1;
}
const nums: number[] = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4];
const k: number = removeDuplicates(nums);
console.log("Number of unique elements:", k);
console.log("Updated array:", nums.slice(0, k));

//string
function reverseString(s: string[]): void {
    let left: number = 0;
    let right: number = s.length - 1;

    while (left < right) {
        const temp: string = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
        right--;
    }
}
const input: string[] = ["h", "e", "l", "l", "o"];
reverseString(input);
console.log(input);