const x = document.getElementsByClassName('navbar_list')[0]
const y = document.getElementById('checkbox')

function fun(){
    if(y.checked==true){
        console.log(y.checked)
        x.classList.add('notshow')
    }else{
        x.classList.remove('notshow')
    }
}