// Assume you are an awesome parent and want to give your children some cookies. But, you should give each child at most one cookie.

// Each child i has a greed factor g[i], which is the minimum size of a cookie that the child will be content with; and each cookie j has a size s[j]. If s[j] >= g[i], we can assign the cookie j to the child i, and the child i will be content. Your goal is to maximize the number of your content children and output the maximum number
function findContentChildren(greeds, cookies) {
    greeds.sort((a, b) => a - b);
    cookies.sort((a, b) => a - b);

    let childIndex = 0;
    let cookieIndex = 0;

    let contentChildren = 0;

    while (childIndex < greeds.length && cookieIndex < cookies.length) {
        if (cookies[cookieIndex] >= greeds[childIndex]) {
            contentChildren++;
            childIndex++; 
        }
        cookieIndex++;
    }

    return contentChildren;
}


