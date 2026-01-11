interface UserGreet {
  name: String;
  greet: () => void;
}

interface UserGreet {
  contact?: String;
}

class User implements UserGreet {
  name: String;
  constructor(name: String) {
    this.name = name;
  }

  greet = () => {
    console.log(`Hello From ${this.name}`);
  };
}

interface TeacherInterface extends UserGreet {
  teacherId: String;
  aboutMe: () => void;
}

class Teacher extends User implements TeacherInterface {
  teacherId: String;
  constructor(name: String) {
    super(name);
    this.teacherId = "10";
  }

  aboutMe = () => {
    console.log("I teach Node");
  };
}
