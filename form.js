const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password2=document.getElementById('password2');

function showError(input,message){
    const formControl=input.parentElement;
    formControl.className='form-control error';
    const small=formControl.querySelector('small');
    small.innerText=message;
}
function showSucess(input){
    const formControl=input.parentElement;
    formControl.className='form-control success';
}
function checkEmail(input){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(re.test(input.value.trim())){
        showSucess(input);
    }
    else{
        showError(input,'Email is not valid');
    }
    }

function checkRequired(inputArr){
    inputArr.forEach(function(input) {
        if(input.value.trim()===''){
            showError(input,`${getFieldName(input)} is required`);
        }
        else{
            showSucess(input)
        }
    });
}

function getFieldName(input){
    return input.id.charAt(0).toUpperCase()+input.id.slice(1);
}

form.addEventListener('submit',function(e){
    e.preventDefault();
    checkRequired([username,email,password,password2]);
    checklength(username,7,15);
    checklength(password,8,15);
    checkEmail(email);
    checkPassword(password,password2);
});


function checklength(input,min,max){
    if(input.value.length < min){
        showError(input,`${getFieldName(input)} must be at least ${min} characters`);
    }
    else if(input.value.length > max)
    {
        showError(input,`${getFieldName(input)} must be less than ${max} characters`);
    }
    else{
        
        showSucess(input);
    }
}

function checkPassword(input1,input2){
    if(input1.value===input2.value){
        showSucess(password2);
    }
    else{
        showError(input2,'Passwords do not match')
    }
}
