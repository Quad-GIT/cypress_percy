export const combination = (array) => {
    const combs = []
    let temp = []
    let i, j, k, l

    for (i = 0; i < array.length; i++) {
        for (j = i + 1; j < array.length; j++) {
            temp = []
            temp.push(array[i])
            temp.push(array[j])
            combs.push(temp)
        }
    }
    for (i = 0; i < array.length; i++) {
        for (j = i + 1; j < array.length; j++) {
            for (k = j + 1; k < array.length; k++) {
                temp = []
                temp.push(array[i])
                temp.push(array[j])
                temp.push(array[k])
                combs.push(temp)
            }
        }
    }
    for (i = 0; i < array.length; i++) {
        for (j = i + 1; j < array.length; j++) {
            for (k = j + 1; k < array.length; k++) {
                for (l = k + 1; l < array.length; l++) {
                    temp = []
                    temp.push(array[i])
                    temp.push(array[j])
                    temp.push(array[k])
                    temp.push(array[l])
                    combs.push(temp)
                }
            }
        }
    }

    return combs
}
