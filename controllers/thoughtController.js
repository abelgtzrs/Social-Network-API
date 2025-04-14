const Thought = require("../models/Thought");
const User = require("../models/User");

module.exports = {
  // Get all thoughts
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Get a single thought by ID
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findById(req.params.thoughtId);
      if (!thought)
        return res.status(404).json({ message: "Thought not found" });

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Create a thought + push it to the user
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      await User.findByIdAndUpdate(
        req.body.userId,
        { $push: { thoughts: thought._id } },
        { new: true }
      );
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Update a thought
  async updateThought(req, res) {
    try {
      const thought = await Thought.findByIdAndUpdate(
        req.params.thoughtId,
        req.body,
        { new: true, runValidators: true }
      );
      if (!thought)
        return res.status(404).json({ message: "Thought not found" });

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Delete a thought
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findByIdAndDelete(req.params.thoughtId);
      if (!thought)
        return res.status(404).json({ message: "Thought not found" });

      // Also remove from associated user's thoughts array
      await User.findOneAndUpdate(
        { thoughts: req.params.thoughtId },
        { $pull: { thoughts: req.params.thoughtId } },
        { new: true }
      );

      res.json({ message: "Thought deleted" });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Add a reaction to a thought
  async addReaction(req, res) {
    try {
      const thought = await Thought.findByIdAndUpdate(
        req.params.thoughtId,
        { $addToSet: { reactions: req.body } },
        { new: true, runValidators: true }
      );
      if (!thought)
        return res.status(404).json({ message: "Thought not found" });

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Remove a reaction by reactionId
  async removeReaction(req, res) {
    try {
      const thought = await Thought.findByIdAndUpdate(
        req.params.thoughtId,
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { new: true }
      );
      if (!thought)
        return res.status(404).json({ message: "Thought not found" });

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
