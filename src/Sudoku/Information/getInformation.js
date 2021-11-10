export const getInformationText = (option) => {
    switch (option) {
        case "given": return "Mode: Set Given Numbers";
        case "custom": return "Mode: Set Custom Numbers";
        default: return "Welcome to Sudoku Solver"
    }
}