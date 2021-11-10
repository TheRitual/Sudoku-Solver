export const getInformationText = (option) => {
    switch (option) {
        case "given": return "Mode: Set Given Numbers";
        case "custom": return "Mode: Set Custom Numbers";
        case "solving": return "Mode: SOLVING!";
        default: return "Welcome to Sudoku Solver"
    }
}