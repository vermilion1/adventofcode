'use strict';

var permute = require('../utils/permute');
var max = require('../utils/max');

module.exports = (input) => {

  var RE = /([a-zA-Z]+): capacity (-?\d+), durability (-?\d+), flavor (-?\d+), texture (-?\d+), calories (-?\d+)/;

  var generateOptions = (ingredients) => permute.range(0, 100, ingredients.length);
  var parseIngredients = (data) => {
    return data.map(line => line.match(RE).slice(2).map(Number));
  };

  var multiplyProperties = (result) => {
    return result.reduce((prev, current) => prev * (current < 0 ? 0 : current), 1);
  };

  var calculateScores = (options, ingredients) => {
    return options.map(percentages => {
      var propsLength = ingredients[0].length;
      var result = new Array(propsLength);

      for (var propIndex = 0; propIndex < propsLength; propIndex++) {
        result[propIndex] = 0;
        for (var ingredientIndex = 0; ingredientIndex < ingredients.length; ingredientIndex++) {
          result[propIndex] += ingredients[ingredientIndex][propIndex] * percentages[ingredientIndex];
        }
      }

      return result.pop() === 500 ? multiplyProperties(result) : 0;
    });
  };

  var ingredients = parseIngredients(input.trim().split('\n'));
  var options = generateOptions(ingredients);
  var scores = calculateScores(options, ingredients);

  return max(scores);

};
