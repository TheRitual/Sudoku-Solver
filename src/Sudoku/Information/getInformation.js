export const getInformationText = (option) => {
    switch (option) {
        case "default": return "Mode: Set Default Numbers";
        case "custom": return "Mode: Set Custom Numbers";
        default: return "Welcome to Sudoku Solver"
    }
}