import {isValidColor} from './colors';

function logWords(results){
    //console.log(results[results.length-1][0].transcript)
}

export function handleResult({results}){
    logWords(results) 
    let words = results[results.length-1][0].transcript;
    //check if it is a valid color
    //lowercase everything
    let color = words.toLowerCase();
    color = color.replaceAll(' ', '');
    //strip any spaces out
    //if it is valid then show the ui
    if(!isValidColor(color)) return;

    const colorSpan = document.querySelector(`.${color}`);
    colorSpan.classList.add('got')

    console.log('This is a valid color!')
    console.log(colorSpan)
    document.body.style.backgroundColor = color
}
