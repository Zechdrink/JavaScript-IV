// CODE here for your Lambda Classes

// #### Person

// * First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` `gender` all as props
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props


class Person {
    constructor(attr){
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
        this.gender = attr.gender;
    }
    speak(){
       console.log(`Hello, my name is ${this.name}, I am from ${this.location}.`);
    }
}

const john = new Person ({
    name: 'John',
    age: 23,
    location: 'Los Angeles County',
    gender: 'Male'
})

const megan  = new Person ({
    name: 'Megan',
    age: 17,
    location: 'Ventura County',
    gender: 'Female'
})


// #### Instructor

// * Now that we have a Person as our base class, we'll build our Instructor class.
// * Instructor uses the same attributes that have been set up by Person
// * Instructor has the following unique props:
// * `specialty` what the Instructor is good at i.e. 'redux'
// * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
// * `catchPhrase` i.e. `Don't forget the homies`
// * Instructor has the following methods:
// * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
// * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'

class Instructor extends Person{
    constructor(instructorAttr){
        super(instructorAttr);
        this.specialty = instructorAttr.specialty;
        this.favLanguage = instructorAttr.favLanguage;
        this.catchPhrase = instructorAttr.catchPhrase;
    }

    demo(subject){
        console.log(`Today we are learning about ${subject}.`)
    }

    grade(student, subject){
        if(student === matt){
            console.log(`${student.name} got caught cheating and lying. ${student.name} receives corrective action resulting in expulsion.`)
        } else if (student === olly){
            console.log(`Jon Snow returns from the dead and pushes ${student.name} off the wall.`)
        } else{
        console.log(`${student.name} receives a perfect score in ${subject}.`)
        }
    }

}

const josh = new Instructor ({
    name: 'Josh',
    age: 35,
    location: 'Unknown',
    gender: 'MAN',
    specialty: 'Explaining all things difficult.',
    favLanguage: 'JavaScript',
    catchPhrase: 'This is sooo cool guys.',
})

const subInstructor = new Instructor ({
    name: 'Subman',
    age: 51,
    location: 'London',
    gender: 'Male',
    specialty: 'Filling in.',
    favLanguage: 'Impartial',
    catchPhrase: 'So... Where are we at?',
})



// #### Student

// * Now we need some students!
// * Student uses the same attributes that have been set up by Person
// * Student has the following unique props:
// * `previousBackground` i.e. what the Student used to do before Lambda School
// * `className` i.e. CS132
// * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// * Student has the following methods:
// * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
// * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
// * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`


class Student extends Person {
    constructor(studentAttr){
       super(studentAttr)
       this.previousBackground = studentAttr.previousBackground;
       this.className = studentAttr.className;
       this.favSubjects = studentAttr.favSubjects;
    }

    listsSubjects(){
        console.log(`${this.favSubjects}`);
    }

    PRassignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`)
    }
}

const annie = new Student ({
    name: 'Annie',
    age: 17,
    location: 'Paris',
    gender: 'Female',
    previousBackground: 'Streaming',
    className: "WEB01",
    favSubjects: ['Sleeping', 'Snack Time', 'Not Listening'],
})

const matt  = new Student ({
    name: 'Matthew',
    age: 21,
    location: 'Moon', //Matthew is a compulsive liar.
    gender: 'Male', //this is actually true
    previousBackground: 'Covert Ops', //Matthew is still a compulsive liar.
    className: "omniclassual", //This kid has issues.
    favSubjects: ['This Class', 'That Class', 'Every Class'], // Matthew can't make up his mind.
})

const olly  = new Student ({
    name: 'Olly',
    age: 15,
    location: 'the Wall',
    gender: 'Male',
    previousBackground: 'Killing Jon Snow',
    className: "The Night's Watch",
    favSubjects: ['Stabbing', 'Innocent', 'People'],
})


// #### Project Mananger

// * Now that we have instructors and students, we'd be nowhere without our PM's
// * ProjectManagers are extensions of Instructors
// * ProjectManagers have the following uniqe props:
// * `gradClassName`: i.e. CS1
// * `favInstructor`: i.e. Sean
// * ProjectManangers have the following Methods:
// * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
// * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`

class ProjectManager extends Instructor{
    constructor(pmAttr){
        super(pmAttr);
        this.gradClassName = pmAttr.gradClassName;
        this.favInstructor = pmAttr.favInstructor;
        }

        standUp(channel){
            console.log(`${this.name} announces to ${channel}, ${channel} standy times!`)
        }

        debugsCode(student, subject){
            console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
        }
    }

    const linda = new ProjectManager({
        name: 'Linda',
        age: 31,
        location: 'Palm Beach',
        gender: 'Female',
        specialty: 'Emotional Support',
        favLanguage: 'C++',
        catchPhrase: "Keep trying, you're doing great",
        gradClassName: "WEB0001",
        favInstructor: "Josh Knell"
    })

    const gabe  = new ProjectManager({
        name: 'Gabriel',
        age: 27,
        location: 'Palm Springs',
        gender: 'Male',
        specialty: 'Control',
        favLanguage: 'Python',
        catchPhrase: "Stop monkying around!!",
        gradClassName: "WEB0002",
        favInstructor: "Josh Knell"
    })


    //Person Testing
    john.speak();
    megan.speak();  

    //Instructor Testing
    
   
    console.log(josh.catchPhrase);
    console.log(josh.specialty);
    console.log(josh.favLanguage);
    josh.demo('Advanced CSS design');
    josh.grade(annie, 'math');
    josh.grade(matt, 'every subject');
    josh.grade(olly, 'math');
    subInstructor.demo('JS fundamentals');
    subInstructor.grade(annie, 'science');

    //Student Testing
    console.log(annie.favSubjects);
    console.log(annie.previousBackground);
    console.log(annie.className);
    console.log(matt.favSubjects);
    console.log(matt.previousBackground);
    console.log(matt.className);
    console.log(olly.favSubjects);
    console.log(olly.previousBackground);
    console.log(olly.className);


    annie.listsSubjects()

    matt.PRassignment('Math')

    olly.sprintChallenge('Inheritance');


    //Project Manajer Testing
    console.log(gabe.favInstructor);
    console.log(gabe.standUp('channel'));
    console.log(linda.debugsCode(olly, 'JS'));

// #### Stretch Problem

// * Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
// * Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
// * Add a graduate method to a student.
// * This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
// * If the student's grade is above a 70% let them graduate! Otherswise go back to grading their assignments to increase their score.
