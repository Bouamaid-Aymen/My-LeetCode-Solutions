var findMedianSortedArrays = function(nums1, nums2) {
    const merged = mergeSortedArrays(nums1, nums2);
    const totalLength = merged.length;
    const mid = Math.floor(totalLength / 2);

    if (totalLength % 2 === 0) {
        return (merged[mid - 1] + merged[mid]) / 2;
    } else {
        return merged[mid];
    }
};

function mergeSortedArrays(nums1, nums2) {
    let merged = [];
    let i = 0, j = 0;

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            merged.push(nums1[i]);
            i++;
        } else {
            merged.push(nums2[j]);
            j++;
        }
    }

    while (i < nums1.length) {
        merged.push(nums1[i]);
        i++;
    }

    while (j < nums2.length) {
        merged.push(nums2[j]);
        j++;
    }

    return merged;
}
