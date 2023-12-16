<?php 
// This file includes the solutions of problems 1.1, 1.2 and 1.3

echo '<h1>Solutions</h1>';


echo '<h2>1.1) selection sort algorithm</h2>';
function selectionSort($arr) {
    $n = count($arr);

    for ($i = 0; $i < $n - 1; $i++) {
        $minIndex = $i;

        for ($j = $i + 1; $j < $n; $j++) {
            if ($arr[$j] < $arr[$minIndex]) {
                $minIndex = $j;
            }
        }

        if ($minIndex !== $i) {
            // Swap $arr[$i] and $arr[$minIndex]
            list($arr[$i], $arr[$minIndex]) = array($arr[$minIndex], $arr[$i]);
        }
    }

    return $arr;
}
// Given list
$inputArray = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
$sortedArray = selectionSort($inputArray);
print_r($sortedArray);


echo '<h2>1.2) linear search</h2>';
function linearSearch($arr, $target) {
    foreach ($arr as $num) {
        if ($num == $target) {
            return true;
        }
    }
    return false;
}

// Given list
$nums = [5, 9, 3, 1, 2, 8, 4, 7, 6];
$targetNumber = 7;

$result = linearSearch($nums, $targetNumber);

echo $result ? 'true' : 'false';



echo '<h2>1.3) binary search</h2>';
function binarySearch($arr, $target) {
    $low = 0;
    $high = count($arr) - 1;

    while ($low <= $high) {
        $mid = (int)(($low + $high) / 2);

        if ($arr[$mid] == $target) {
            return true; // Target found
        } elseif ($arr[$mid] < $target) {
            $low = $mid + 1; // Search in the right half
        } else {
            $high = $mid - 1; // Search in the left half
        }
    }

    return false; // Target not found
}

// Given list
$nums = [5, 9, 3, 1, 2, 8, 4, 7, 6];

// Sort the list
sort($nums);

// Test the binary search
$targetNumber = 7;

$result = binarySearch($nums, $targetNumber);

echo $result ? 'true' : 'false';

?>