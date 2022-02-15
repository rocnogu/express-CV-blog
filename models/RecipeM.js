import mongoose from "mongoose";

//  Schema
const { Schema } = mongoose;
// RecipeSchema
const RecipeSchema = new Schema(
  {
    Recipe_Picture: { type: String, default:"https://ibb.co/SNw459k"},
    Recipe_Difficulty: { type: String},
    Recipe_Title: { type: String},
    Recipe_Sub_Title: { type: String},
    updated_by: { type: String},
    created_by: { type: String},

    Recipe_Preparation_Time: { type: Number},
    Recipe_Cooking_Time: { type: Number},
    Recipe_Serves: { type: Number},

    Recipe_Ingredients: { type: Schema.Types.Mixed},
    Recipe_Method: { type: Schema.Types.Mixed},
    Recipe_Tags: { type: Schema.Types.Mixed},
   
    Recipe_isDeleted: {type: Boolean, default: false}
  },
  { timestamps: true }
  // toDateString()
);
//    model
const Recipe = mongoose.model("Recipe", RecipeSchema);
// make new Recipe
const recipe = new Recipe({});
// timestamp save
//  export
export default mongoose.models.Recipe || mongoose.model("Recipe", RecipeSchema);

