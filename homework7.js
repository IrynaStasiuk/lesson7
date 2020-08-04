// Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так,
//  чтобы при клике на кнопку исчезал элемент с id="text".
let text=document.getElementById('text')
let textbtn=document.getElementById('textButton');
textbtn.onclick=ev=>text.hidden=true

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
let hideBtn=document.getElementById('but');
hideBtn.onclick=ev=>hideBtn.hidden=true

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту 
// та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let ageInput=document.getElementById('age');
let ageButton=document.getElementById('saveAge')
let userAge= ageInput.value
ageButton.onclick=ev=>{
    let userAge= ageInput.value
    userAge<18 ?alert('you are not 18'):alert('you adult')
}

// - Создайте меню, которое раскрывается/сворачивается при клике
let menu=document.getElementById('menu')
let menuList=document.getElementById('hideMenu')
let h4=document.getElementById('h4')
let list=false
h4.onclick=(ev)=>{ 
    if(list){
        menuList.style.display='block';
        list=false;
    }else{
    menuList.style.display='none';
    list=true}
}

// - Создать список комментариев , пример объекта коментария -
//  {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.
let commentArray=[
    {title : 'lorem 1', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem 2', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem 3', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem 4', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem 5', body:'lorem ipsum dolo sit ameti'}
  
]
let content=document.getElementById('content')
commentArray.forEach(comment=>{
    let div=document.createElement('div');
    let h3=document.createElement('h3');
    let par=document.createElement('p');
    let btn=document.createElement('button');
    h3.innerText=comment.title;
    par.innerText=comment.body;
    btn.innerText='Hide text'
    btn.onclick=(ev=>{
        par.hidden?par.hidden=false:par.hidden=true
    })
    
    div.appendChild(h3);
    div.appendChild(par);
    div.appendChild(btn);
    content.appendChild(div);

})

// - створити 2 форми  по 2 інпути в кожній. 
// ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
let formsButton=document.getElementById('enter');

formsButton.onclick=(ev=>{
    console.log(document.forms.form1.inp1.value);
    console.log(document.forms.form1.inp2.value);
    console.log(document.forms.form2.inp21.value);
    console.log(document.forms.form2.inp22.value);
})

// - Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кліькіть ячеєк в кожній строці.
// Третій параметр визначає елемент в який потрібно таблицю додати.
let tab=document.getElementById('tab');
function createTable(rows,cols,tag){
    let table=document.createElement('table')
    for (let i = 0; i < rows; i++) {
        const tr=document.createElement('tr')
        for (let j = 0; j < cols; j++) {
            const td=document.createElement('td')
            td.innerText= i 
            tr.appendChild(td) 
        }
        table.appendChild(tr)
    }
    tag.appendChild(table)
}
createTable(5,5,tab)

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вміст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додаткова частина для завдання)

let tab2=document.getElementById('tab2');
let forma=document.forms.table2
console.log(table2);
let table22=document.createElement('table22')
let array=forma.submit.onclick=(ev)=>{
    ev.preventDefault()
    let rows2=forma.rows.value
    let cols2=forma.cols.value
    let text=forma.tabText.value
    
    function createNewTable(rows2,cols2,text){
        let table22=document.createElement('table22')
        for (let i = 0; i < rows2; i++) {
            const tr=document.createElement('tr')
            for (let j = 0; j < cols2; j++) {
                const td=document.createElement('td')
                td.innerText=text 
                tr.appendChild(td) 
            }
            table22.appendChild(tr)
        }
        tab2.appendChild(table22)
    }
    createNewTable(rows2,cols2,text)


}
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

let imgArray=[
    {
        id : 1,
        img_url:'images-john-wick/keanuReeves.jpg'
    },
    {
        id : 2,
        img_url:'images-john-wick/johnwick-poster-01.jpg'
    },
    {
        id:3,
        img_url:"images-john-wick/johnwick2-poster-01.jpg"
    },
    {
        id:4,
        img_url:"images-john-wick/john-wick-3-movies-poster-01.jpg"
    }
]

