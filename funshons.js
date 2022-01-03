

function agecal (name, year){

    let date = new Date();
    let age = date.getFullYear() - year;

    let ageStatus = AssisanageStatus (age)

    return ` <p class = 'alert alert-${ageStatus.status}'> HI ${name} you are ${age} years old & ${ageStatus.name} </p>`;

}


function AssisanageStatus (age){

    if( age > 0 && age < 10 ){
        return{
            name : 'baby',
            status : 'primary'
        };
    }else if( age >= 10 && age < 18 ){
            return{
                name : 'kishor',
                status : 'danger'
            };
    }else if( age >= 18  && age < 35 ){
        return{
            name : 'young',
            status : 'success'
        };
    }else if( age >= 35  && age < 60 ){
        return{
            name : 'toboge young',
            status : 'info'
        };
    }else if( age >= 60  && age < 100 ){
        return{
            name : 'beddo',
            status : 'danger'
        };
    }else{
        return{
            name : 'jin/both',
            status : 'dark'
    };
}

};

