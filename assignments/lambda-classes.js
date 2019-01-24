// CODE here for your Lambda Classes

class Person{
    constructor(attrs){
        this.name = attrs.name;
        this.age = attrs.age;
        this.location = attrs.location;
        this.gender = attrs.gender;
    }
    speak(){
        return  (`Hello my name is ${this.name} I am from ${this.location}.`)
    }
}

class Instructor extends Person{
    constructor(Iattrs){
        super(Iattrs);
        this.specialty = Iattrs.specialty;
        this.favLanguage = Iattrs.favLanguage;
        this.catchPhrase = Iattrs.catchPhrase;
    }
    demo(){
        return (`Today we are learning about ${this.specialty}.`)
    }
    grade(){
        return (`${student.name} receives a perfect score on ${this.specialty}.`)
    }
}

class Student extends Person{
    constructor(Sattrs){
        super(Sattrs);
        this.previousBackground = Sattrs.previousBackground;
        this.className = Sattrs.className;
        this.favSubjects = Sattrs.favSubjects;
    }
    listsSubjects(){
        return (`${this.favSubjects}`)
    }
    PRAssignment (){
        return (`${student.name} has submitted a PR for ${this.favSubjects}`)
    }
    sprintChallenge(){
        return (`${student.name} has begun sprint challenge on ${this.favSubjects}`)
    }
}

class ProjectManager extends Instructor{
    constructor (pattrs){
        super(pattrs);
        this.gradClassName = pattrs.gradClassName;
        this.favInstructor = pattrs.favInstructor;
    }
    standUp(){
        return (`${this.name} announces to ${this.gradClassName}, @channel standup time!`)
    }
    debugsCode(){
        return (`${this.name} debugs ${student.name}'s code on ${this.favSubjects}.`)
    }
}


const fred = new Student({
    name: 'Fred',
    age: 34,
    location: 'Albuquerque',
    gender: 'Male',
    previousBackground: 'Teacher',
    className: 'fsd12',
    favSubjects: 'Python, Ruby, Elixir, JS.'
    
})

const tim = new Student({
    name: 'Tim',
    age: 18,
    location: 'Oswego',
    gender: 'Male',
    previousBackground: 'Stock Boy',
    className: 'cs13',
    favSubjects: 'Spanish, English, French, CompSci.'
})

const tina = new Student({
    name: 'Tina',
    age: 19,
    location: 'New Jersey',
    gender: 'Female',
    previousBackground: 'Cashier',
    favSubjects: 'Engineering, Shop, Physics, Python, C#'
})

const rick = new Instructor({
    name: 'Rick',
    age: 43,
    location: 'Who Knows?',
    gender: 'Male',
    specialty: 'Science',
    favLanguage: 'Drunken English',
    catchPhrase: 'IM PICKLE RICCCCCKKKKK!'
})

const jimbo = new ProjectManager({
    name: 'Jim',
    age: 21,
    location: 'Madagascar',
    gender: 'Male',
    specialty: 'Not getting eaten by wild animals.',
    favLanguage: 'PHP',
    catchPhrase: 'Well, that just happened.',
    gradClassName: 'fsw1',
    favInstructor: 'Philip'
})

const terry = new ProjectManager({
    name: 'Terry',
    age: 25,
    location: 'Philadelphia',
    gender: 'Male',
    specialty: 'Sleep',
    favLanguage: 'Swift',
    catchPhrase: 'SNORE',
    favInstructor: 'Life',
    gradClassName: 'fsw2'
})

const phil = new Instructor({
    name: 'Philip',
    age: 22,
    location: 'California',
    gender: 'Male',
    specialty: 'Waking up Terry',
    favLanguage: 'JS',
    catchPhrase: '*bullhorn* hey, you awake Terry?'
})