/**
 *
 * @param word1 :string
 * @param word2 :string
 * @returns number
 */
const calcDiff = (word1, word2) => {
    let n = 0;
    for (let i = 0; i < word1.length; i++) {
        if (word1[i] !== word2[i]) {
            n++;
        }
    }
    return n;
}

const graph = {};
const visited = [];
/**
 *
 * @param st :string
 * @param end :string
 * @param root :string
 * @param words :string[]
 */
const fn = (st, end, words, root = null) => {
    const sorted_distances = words.sort((a, b) => calcDiff(st, a) > calcDiff(st, b) ? 1 : -1);

    // const distances = words.reduce((acc, el) => {
    //     acc[el] = Infinity;
    // }, {});
    //
    // distances[st] = 0;
    console.log(graph)

    // init edges
    sorted_distances.forEach(el => {
        if (calcDiff(st, el) === 1){
            if (!graph[st]) {
                graph[st] = {};
            }

            graph[st][el] = {
                distance: calcDiff(st, el),
                root
            };
            if (el === end){
                console.log(graph)
            }
        }
    });

    // recursively update nodes
    Object.keys(graph[st]).forEach(el => {
        fn(el, end, words, st);
    })

}

fn('кот', 'сок', ['ток', "сон", "кол", "сот"]) //кот -> сот -> сок
console.log(graph);
