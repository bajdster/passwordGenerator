const generateButton = document.querySelector(".generate")
const copyButton = document.querySelector(".copy")
let info = document.querySelector('.info')

let password = document.querySelector(".password");


function generatePassword()
{
    let letters = 'abcdefghijklmnoprtuvxyz12334567890!@#$%^&*()';
    letters = letters.split("");

    let passValue = [];

    for(let i = 0; i<10; i++)
    {
        let randomNum = Math.floor(Math.random()*letters.length)
        passValue.push(letters[randomNum])
    }

   password.value = passValue.join("")
   info.classList.remove("active");
}

function copyPassword()
{
    if(password.value!="")
    {
        password.select();
        navigator.clipboard.writeText(password.value);
        info.innerHTML = "Password copied to clipboard!"
        info.classList.add("active");
        setTimeout(function()
        {
            info.classList.remove("active")
        }, 3000)
    }
    else
    {
        info.innerHTML = "Generate the password first!"
        info.classList.add("active");
        setTimeout(function()
        {
            info.classList.remove("active")
        }, 3000)
    }
}

generateButton.addEventListener('click', generatePassword)
copyButton.addEventListener("click", copyPassword)