// const buttonQuestion = document.querySelector('.header-question');
// const popupQuestion = document.querySelector('.question-popup');

// let popupid = 0;

// window.addEventListener("click", function (e){
//     if(e.target != buttonQuestion && popupid === popupQuestion){
//         popupQuestion.classList.add('popup-move-up');
//         popupQuestion.classList.remove('popup-move-down');
//         popupid = 0;
//         document.body.style.overflow = 'visible';
//     }
// });

// buttonQuestion.addEventListener("click", function () {
//     popupQuestion.classList.remove('popup-move-up');
//     popupQuestion.classList.add('popup-move-down');
//     popupid = popupQuestion;
//     document.body.style.overflow = 'hidden';
//     console.log('f')
// });

console.log(window.screen.availWidth)

let widgetItem = [];
widgetItem = document.querySelectorAll('.widget-box');

for(let i = 0; i < widgetItem.length; i++){
    widgetItem[i].addEventListener("click", function () {
        
        if(window.screen.availWidth < 450){
            if(this.classList.contains('widget-move-m')){
                this.classList.remove("widget-move-m");
                return;
            }
            this.classList.add("widget-move-m");
            return;
        }
        if(this.classList.contains('widget-move')){
            this.classList.remove("widget-move");
            return;
        }
        this.classList.add("widget-move");
    });
}
    