let carusel=document.getElementById("carusel");
let img=document.createElement('img');

let btn1=document.createElement('button');
let btn2=document.createElement('button');

btn1.innerText='Left';
btn2.innerText='Right';
let index=0;
img.src=imgArray[index].img_url;
carusel.appendChild(img);
carusel.appendChild(btn1);
carusel.appendChild(btn2);
btn1.onclick=()=>{
    index-1<0
    ?index=imgArray.length-1
    :index=index-1
    img.src=imgArray[index].img_url

}
btn2.onclick=()=>{
    index+1>imgArray.length-1
    ?index=0
    :index=index+1
    img.src=imgArray[index].img_url

}
// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку
let badArray=['fuck','cock','bitch','shit','bastard']
let badDiv=document.getElementById('bad')
let word=document.getElementById('badWords')
let btnWord=document.getElementById('enterWord')
btnWord.onclick=()=>{
    if(badArray.includes(word.value)){
        alert("Don't do it")
    }else{
        alert('perfect')
    }   
    
}

// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку

let badArray2=['fuck','cock','bitch','shit','bastard']
let badDiv2=document.getElementById('bad2')
let word2=document.getElementById('badWords2')
let btnWord2=document.getElementById('sentense')


btnWord2.onclick=()=>{
    let newSentense=word2.value

   for (let i = 0; i < badArray2.length; i++) {
       if(newSentense.includes(badArray2[i])){
       
           alert("stop")
       }
       
   }
}
// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
let h2Array=document.getElementsByTagName('h2');
let rulesDiv=document.getElementById('content');
let wrap=document.getElementById('wrap');
let ul=document.createElement('ul');
for (let i = 0; i < h2Array.length; i++) {
    let li=document.createElement('li')
    let a=document.createElement('a');
    let counter='counter'+i
    a.href='#'+counter;
    h2Array[i].setAttribute('id',counter)
    a.innerHTML=h2Array[i].innerText;
    li.appendChild(a);
    ul.appendChild(li)
}
rulesDiv.appendChild(ul)
rulesDiv.style='width : 40% ;float:left'
wrap.style='width :60%;float:left'

// -- взять массив пользователей
let usersWithAddress = [
                {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
                {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
                {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
                {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
                {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
                {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
                {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
                {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
                {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
                {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
                {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
            ];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

let content3=document.getElementById('users')
let usersDiv=document.createElement("div")
usersDiv.appendChild(renderContent(usersWithAddress))

let input11=document.createElement('input')
let input22=document.createElement('input')
let input33=document.createElement('input');
input11.type="checkbox"
input22.type="checkbox"
input33.type="checkbox"

content3.appendChild(usersDiv)

let label11=document.createElement('label')
let label22=document.createElement('label')
let label33=document.createElement('label')

let userButton=document.createElement('button');
userButton.innerText='filter'
label11.innerText='со статусом false '
label22.innerText='старше 29 лет'
label33.innerText=' город киев'

content3.appendChild(label11)
content3.appendChild(input11)
content3.appendChild(label22)
content3.appendChild(input22)
content3.appendChild(label33)
content3.appendChild(input33);
content3.appendChild(userButton)
userButton.onclick=ev=>{
    let newArray=JSON.parse(JSON.stringify(usersWithAddress));
    if(input11.checked)newArray=newArray.filter(value=>!value.status)
    if(input22.checked)newArray=newArray.filter(value=>value.age>=29)
    if(input33.checked)newArray=newArray.filter(value=>value.address.city==='Kyiv')

    usersDiv.innerHTML=''
    usersDiv.appendChild(renderContent(newArray))
}

function renderContent(array){
    let main=document.createElement('div')
    array.forEach(item=>{
        let divka=document.createElement('div');
        divka.innerHTML=JSON.stringify(item);
        main.appendChild(divka);

    })
return main
}



// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
// Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне


// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан