document.getElementById('btn').onclick = function(){
    let year = document.getElementById('id_year').value;
    let month = document.getElementById('id_month').value;
    let day = document.getElementById('id_day').value;
    //     let year = 1900;
    // let month = 1;
    // let day = 1;
    if ( month == 1 ) {
        year -= 1;
        month = 13;
    } else if ( month == 2 ) {
        year -= 1;
        month = 14;
    }
    y = year % 100;
    C = Math.ceil( year / 100 );
    if ( check_year( year ) ) {
        r = 5 * C + Math.floor( C / 4 );
     } else {
        r = ( 6 * C ) + 5;
     }
     a = Math.floor( 26 * ( month + 1 ) / 10 );

     h = ( day + a + y + Math.floor( y / 4 ) + r ) % 7 //main formula

     day = {
        0:'saturday',
        1:'sunday',
        2:'monday',
        3:'tuesday',
        4:'wednesday',
        5:'thursday',
        6:'friday'
     }
     var myh1 = document.getElementById("myh1");
     myh1.innerHTML=day[h] + '!';
}

function check_year (year){
    if ( year >= 1582 ){
        return true;
    } else {
        return false;
    }
}