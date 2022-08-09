// Objects linked to other objects

var Workshop = {
  setTeacher(teacher) {
    this.teacher = teacher;
  },

  ask(question) {
    console.log(this.teacher, question);
  }
};

var AnotherWorkshop = Object.assign(
  Object.create(Workshop),
  {
    speakUp(msg) {
      this.ask(msg.toUpperCase());
    }
  }
)

var JSRecentParts = Object.create(AnotherWorkshop);

JSRecentParts.setTeacher('Kyle');
JSRecentParts.speakUp(':O')
