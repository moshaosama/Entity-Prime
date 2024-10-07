export interface Sidbar {
  id: number;
  title: string;
  image: string;
  EventHandler: () => void;
}

export interface toDoList {
  data: toDoListData[];
}

export interface toDoListData {
  _id: number;
  title: string;
}
