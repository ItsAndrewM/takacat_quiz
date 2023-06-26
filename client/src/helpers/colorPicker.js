export const colorPicker = (num) => {
    let color = "";
    if (num <= 33) {
        color = "red";
    }
    else if (num > 33 && num <= 66) {
        color = "yellow";
    }
    else {
        color = "limegreen";
    }
    return color
}