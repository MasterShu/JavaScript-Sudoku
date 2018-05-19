import toolkit from "../core/toolkit";

export default class Grid {
    constructor(container) {
        this._$container = container
    }

    build() {
        const matrix = toolkit.Matrix.createMatrix()

        const rowGroupclasses = ['row_g_top', 'row_g_middle', 'row_g_bottom']
        const colGroupclasses = ['col_g_left', 'col_g_center', 'col_g_right']

        const $cells = matrix.map(rowValue => rowValue.map((cellValue, colIndex) => {
            return $("<span>")
                .addClass(colGroupclasses[colIndex % 3])
                .text(cellValue)
        }))

        const $divArray = $cells
            .map(($spanArray, rowIndex) => {
                return $("<div>")
                    .addClass("row")
                    .addClass(rowGroupclasses[rowIndex % 3])
                    .append($spanArray)
            })

        this._$container.append($divArray)
    }

    layout() {
        const width = $("span:first", this._$container).width()
        $('span', this._$container)
            .height(width)
            .css({
                "line-height": `${width}px`,
                "font-size": width < 32 ? `${width/2}px` : ''
            })
    }
}
