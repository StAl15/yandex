/**
 *  E. Дружное сравнение
 *  Введение
 *  Маша — разработчик в платформенной команде Яндекса. Её команда занимается созданием и поддержкой библиотек, которые ускоряют и упрощают разработку для продуктовых разработчиков. В команде Маши используются лучшие практики, поэтому библиотеки обновляются согласно SemVer. Благодаря SemVer потребителям библиотеки проще определить совместимость новых версий, оценить степень риска при обновлении и понять, какие изменения внесены с предыдущей версии. Это удобный и простой набор правил для передачи изменений между версиями, но не всегда легко определить, какое именно изменение было сделано.
 *
 *      Коллеги Маши перефразируют документацию по SemVer так:
 *
 *      «Идея номеров основных версий SemVer в том, что они не означают ничего нового, а являются постоянным напоминанием о том, сколько раз вы ошибались с API. SemVer не означает MAJOR.MINOR.PATCH, он означает FAILS.FEATURES.BUGS».
 *
 *  Задача
 *  Коллеги Маши написали функцию, которая на основании публичного API библиотеки создаёт схему всех экспортируемых модулей. Вам нужно помочь Маше создать функцию, которая сравнивает изменения между двумя версиями API и возвращает тип изменения согласно SemVer.
 *
 *      Схема экспортируемых модулей представлена в виде массива объектов SchemaEntry, где каждый SchemaEntry представляет модуль в документе.
 *
 *      Объект SchemaEntry определяется следующим образом:
 *
 *      type SchemaEntry = {
 *      name: string;
 *      type: string;
 *      documentation?: string;
 *      returnType?: string;
 *      parameters?: {
 *          documentation?: string;
 *          name: string;
 *          type: string;
 *      }[];
 *  };
 *  Шаблон
 *  /**
 *   * @typedef {Object} SchemaEntry
 *   * @property {string} name
 *   * @property {string} type
 *   * @property {Object[]} [parameters]
 *   * @property {string} parameters.documentation
 *   * @property {string} parameters.name
 *   * @property {string} parameters.type
 *   * @property {string} [documentation]
 *   * @property {string} [returnType]
 *   * /
 *
 *  /**
 *   * Compares two schema entries and returns the difference.
 *   * @param {SchemaEntry[]} oldSchema - An array of old schema entries.
 *   * @param {SchemaEntry[]} newSchema - An array of new schema entries.
 *   * @return {"major" | "minor" | "patch"} - The result of comparing oldSchema and newSchema.
 *   * /
 *  function solution(oldSchema, newSchema) {
 *      // Ваше решение...
 *  }
 *
 *  module.exports = solution
 *  Формат ввода
 *  Patch change
 *  Изменение в документации
 *  // old.ts
 *  /**
 *   * tsdoc comment.
 *   * /
 *  export const testVariable: string = "yandex";
 *
 *  /**
 *   * tsdoc comment.
 *   * @param a - The first parameter.
 *   * @param b - The second parameter.
 *   * /
 *  export const testArrowFunction = (a: string, b: number) => {};
 *
 *  // new.ts
 *  /**
 *   * tsdoc comment 🔥.
 *   * /
 *  export const testVariable: string = "yandex";
 *
 *  /**
 *   * tsdoc comment 🎄🎁.
 *   * @param a - The first parameter.
 *   * @param b - The second parameter.
 *   * /
 *  export const testArrowFunction = (a: string, b: number) => {};
 *  На вход функции будет передано:
 *
 *  // oldSchema
 *      [
 *          {
 *              name: "testVariable",
 *              documentation: "tsdoc comment.",
 *              type: "string",
 *          },
 *          {
 *              name: "testArrowFunction",
 *              documentation: "tsdoc comment.",
 *              type: "(a: string, b: number) => void",
 *              parameters: [
 *                  {
 *                      name: "a",
 *                      documentation: "- The first parameter.",
 *                      type: "string",
 *                  },
 *                  {
 *                      name: "b",
 *                      documentation: "- The second parameter.",
 *                      type: "number",
 *                  },
 *              ],
 *              returnType: "void",
 *          },
 *      ];
 *
 *  // newSchema
 *  [
 *      {
 *          name: "testVariable",
 *          documentation: "tsdoc comment 🔥.",
 *          type: "string",
 *      },
 *      {
 *          name: "testArrowFunction",
 *          documentation: "tsdoc comment 🎁.",
 *          type: "(a: string, b: number) => void",
 *          parameters: [
 *              {
 *                  name: "a",
 *                  documentation: "- The first parameter.",
 *                  type: "string",
 *              },
 *              {
 *                  name: "b",
 *                  documentation: "- The second parameter.",
 *                  type: "number",
 *              },
 *          ],
 *          returnType: "void",
 *      },
 *  ];
 *  Minor change
 *  Добавление новой функциональности
 *  // old.ts
 *  export const x: number = 10;
 *
 *  // new.ts
 *  export const y: number = 20;
 *  export const x: number = 10;
 *  На вход функции будет передано:
 *
 *  // oldSchema
 *      [
 *          {
 *              name: "x",
 *              type: "number",
 *          },
 *      ];
 *
 *  // newSchema
 *  [
 *      {
 *          name: "y",
 *          type: "number",
 *      },
 *      {
 *          name: "x",
 *          type: "number",
 *      },
 *  ];
 *  Расширение типа
 *  // old.ts
 *  export let x: number = 10;
 *  export let y: string = "yandex";
 *
 *  // new.ts
 *  export let x: number | string = 10;
 *  export let y: string | undefined = "yandex";
 *  На вход функции будет передано:
 *
 *  // oldSchema
 *      [
 *          {
 *              name: "x",
 *              type: "number",
 *          },
 *          {
 *              name: "y",
 *              type: "string",
 *          },
 *      ];
 *
 *  // newSchema
 *  [
 *      {
 *          name: "x",
 *          type: "number | string",
 *      },
 *      {
 *          name: "y",
 *          type: "string | undefined",
 *      },
 *  ];
 *  Расширение типа у параметра функции
 *  // old.ts
 *  export const testFn = (a: string, b: number) => {};
 *
 *  // new.ts
 *  export const testFn = (a: string | number, b?: number) => {};
 *  На вход функции будет передано:
 *
 *  // oldSchema
 *      [
 *          {
 *              name: "testFn",
 *              type: "(a: string, b: number) => void",
 *              parameters: [
 *                  {
 *                      name: "a",
 *                      type: "string",
 *                  },
 *                  {
 *                      name: "b",
 *                      type: "number",
 *                  },
 *              ],
 *              returnType: "void",
 *          },
 *      ];
 *
 *  // newSchema
 *  [
 *      {
 *          name: "testFn",
 *          type: "(a: string | number, b?: number) => void",
 *          parameters: [
 *              {
 *                  name: "a",
 *                  type: "string | number",
 *              },
 *              {
 *                  name: "b",
 *                  type: "number | undefined",
 *              },
 *          ],
 *          returnType: "void",
 *      },
 *  ];
 *  Major change
 *  Удаление экспортируемого модуля
 *  // old.ts
 *  export const y: number = 20;
 *  export const x: number = 10;
 *
 *  // new.ts
 *  export const x: number = 10;
 *  На вход функции будет передано:
 *
 *  // oldSchema
 *      [
 *          {
 *              name: "y",
 *              type: "number",
 *          },
 *          {
 *              name: "x",
 *              type: "number",
 *          },
 *      ];
 *
 *  // newSchema
 *  [
 *      {
 *          name: "x",
 *          type: "number",
 *      },
 *  ];
 *  Сужение типа
 *  // old.ts
 *  export let x: number | string = 10;
 *
 *  // new.ts
 *  export let x: number = 10;
 *  На вход функции будет передано:
 *
 *  // oldSchema
 *      [
 *          {
 *              name: "x",
 *              type: "number | string",
 *          },
 *      ];
 *
 *  // newSchema
 *  [
 *      {
 *          name: "x",
 *          type: "number",
 *      },
 *  ];
 *  Формат вывода
 *  Patch change
 *  Изменение в документации
 *  patch
 *  Minor change
 *  Добавление новой функциональности
 *  minor
 *  Расширение типа
 *  minor
 *  Расширение типа у параметра функции
 *  minor
 *  Major change
 *  Удаление экспортируемого модуля
 *  major
 *  Сужение типа
 *  major
 *  Примечания
 *  На вход будут подаваться простые типы: number, string, boolean, undefined.
 *      На вход будут подаваться union-типы на основании простых типов, например: number | undefined, number | string, number | string | boolean.
 *      На вход будут подаваться функции, принимающие аргументы на основании простых и union-типов.
 *      Функция может возвращать только void, простой тип или union-тип.
 *      Расширение типа считается обратно совместимым изменением, тогда как сужение типа является обратно несовместимым изменением.
 *      Переименование параметра считается обратно совместимым изменением, тогда как переименование экспортируемой сущности является обратно несовместимым изменением.
 */
function main(){

}
