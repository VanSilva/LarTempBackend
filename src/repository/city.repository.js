import City from '../app/schemas/City';

class CityRepository {
  getAll() {
    return City.find({});
  }

  getCity(id) {
    return City.findById({ _id: id });
  }

  getCityName(name) {
    return City.findOne({ name });
  }

  create(payload) {
    return City.create(payload);
  }

  update(id, payload) {
    return City.findByIdAndUpdate(id, payload, { new: true });
  }

  delete(id) {
    return City.findByIdAndDelete(id);
  }
}

export default new CityRepository();
