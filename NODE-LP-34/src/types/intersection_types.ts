type Mentor = {
  name: String;
  subject: String;
};

type Class = {
  level: String;
  assigned: Boolean;
};

//Both type should be satisfied
type Teaching = Mentor & Class;

const teaching: Teaching = {
  name: "Tanish",
  subject: "Node",
  level: "beginner",
  assigned: true,
};
