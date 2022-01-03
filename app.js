
const age_check = document.querySelector('#agecheck');
const name = document.querySelector('#name');
const year = document.querySelector('#year');
const result = document.querySelector('#result');

age_check.addEventListener('click', () => {

    if( name.value == '' || year.value == ''){
        result.innerHTML = `<p class = 'alert alert-danger'> you are requerd</p>`;
    }else{
        result.innerHTML= agecal(name.value, year.value);
    
        name.value = '';
        year.value = '';
    };

    

});
