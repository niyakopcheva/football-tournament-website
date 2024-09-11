export default function stylePlayerPosition(position) {
    let color = "";
    switch (position) {
        case "GK":
            color = 'grey';
            break;
        case "DF":
            color = 'green';
            break;
        case "MF":
        color = 'blue';
            break;
        case "FW":
        color = 'red';
            break;
        default:
            color = 'black';
            break;
    }

    return color;
}