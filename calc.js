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

  let display = document.getElementById('input-value');
  let equalpress=false;


   keys.addEventListener('click', e => {
    const key = e.target;
    const action = key.dataset.action;
    const keycontent = key.textContent;
    const displaynum = display.value;


    
    let previousKeyType;
    if(e.target.matches('button')){
        Array.from(key.parentNode.children)
        .forEach(k => k.classList.remove('operator-pressed'));
        if(action=='addition' ||
            action=='substraction'||
            action=='multiply' ||
            action == 'divide' 
        
            )
            {
                key.classList.add('operator-pressed');
               
                // display.value = displaynum+keycontent;
                 previousKeyType='operator';
                if(display.value.slice(-1)=='+' 
                || display.value.slice(-1)=='-' 
                || display.value.slice(-1)=='/' 
                || display.value.slice(-1)=='*'){
                    
                   display.value= display.value.slice(0, -1) + keycontent;
                  
                }else{
                    console.log('err');

                }
                display.value = eval(display.value)+keycontent;
 
                
            }

    if(action=='equal'){
        equalpress=true;
        if(display.value.slice(-1)=='+' 
        || display.value.slice(-1)=='-' 
        || display.value.slice(-1)=='/' 
        || display.value.slice(-1)=='*')
        {
            display.value='error';
        }else{
            display.value = eval(displaynum);
            
        }
    }

        
     
        if(!action){
           

            if(displaynum == '0' || equalpress==true){
                display.value = keycontent;
                equalpress=false;
            }
            else{
                display.value=displaynum + keycontent;
            }

 
        }
        if(action=='decimal'){
            if(display.value.slice(-1) == '.'){
                    
                   display.value= display.value.slice(0, -1) + keycontent;
            }
            else{
                display.value=displaynum + keycontent;
            }
            
        }
        
    }
    if(action=='ac'){
        display.value=0;
    }
    if(action=='cancel'){
        display.value=display.value.slice(0, -1);
    }


   })


