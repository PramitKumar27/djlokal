import firebase from "../firebase";

const db = firebase.collection("/djs");

class DJ {
  getAll() {
    return db;
  }

  create(dj) {
    return db.add(dj);
  }

  update(id, value) {
    return db.doc(id).update(value);
  }

  delete(id) {
    return db.doc(id).delete();
  }
}

export default new DJ();