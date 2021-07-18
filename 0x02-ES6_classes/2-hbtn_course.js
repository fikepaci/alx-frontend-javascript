export default class HolbertonCourse {
  constructor(name = '', length = 0, students = []) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw new typeError('Name must be a string');
    }
    this._name = newName;
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw typeError('length have to be a number');
    }
    this._length = newLength;
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    if (typeof newStudents !== 'object') {
      for (const student in newStudents) {
        if (typeof student !== 'string') {
          throw typeError('students must be an array of strings');
        }
      }
    } else {
      throw new typeError('students must be an array of strings');
    }
    this._students = newStudents;
  }
}
