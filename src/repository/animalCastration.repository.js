import AnimalCastration from '../app/schemas/AnimalCastration';

class AnimalCastrationRepository {
  getAll() {
    return AnimalCastration.find({});
  }

  getAnimalCastration(id) {
    return AnimalCastration.findById({ _id: id });
  }

  create(payload) {
    return AnimalCastration.create(payload);
  }

  update(id, payload) {
    return AnimalCastration.findByIdAndUpdate(id, payload, { new: true });
  }

  delete(id) {
    return AnimalCastration.findByIdAndDelete(id);
  }
}

export default new AnimalCastrationRepository();
