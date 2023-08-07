# HA-FoodMagazine-GITFLOW

You and your friend want to share recipes with your audience. To do that,
you decide to develop a food magazine app with two types of pages: a main
page with a list of recipes and a recipe page.
Go through the development process and take screenshots for each of the
following versions:

To run this app, you will use to separated terminals.

1. for initial and future installation
   > npm install
2. for back-end
   > npm run server
3. for front-end
   > npm run dev

<h2>Version 1.0: Backbone structure of the App</h2>

workable setup for data movement from back-end to the front-end

<h2>Version 1.1: Design the website</h2>

initial-design commits

 <li>feature-recipe-detail</li>
 <li>feature-recipe-create</li>
 <li>feature-recipe-edit</li>
<br>
Release version 1.1. To do this, type “git flow release finish '1.1'” with the name
tag 1.1 and merge it with the development branch. Include the release information when merging.

<h2>Version 1.2: Implement functions to add, edit, and delete recipes</h2>

Develop functions for adding, removing, and editing a food recipe.
To develop these functions, you can create an array that contains objects. Each object should have a recipe name, a category, and an array with ngredients. The ingredients array should contain objects, and each object should consist of an ingredient name and a measurement.

<h2>Version 1.3: Implement filter and search functions</h2>

Add filter and search functions for the list of recipes. Create a new feature
named “search-filter-functions” and develop the functions in this branch.
To develop these functions, use appropriate array methods.
