const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
  name: {
    type: string,
    required: [true, 'Recipe name is required'],
    lowercase: true,
    validate(v) {
      return new Promise((resolve) => {
        resolve(v && v.length > 2)
      });
    },
    message: '{VALUE} is not a valid recipe name'
  },
   description: {
     type: string
   },
    instruction: {
      type: string
    },
    photos: {
      type: Array
    },
    userId: {
      type: ObjectId,
      required: [true, 'User id is required']
    },
    categoryId: {
      type: ObjectId,
      required: [true, 'Category id is required']
    }
}, { 
  timestamps: 
    { createdAt: 'created_at', 
      updatedAt: 'updated_at'
    }
});

module.exports = mongoose.model('Recipe', RecipeSchema);