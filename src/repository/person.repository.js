import Person from '../app/schemas/Person';

class PersonRepository {
  getAll() {
    return Person.find({});
  }

  getPerson(id) {
    return Person.findById({ _id: id });
  }

  getEmail(email) {
    return Person.findOne({ email });
  }

  create(payload) {
    return Person.create(payload);
  }

  update(id, payload) {
    return Person.findByIdAndUpdate(id, payload, { new: true });
  }

  delete(id) {
    return Person.findByIdAndDelete(id);
  }
}

export default new PersonRepository();
