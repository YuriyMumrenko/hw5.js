//---------task1-------------------
let buttonTask1 = document.querySelector('.enter_Task1');
buttonTask1.addEventListener('click', stringLength);

let inpString = document.querySelector('.inpString');

function stringLength(){
  alert('Количество символов в строке: ' + inpString.value.length);
  inpString.value = '';
}

//---------task2-------------------
let buttonTask2 = document.querySelector('.enter_Task2');
buttonTask2.addEventListener('click', imagesOutput);

let image = document.querySelector('.image');
let images = ['1', '2', '3', '4'];

function imagesOutput(){
 for (let i = 0; i < images.length; i++) {
  image.innerHTML += "<img src='images/" + images[i] + ".jpg'>"
  
} 
}
     //-------------очистка результатов вывода на экран----------

     let buttonCleanUp = document.querySelector('.enter_CleanUp');
     buttonCleanUp.addEventListener('click' , cleanUp);

     function cleanUp (){

      location.reload();
    }

//---------task3-------------------
let buttonTask3 = document.querySelector('.enter_Task3');
buttonTask3.addEventListener('click', domainOutput);

let inpUrl = document.querySelector('.inpUrl');

function domainOutput(){
  let str = inpUrl.value;
  if (str.search('http://') != -1) {
   alert('Ваш домен ' + str.slice(7));
 } else if(str.search('https://') != -1){
   alert('Ваш домен ' + str.slice(8));
 }    
 else{
  alert('Ваш домен ' + str);  
  
}
inpUrl.value = '';
}

//---------task4-------------------
let buttonTask4 = document.querySelector('.enter_Task4');
buttonTask4.addEventListener('click', urlOutput);

let inpUrl2 = document.querySelector('.inpUrl2');

function urlOutput(){
  let url = inpUrl2.value;
  let reg = /\w*\.ua/i;
  let result = url.match(reg);
  alert(result);
  inpUrl2.value = '';
}

//---------task5-------------------

let form = document.forms.formValidate;
let elems = form.elements;
let send = form.elements.send;
send.addEventListener('click', validateForm);
let error = 0;

function validateForm(event){
  event.preventDefault();
  error = 0;
  
  if (!elems.name.value) {
    error = 1;
    alert('Укажите имя!');
  }
  
  if (!elems.surname.value) {
    error = 1;
    alert(' Укажите фамилию!');
  }
  
  if (!elems.password.value) {
    error = 1;
    alert(' Укажите пароль!');
  }
  else if(elems.password.value.length < 5){
    error = 1;
    alert(' Пароль не менее 5 символов!');    
  }    
  
  if (!elems.email.value) {
    error = 1;
    alert(' Укажите email !');
  }
  else if (elems.email.value.search('@') == -1) {
    error = 1;
    alert(' Email должен содержать символ @.');
  }
  else if (elems.email.value.search(' ') != -1) {
    error = 1;
    alert(' Email не должен содержать пробелов!');
  } 

  for(let i=0; i < elems.length; i++){
    if(elems[i] != send){
      elems[i].value = elems[i].value.replace(/\s+/g,'');
    }
  }
  
  if(error === 1){
    return alert('Форма заполнена неправильно');        
  }
  else{
    alert('Форма отправлена');
    form.submit();
  }

}
// ---------task6-------------------
let inpChar = document.querySelector('.inpChar');

let buttonTask6 = document.querySelector('.enter_Task6'); 
buttonTask6.addEventListener('click', charOutput);


function charOutput(){
  alert('Код символа: ' + inpChar.value.charCodeAt());
  inpChar.value = '';
}
//--------------------------------