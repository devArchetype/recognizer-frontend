export interface Group {
  id: string;
  name: string;
  _count: {
    Exams: number;
    GroupsHasMembers: number;
  };
}

export interface Exam {
  id: string;
  name: string;
  registration: number;
}

interface Groups {
  id: string;
  name: string;
  user: Users;
  userId: string;
}

interface Users {
  id: string;
  name: string;
  email: string;
  password: string;
  avatar?: string;
  groups?: Groups[];
}

interface Exams {
  id: string;
  name: string;
  description: string | null;
  examDate: Date | null;
  template: string;
  groupId: string;
  _count: { Answers: number; MembersHasExams: number };
}

// interface Answers {
//   id: string;
//   template: string;
//   templatePicture: string;
//   members: Members;
//   membersId: string;
//   exams: Exams;
//   examsId: string;
// }

interface Members {
  id: string;
  name: string;
  externalId?: string;
  answerId?: string;
}

interface Answers {
  id: string;
  template: string;
  templatePicture: string;
  membersId: string;
  examsId: string;
  Exams: Exams;
  Members: Members;
}

export interface RegisteredUsers {
  [userEmail: string]: Users;
}
