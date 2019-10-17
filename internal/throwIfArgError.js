const throwIfArgError = function ( num, ...arg ) {
    for (let i = 0; i < num; i++) {
        if ( !arg[i] ) throw TypeError(" expected args num " + num);
    }
};

export default throwIfArgError;
