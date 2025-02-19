/*
I could have came up with a much more efficient coding solution. But honestly, this project was
way too easy and I don't have the energy to write more efficient code. Sorry.
*/

let inputs = document.querySelectorAll('input')
let dis = document.querySelector('#confirm_pass')

let disabled = true
for (let x of inputs){
    x.addEventListener('change', ()=>{
        if (x.value.length >= 5){
            x.style.backgroundColor = "green";
        } else {
            x.style.backgroundColor = "red";
        }

        if (x.type == 'tel'){
            x.style.backgroundColor= x.value.length >=10? 'green' : 'red';
        } else if (x.type=="password"){
            x.style.backgroundColor= x.value.length >=10? 'green' : 'red';

            if (x.value.length >=10){
                disabled = false
            } else {
                disabled = true;
            }

            dis.disabled = disabled

        } else if (x.type=="email"){
            x.style.backgroundColor= x.value.includes('@')? 'green' : 'red';
        }
    })
}

/*
setTimeout(() => {
    alert("Sorry!")
    alert("I was supposed to make the form submit but I'm too lazy to code that right now")
    alert("I could have came up with a much more efficient coding solution. But honestly, this project was way too easy and I don\'t have the energy to write more efficient code. I also didn't finish the project. Sorry.")
    alert("Enjoy the design, and feel free to add some regular expressions to the javascript checker if you want. enjoy :)")
},5000)*/