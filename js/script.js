'use strict'
const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')
// console.log(item );
item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

for (const placeholder of placeholders) {
  placeholder.addEventListener('dragover', dragover)
  placeholder.addEventListener('dragenter', dragenter)
  placeholder.addEventListener('dragleave', dragleave)
  placeholder.addEventListener('drop',  dragdrop)
}
function dragover(event){
   event.preventDefault()
// console.log('drag over')
}
function dragenter(event){
   event.target.classList.add('heverd') 
   // console.log(' drag enter')
}
function dragleave(event){
   event.target.classList.remove('heverd')   
   // console.log('drag leave')
}
function dragdrop(event){
   // console.log('drag drop')
   event.target.classList.remove('heverd') 
   event.target.append(item)
}


 
function dragstart(event) {
  //  console.log('drag start, event.target ')
  event.target.classList.add('hold')
  setTimeout(() => event.target.classList.add('hide'), 0)
}
function dragend() {
  // console.log('drag end')
  event.target.classList.remove('hold', 'hide')
}

