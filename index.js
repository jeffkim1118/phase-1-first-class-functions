function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(){
    const named = () => {
        console.log('I love JavaScript');
    }
    return named;
}

function returnsAnAnonymousFunction(){
    return () => console.log('Hello');
}


