# binary-search

## Time complexity O(log n) <== Awesome

## How does it work?
Binary search is a mush faster form of search rather than eliminating from one element at a time you can eliminate half of the remaining elements at a time.
*Only works on sorted arrays*

## Example
```
// check for 15

// [1,3,4,6,8,9,11,12,15,16,17,18,19]
//  |            |                  |
//  left        middle            right

// [11,12,15,16,17,18,19]
//     |         |     |
//    left    middle   right

// [12,15,16]
//   |  |  |
// left  | right 
//    middle  

```

## Pseudocode
1. This function accepts a sorted array of nums
2. Create a left pointer at the start of the array and a right pointer at the end of the array
3. while left pointer comes before the right pointer create a pointer in the middle 
4. If you find the value return the index 