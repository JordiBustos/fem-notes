class Workshop {
  constructor(teacher) {
    this.teacher = teacher;
  }

  ask(question) {
    console.log(this.teacher, question);
  }
}

class AnotherWorkshop extends Workshop {
  speakUp(msg) {
    this.ask(msg);
  }
  ask(msg) {
    // relative polymorphism
    Super.ask(msg.toUpperCase());
  }
}

var deepJS = new Workshop('Kyle');
var reactJS = new Workshop('Suzy');
var JSRecentParts = new AnotherWorkshop('Kyle');

deepJS.ask('Something');
// Kyle Something

reactJS.ask('Something else');
// Suzy Something else

JSRecentParts.speakUp('Something...');
// Kyle Something...

/*
  Properties and methods are not autobounded.
  So we can do this
*/

class WorkshopTwo {
  constructor(teacher) {
    this.teacher = teacher;
    this.ask = question => {
      console.log(this.teacher, question);
    }
  }
}

var deepJSTwo = new WorkshopTwo('Kyle');

/*
  But this is just a unnecessary complex implementation of a module pattern
*/
