let cel = document.getElementById("cel");

let fah = document.getElementById("fah");

cel.addEventListener('input', () => {
    // console.log("cel changed");

    let c = cel.value;
    let f = (c * 9/5) + 32;
    if(!Number.isInteger(f)){
        f = f.toFixed(3);
    }
    fah.value = f; 
});

fah.addEventListener('input', () => {
    // console.log("fah changed");

    let f = fah.value;
    let c = (f - 32) * 5/9;
    if(!Number.isInteger(f)){
        c= c.toFixed(3);
    }
    cel.value = c;
}); 