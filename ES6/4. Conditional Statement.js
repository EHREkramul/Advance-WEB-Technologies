//////////////////////Conditional-Statements//////////////////////

let person = {
    age: 30, 
    name: "John Wick", 
    height: {
        feet: {
            inch: 130 // nested object. Access using ""person.height.feet.inch"". No limit of nesting
        },
        inch: 62
    }
};
    // if else
    if(person.age > 18){
        console.log("If else: ", person.name, " is adult");
    }
    else if(person.age < 18){
        console.log("If else: ", person.name, " is child");
    }
    else{
        console.log("If else: ", person.name, " is teenager");
    }
    
        // switch case
    switch (person.age) {
        case 18:
            console.log("Switch case: ", person.name, " is Eighteen");
            break;
        case 30:
            console.log("Switch case: ", person.name, " is thirty");
            break;
        default:
            console.log("Switch case: ", person.name, " is not Eighteen or thirty");
    }