// dark theme active

function dark(){
    var d = document.getElementById('mainbody');
    d.classList.add('dark-theme');
    document.getElementById('light-btn').style.display="block";
    document.getElementById('dark-btn').style.display="none";

    // d.remove("light-theme");
    // d.add("dark-theme");
}
function light(){
    var d = document.getElementById('mainbody');
    d.classList.add('light-theme');
    d.classList.remove('dark-theme');
    document.getElementById('light-btn').style.display="none";
    document.getElementById('dark-btn').style.display="block";

    // d.remove("light-theme");
    // d.add("dark-theme");
}


// calculator

let calculator = document.getElementsByClassName('calculator-box');
let keys = document.getElementById('calc');
let a=document.getElementById('input-value').value;

const calculate = (n1, operator, n2) => {
    let result = ''
    
    if (operator =='addition') {
      result = n1 + n2
    } else if (operator === 'substraction') {
      result = n1 - n2
    } else if (operator === 'multiplication') {
      result = n1 * n2
    } else if (operator === 'divide') {
      result = n1 / n2
    }
    
    return result
  }
  const display = document.getElementById('input-value');


   keys.addEventListener('click', e => {
    const key = e.target;
    const action = key.dataset.action;
    const keycontent = key.textContent;
    const displaynum = display.value;
    
    if(e.target.matches('button')){
        Array.from(key.parentNode.children)
        .forEach(k => k.classList.remove('operator-pressed'));
        var operatorpressed=false;
        var previousKeyType ;
        if(!action){
            
            if(displaynum == '0' || previousKeyType == 'operator'){
                display.value = keycontent;
                
                
            }
            else{
                display.value=displaynum + keycontent;
            }

            console.log(display.value);
            console.log(calculate(display.value.slice(-1),operator,display.value.slice(-3)));
 
        }
        if(action=='decimal'){
            display.value=displaynum + keycontent;
            
        }

        if(action=='addition' ||
            action=='substraction'||
            action=='multiply' ||
            action == 'divide' 
        
            )
            
            
            {
                key.classList.add('operator-pressed');
               
                display.value = displaynum+keycontent;
                var operator = display.value.slice(-1);
                 console.log(operator);
                 if(operator=='+'){
                    operator='addition';
                 }
                 if(operator=='-'){
                    operator='substraction';
                 }
                 if(operator=='×'){
                    operator='multiplication';
                 }
                 if(operator=='÷'){
                    operator='divide';
                 }

                  previousKeyType='operator';
                  const firstval = Number(displaynum);
                 console.log(firstval);

                
        

    }
    if(action=='equal'){
        var a =Number(displaynum.slice(-1));
        var secondvalue = a;
        console.log(secondvalue);
    }

        // var num = display.value;

        // var op  = num.charAt(num.length - 2);
        
        // var n2=num.charAt(num.length - 1);
        // const n1 = num.charAt(num.length - 3);
        // if(op=='+'){
        //     var operator = 'add';
        // }

        // const val = calculate(n1,operator,n2);
        // console.log(val);
        
    }
    if(action=='ac'){
        display.value=0;
    }
    if(action=='cancel'){
        display.value=0;
    }

    if(action=='calculate'){
        
    // console.log(display.value);


}


    
   })


function calculate1(n1,operator,n2){
    var result;
    if(operator=='+'){
        result = n1+n2;

    }
    return result;
}