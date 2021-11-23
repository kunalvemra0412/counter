// set inittial count
let count =0;

//seelct value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
     const styles =e.currentTarget.classList;
     if(styles.contains('decrease')){
         count--;
        //  document.getElementById('value').style.color='red'
     }
     else if(styles.contains('increase')){
         count++;
        //  document.getElementById('value').style.color='green'

     }
     else{count = 0;}
     if(count > 0){
        value.style.color='green'
     }
     else if(count < 0){
     value.style.color='red'
     }
     else{
        value.style.color='black'

     }
     value.textContent = count;
    });
});