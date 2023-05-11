let firstInput=document.getElementById('ice-cream-choice')
let secondInput=document.getElementById('second-input')

firstInput.addEventListener('change',function(){
    let nilai=this.value
    secondInput.setAttribute('value',nilai)
})
secondInput.addEventListener('change',function(){
    let nilai=this.value
    firstInput.setAttribute('value',nilai)
})