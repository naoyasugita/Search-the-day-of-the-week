funciton zeller(year,month,day) {
    if ( month == 1 ) {
        year -= 1;
        month = 13;
    } else if ( m == 2 ) {
        year -= 1;
        month = 14;
    }
    y = year % 100;
    C = Math.ceil( year / 100 );
    if ( check_year( year ) ) {
        r = 5 * C + Math.floor( C / 4 );
     } else {
        r = 6 * C + 5;
     }
     a = Math.floor( 26 * ( month = 1 ) / 10 );

     h = ( day + a + y + Math.floor( y / 4 ) + r ) % 7 //main formula

     day = {
        0:'sat',
        1:'sum',
        2:'mon',
        3:'the',
        4:'wed',
        5:'thu',
        6:'fri'
     }
     console.log(day[h]);
     return day[h];

}

funciton check_year(year){
    if ( year >= 1582 ){
        return true;
    } else {
        return false;
    }
}