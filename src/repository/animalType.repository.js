import AnimalType from '../app/schemas/AnimalType';

class AnimalTypeRepository {
  getAll() {
    return AnimalType.find({});
  }

  getAnimalType(id) {
    return AnimalType.findById({ _id: id });
  }

  create(payload) {
    return AnimalType.create(payload);
  }

  update(id, payload) {
    return AnimalType.findByIdAndUpdate(id, payload, { new: true });
  }

  delete(id) {
    return AnimalType.findByIdAndDelete(id);
  }
}

export default new AnimalTypeRepository();
