import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage"; // <----

import firebaseconfig from "./firebaseconfig";

const firebaseApp = firebase.initializeApp(firebaseconfig);
const db = firebaseApp.firestore();
export const storage = firebase.storage().ref();

export default {
  createUser: async (u) => {
    return await db.collection("users").doc(u.id).set(
      {
        name: u.name,
        email: u.email,
        password: u.password,
      },
      { merge: true }
    );
  },
  listUsers: async () => {
    let list = [];
    let results = await db.collection("users").get();
    results.forEach((user) => list.push(user.data()));
    return list;
  },
  listRecipes: async () => {
    let list = [];
    const images = await (await storage.child("recipes").listAll()).items;

    console.log("items:", images);
    let results = await db.collection("recipes").get();
    results.forEach((recipe) => list.push({...recipe.data(), id: recipe.id}));
    return list;
  },
  // selecionado a lista de recita favorita
  listRecipesFavorite: async () => {
    let listFavorite = [];
    let results = await db.collection("recipeFavorites").get();
    results.forEach((recipe) => listFavorite.push({...recipe.data(), id: recipe.id}));
    return listFavorite;
  },
  // selecionado a lista de recitas do usuario seguindo
  listRecipesUser: async () => {
    let listRecipesUser = [];
    let results = await db.collection("recipesUser").get();
    results.forEach((recipe) => listRecipesUser.push({...recipe.data(), id: recipe.id}));
    return listRecipesUser;
  },
  addRecipe: async (recipe) => {
    let createdRecipe = await db.collection("recipes").add(recipe);
    return createdRecipe.get();
  },
  // Adicionar uma receita aos favortos
  addRecipeFavorites: async (recipe) => {
    let AddReciperFovorites = await db.collection("recipeFavorites").add(recipe);
    return AddReciperFovorites.get();
  },
  getRecipe: async (recipeId) => {
    return await db.collection('recipes').doc(recipeId).get()
  },
  getRecipeImage: async (recipeId) => {
    const imgUrl = await storage.child(`recipes/${recipeId}`).getDownloadURL();
    return imgUrl;
  },
  createRecipeImage: async (recipeId, file) => {
    return await storage.child(`recipes/${recipeId}`).put(file);
  },
};
