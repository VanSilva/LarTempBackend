import AnimalVaccine from '../app/schemas/AnimalVaccine';

class AnimalVaccineRepository {
  getAll() {
    return AnimalVaccine.find({});
  }

  getAnimalVaccine(id) {
    return AnimalVaccine.findById({ _id: id });
  }

  getAnimalVaccineDescription(description) {
    return AnimalVaccine.findOne({ description });
  }

  create(payload) {
    return AnimalVaccine.create(payload);
  }

  update(id, payload) {
    return AnimalVaccine.findByIdAndUpdate(id, payload, { new: true });
  }

  delete(id) {
    return AnimalVaccine.findByIdAndDelete(id);
  }
}

export default new AnimalVaccineRepository();
