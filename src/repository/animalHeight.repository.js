import AnimalHeight from '../app/schemas/AnimalHeight';

class AnimalHeightRepository {
  getAll() {
    return AnimalHeight.find({});
  }

  getAnimalHeight(id) {
    return AnimalHeight.findById({ _id: id });
  }

  create(payload) {
    return AnimalHeight.create(payload);
  }

  update(id, payload) {
    return AnimalHeight.findByIdAndUpdate(id, payload, { new: true });
  }

  delete(id) {
    return AnimalHeight.findByIdAndDelete(id);
  }
}

export default new AnimalHeightRepository();
