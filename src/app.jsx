import React from 'react';
import ReactDOM from 'react-dom';

import MyButtonControll  from './components/MyButtonControll'


class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    static hello(){
        console.log('hello');
    }

    toString(){
        console.log('my name is'+this.name);
    }
}

class Children extends Person{
    constructor(name,age,sex){
        super(name,age);
        this.sex=sex;
    } 

    toSix(){
        console.log('I am '+this.sex);
    }
}


var my=new Children('李成杰',18,'male')
console.log(my.name,my.sex,my.age);
my.toString()
my.toSix()
Person.hello()











ReactDOM.render(<MyButtonControll/>,document.getElementById('app'));