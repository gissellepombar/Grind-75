/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function twoSum (nums, target) {
    for (let i = 0; i < nums.length; i++){
        for (let j = i + 1; j < nums.length; j++){
        if (nums[i] + nums[j] === target){
            return [i, j];
        }
    }
} 
}
//O(n^2)

function twoSum2(nums, target) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map[complement] !== undefined) {
            return [map[complement], i];
        }
        map[nums[i]] = i;
    }
}

//O(n)

//need to rereview this ***
