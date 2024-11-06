// 517. Super Washing Machines

const findMinMoves = machines => {
    let load, total = 0, max = 0;
    let sum = machines.reduce((a, x) => a + x);
    let target = sum / machines.length;
    if (target % 1) return -1;

    machines.forEach(n => {
        load = n - target;
        total += load;
        max = Math.max(max, Math.abs(total), load);
    })
    return max;
}