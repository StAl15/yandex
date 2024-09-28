/**
 * @param {{
 *  graph: Record<string, string[]>,
 *  startVertex: string,
 *  endVertex: string,
 * }}
 * @returns {string[]}
 */
/**
 * @param {{
 *  graph: Record<string, string[]>,
 *  startVertex: string,
 *  endVertex: string,
 * }}
 * @returns {string[]}
 */
/*
не проходит тесты
 */
function solution({ graph, startVertex, endVertex }) {
    function bfs(adj, s, t) {
        // Проверка наличия начальной и конечной вершин в графе
        if (!adj.hasOwnProperty(s) || !adj.hasOwnProperty(t)) {
            return [];
        }

        // Если начальная вершина совпадает с конечной
        if (s === t) {
            return [s];
        }

        // Инициализация очереди, множества посещённых вершин и объекта для отслеживания предшественников
        let queue = [s];
        let visited = new Set([s]);
        let shortest_path = {};

        while (queue.length > 0) {
            let v = queue.shift();

            // Проверяем, существуют ли соседи для текущей вершины
            if (!Array.isArray(adj[v])) {
                continue; // Если нет соседей, переходим к следующей вершине в очереди
            }

            for (let neighbor of adj[v]) {
                if (!visited.has(neighbor)) {
                    queue.push(neighbor);
                    visited.add(neighbor);
                    shortest_path[neighbor] = v;

                    // Если достигли конечной вершины, восстанавливаем путь
                    if (neighbor === t) {
                        let path = [t];
                        let current = t;
                        while (current !== s) {
                            current = shortest_path[current];
                            path.unshift(current);
                        }
                        return path;
                    }
                }
            }
        }

        // Если путь не найден, возвращаем пустой массив
        return [];
    }

    return bfs(graph, startVertex, endVertex);
}



solution({
    graph: {
        'Александра': ["Борис"],
        'Борис': ["Александра", "Светлана"],
        'Светлана': ["Борис"],
    },
    startVertex: "Александра",
    endVertex: "Светлана",
})

solution({
    graph: {
        "Артемий": ["Бронислав", "Дементий"],
        'Бронислав': ["Артемий", "Софья", "Дементий"],
        'Софья': ["Бронислав"],
        'Дементий': ["Артемий", "Бронислав"],
        'Фаина': ["Гаврила"],
        'Гаврила': ["Фаина"],
    },
    startVertex: "Артемий",
    endVertex: "Фаина",
})

solution({
    graph: {
        'Александра': ['Руалан'],
        'Борис': ["Александра", "Игорь"],
        'Руслан': ['Светлана'],
        'Игорь': ['Светлана'],
        'Светлана': ["Аркадий"],
        'Аркадий': []
    },
    startVertex: "Борис",
    endVertex: "Аркадий",
})
