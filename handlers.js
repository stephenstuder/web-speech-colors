import { isValidColor } from "./colors";

export function handleResult({ results }) {
    let words = results[results.length - 1][0].transcript;
    let color = words.toLowerCase();
    //removes white space
    color = color.replaceAll(" ", "");
    if (!isValidColor(color)) return;
    const colorSpan = document.querySelector(`.${color}`);
    colorSpan.classList.add("got");
    console.log("This is a valid color!");
    console.log(colorSpan);
    document.body.style.backgroundColor = color;
}
