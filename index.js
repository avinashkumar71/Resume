const x = document.getElementsByClassName('navbar_list')[0]
const y = document.getElementById('checkbox')
let category_element = document.getElementsByClassName('category_tab')
let category_element_tab = document.getElementsByClassName('bio_right_content')

function fun(){
    if(y.checked==true){
        console.log(y.checked)
        x.classList.add('show')
    }else{
        x.classList.remove('show')
    }
}

function category(value){
        for(cat of category_element){
            cat.classList.remove('active_link')
        }
        for(content_tab of category_element_tab){
            content_tab.classList.remove('active_tab')
        }
        event.currentTarget.classList.add('active_link')
        document.getElementById(value).classList.add('active_tab')
    }