const celsiusInput = document.querySelector(".cel input");
const fahrenheitInput = document.querySelector(".feh input");
const kelvinInput = document.querySelector(".kel input");



celsiusInput.addEventListener("input", ()=>{
    const c = parseFloat(celsiusInput.value);
    const f = c*(9/5)+32;
    const k = c+273.15;
    fahrenheitInput.value  = `${f.toFixed(2)}`;
    kelvinInput.value = `${k.toFixed(2)}`;
});

fahrenheitInput.addEventListener("input", ()=>{
    const f = parseFloat(fahrenheitInput.value);
    const c = (f-32)*(5/9);
    const k = c+273.15;
    celsiusInput.value  = `${c.toFixed(2)}`;
    kelvinInput.value = `${k.toFixed(2)}`;
});

kelvinInput.addEventListener("input", ()=>{
    const k = parseFloat(kelvinInput.value);
    const c = k-273.15;
    const f = c*(9/5)+32;
    fahrenheitInput.value  = `${f.toFixed(2)}`;
    celsiusInput.value = `${c.toFixed(2)}`;
});



// const celsiusInput = document.querySelector(".cel input");
// const fahrenheitInput = document.querySelector(".feh input");
// const kelvinInput = document.querySelector(".kel input");



// celsiusInput.addEventListener("input", ()=>{
//     const c = parseFloat(celsiusInput.value);
//     if (!isNaN(c)){
//         const f = c*(9/5)+32;
//         const k = c+273.15;
//         fahrenheitInput.value  = `${f.toFixed(2)}`;
//         kelvinInput.value = `${k.toFixed(2)}`;
//     }
// });

// fahrenheitInput.addEventListener("input", ()=>{
//     const f = parseFloat(fahrenheitInput.value);
//     if (!isNaN(f)){
//         const c = (f-32)*(5/9);
//         const k = c+273.15;
//         celsiusInput.value  = `${c.toFixed(2)}`;
//         kelvinInput.value = `${k.toFixed(2)}`;
//     }
// });

// kelvinInput.addEventListener("input", ()=>{
//     const k = parseFloat(kelvinInput.value);
//     if (!isNaN(k)){
//         const c = k-273.15;
//         const f = c*(9/5)+32;
//         fahrenheitInput.value  = `${f.toFixed(2)}`;
//         celsiusInput.value = `${c.toFixed(2)}`;
//     }
// });