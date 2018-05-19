import Toolkit from './toolkit';

export default class Generator {
    generate() {
        while (!this.internalGenerate()) {
            // TODO
        }
    }
    internalGenerate() {
        this.matrix = Toolkit.Matrix.createMatrix()
        this.orders = Toolkit.Matrix.createMatrix()
            .map(row => row.map((v, i) => i))
            .map(row => Toolkit.Matrix.shuffle(row))

        for (let i = 1; i <= 9; i++) {
            if(!this.fillNumber(i)) {
                return false
            }
        }
        return true
    }

    fillNumber(n) {
        return this.fillRow(n, 0)
    }

    fillRow(n, i) {
        if (i > 8) {
            return true
        }

        const row = this.matrix[i]
        const orders = this.orders[i]

        for (let index = 0; index < 9; index++) {
            const colIndex = orders[index];

            // 如果该位置存在值, 跳过
            if (row[colIndex]) {
                continue
            }

            // 检查该位置是否可以填写值
            if (Toolkit.Matrix.checkFillable(this.matrix, n, i, index)) {
                continue
            }

            row[colIndex] = n
            // 当前填写 n, 成功, 递归调用 fillRow() 填写下一行
            if (!this.fillRow(n, i + 1)) {
                row[colIndex] = 0
                continue
            }
            return true
        }
        return false
    }
}

const generate = new Generator()
generate.generate()
console.log()