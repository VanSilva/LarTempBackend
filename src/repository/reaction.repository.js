import Reaction from '../app/schemas/Reaction';

class ReactionRepository {
  getAll() {
    return Reaction.find({});
  }

  getReaction(reaction) {
    return Reaction.findOne({ reaction });
  }

  create(payload) {
    return Reaction.create(payload);
  }

  delete(id) {
    return Reaction.findByIdAndDelete(id);
  }

  getReactionsCount(idPost) {
    return Reaction.find({ post: idPost }).count();
  }

  getDeslike(idPost, idPerson, idRection) {
    return Reaction.findByIdAndDelete({ post: idPost, person: idPerson, _id: idRection });
  }

  getReactions(idPost) {
    return Reaction.find({ post: idPost }).select(['_id', 'name', 'person']);
  }
}

export default new ReactionRepository();
