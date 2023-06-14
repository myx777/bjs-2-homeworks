function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
};

let student = new Student();

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
};

Student.prototype.addMarks = function (...marksToAdd) {
  if("marks" in this) {
    this.marks.push(...marksToAdd);
  }
};

Student.prototype.getAverage = function () {
  return ("marks" in this && this.marks.length !== 0) ? 
  this.marks.reduce((acc, item) => acc + item, 0) / this.marks.length : 0;
};

Student.prototype.exclude = function (reason) {
  this.excluded = reason;
  delete this.subject;
  delete this.marks; 
};
