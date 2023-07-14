function kolobok(name) {
    switch (name) {
        case 'дедушка':
            return(Я от дедушки ушёл);
        case 'лиса':
            return(меня съели);
        case 'заяц':
            return(и от зайца ушёл);

            default:
                return( "Нет таких персонажей" );
    }
}

function newYear (name) {
    return(`${name} !${name}! ${name}!`)
}