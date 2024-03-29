import { setTimeZone } from '../services/utility.js';
const uuid = require('uuid');

class Todo {
  #id;
  #title;
  #desc;
  #date;
  #priority;
  #check;
  #addDate;

  constructor(
    id = null,
    title = 'New Todo',
    desc = 'None',
    date = setTimeZone().slice(0, 10),
    priority = 'None',
    check = false,
    addDate = setTimeZone()
  ) {
    // Always use {} bracket around if else statements. It makes reading code easy and less error prone.
    if (id !== null) {
      this.#id = id;
    } else {
      this.#id = `todo-${uuid.v4()}`;
    }

    if (title !== '') {
      this.#title = title;
    } else {
      this.#title = 'New Todo';
    }

    if (desc !== '') {
      this.#desc = desc;
    } else {
      this.#desc = 'None';
    }

    this.#date = date;
    this.#priority = priority;
    this.#check = check;
    this.#addDate = addDate;
  }

  set id(id) {
    this.#id = id;
  }
  get id() {
    return this.#id;
  }

  set title(title) {
    this.#title = title;
  }

  get title() {
    return this.#title;
  }

  set desc(desc) {
    this.#desc = desc;
  }

  get desc() {
    return this.#desc;
  }

  set date(date) {
    this.#date = date;
  }

  get date() {
    return this.#date;
  }

  set priority(priority) {
    this.#priority = priority;
  }

  get priority() {
    return this.#priority;
  }

  set check(check) {
    this.#check = check;
  }

  get check() {
    return this.#check;
  }

  set addDate(date) {
    this.#addDate = date;
  }

  get addDate() {
    return this.#addDate;
  }

  toggleCheck() {
    this.#check = !this.#check;
  }

  edit(newTitle, newDesc, newDate, newPriority) {
    this.#title = newTitle;
    this.#desc = newDesc;
    this.#date = newDate;
    this.#priority = newPriority;
  }

  // CR: Not returning anything
  equals(todo) {
    return this.#id === todo.id;
  }

  // CR: toString is Javascript provided, I will try to not override it. Use something like getAsString
  getAsString() {
    return (
      `ID: ${this.#id}\n` +
      `Title: ${this.#title}\n` +
      `Description: ${this.#desc}\n` +
      `Due Date: ${this.#date}\n` +
      `Priority: ${this.#priority}\n` +
      `Check: ${this.#check}\n`
    );
  }

  toJSON() {
    return {
      id: this.#id,
      title: this.#title,
      desc: this.#desc,
      date: this.#date,
      priority: this.#priority,
      check: this.#check,
      addDate: this.#addDate,
    };
  }

  static fromJSON(json) {
    return new Todo(
      json.id,
      json.title,
      json.desc,
      json.date,
      json.priority,
      json.check,
      json.addDate
    );
  }
}

// CR: Either export everything here or export at the start of component. Don't mix both
export default Todo;
