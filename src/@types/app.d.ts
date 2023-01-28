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
  exams: Exams[];
  members: Members[];
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

interface Answers {
  id: string;
  template: string;
  templatePicture: string;
  members: Members;
  membersId: string;
  exams: Exams;
  examsId: string;
}

interface Members {
  id: string;
  name: string;
  externalId?: string;
  groups: Groups[];
  exams: Exams[];
  answers: Answers[];
}

export interface RegisteredUsers {
  [userEmail: string]: Users;
}
