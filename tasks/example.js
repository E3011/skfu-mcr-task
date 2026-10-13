
/*
    Пример: сортировка вставками
    insertionSort(arr) принимает массив и возвращает новый массив,
    отсортированный по возрастанию
    Исходный массив не мутируется
    insertionSort([5, 2, 4, 6, 1, 3]) -> [1, 2, 3, 4, 5, 6]
*/

export const insertionSort = (arr) => {
    const result = [...arr];

    for (let i = 1; i < result.length; i += 1) {
        const current = result[i];
        let j = i - 1;

        while (j >= 0 && result[j] > current) {
            result[j + 1] = result[j];
            j -= 1;
        }

        result[j + 1] = current;
    }

    return result;
};
