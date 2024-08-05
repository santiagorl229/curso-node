"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findHeroById = void 0;
const heroes_1 = require("../heroes");
const findHeroById = (id) => {
    return heroes_1.heroes.find((hero) => hero.id === id);
};
exports.findHeroById = findHeroById;
