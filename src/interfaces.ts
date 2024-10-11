export interface Sidbar {
  id: number;
  title: string;
  image: string;
  EventHandler: () => void;
}

export interface toDoList {
  data: toDoListData[];
}

export interface craeteTodo {
  statusbar: string;
  data: toDoListData;
}

export interface toDoListData {
  _id: string;
  title: string;
}
export interface ContactData {
  _id: string;
  Address: string;
  Secodary_Phone: string;
  Personal_Email: string;
  Phone: string;
  Title: string;
  Company_Email: string;
  Website: string;
  userName: string;
}
export interface ContactByID {
  data: ContactData;
  results: number;
  statusbar: string;
}

export interface Contact {
  data: ContactData[];
  results: number;
  statusbar: string;
}
