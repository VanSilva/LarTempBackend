import Animal from '../app/schemas/Animal';

class AnimalRepository {
  getAll() {
    return Animal.find({});
  }

  getAnimal(id) {
    return Animal.findById({ _id: id });
  }

  create(payload) {
    return Animal.create(payload);
  }

  update(id, payload) {
    return Animal.findByIdAndUpdate(id, payload, { new: true });
  }

  delete(id) {
    return Animal.findByIdAndDelete(id);
  }
}

export default new AnimalRepository();
