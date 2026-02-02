/**
 * Аркадий – серьезный человек и в его телефонной книге очень много записей. Чтобы как можно меньше отрываться от дел, Аркадий делает голосовую систему "Василиса", которая будет заполнять телефонную книгу за него. К счастью, Василиса уже умеет распознавать голос и превращать его в текст, осталось научить её понимать и выполнять команды. Общеизвестный SQL использует английский язык, а Аркадий и Василиса говорят на русском. Так появился язык, который Аркадий назвал pbQL (Phone Book Query Language).
 *
 * Аркадий придумал спецификацию pbQL, а за первой реализацией обратился к вам.
 *
 * Синтаксис языка pbQL
 * Язык состоит из нескольких команд:
 *
 * Создай контакт <имя>
 * Создает новый контакт с именем <имя> с пустыми списками телефонов и почт
 * Принимает <имя> содержащее любые символы, кроме ;
 * Не создает ничего, если контакт уже существует
 * Пример: Создай контакт Григорий;
 *
 * Удали контакт <имя>
 * Удаляет контакт с именем <имя>
 * Принимает <имя> содержащее любые символы, кроме ;
 * Не удаляет ничего, если контакт не существует
 * Пример: Удали контакт Григорий;
 *
 * Добавь телефон <телефон> и почту <почта> для контакта <имя>
 * Добавляет <телефон> в спискок телефонов и <почту> в список почт для контакта <имя>
 * Принимает телефоны только в формате 5556667788 (без кода), иначе это считается ошибкой синтаксиса
 * Принимает почты без пробелов, поэтому через пробел ожидается следующее слово
 * Принимает произвольное количество почт и телефонов, перечисленных через и
 * Не добавляет ничего, если контакт не существует
 * Не добавляет почту/телефон, если такая почта/телефон уже есть у контакта
 * Пример: Добавь телефон 5556667788 и телефон 5556667787 и почту grisha@example.com для контакта Григорий;
 *
 * Удали телефон <телефон> и почту <почта> для контакта <имя>
 * Удаляет <телефон> из списка телефонов и <почту> из списка почт контакта <имя>
 * Принимает телефоны только в формате 5556667788 (без кода), иначе это считается ошибкой синтаксиса
 * Принимает почты без пробелов, иначе это считается ошибкой синтаксиса
 * Принимает произвольное количество почт и телефонов, перечисленных через и
 * Не удаляет ничего, если контакт не существует
 * Не удаляет почту/телефон, если такая почта/телефон отсутствует у контакта
 * Пример: Удали телефон 5556667788 для контакта Григорий;
 *
 * Покажи почты и телефоны для контактов, где есть <запрос>
 * Ищет вхождение <запрос> хотя бы в один из телефонов, либо в одну из почт, либо в имя контакта
 * Принимает <запрос> содержащий любые символы, кроме ;
 * Принимает для перечисления произвольное количество типов полей, перечисленных через и, среди которых могут быть имя, почты и телефоны
 * Возвращает список строк в формате <почта 1>,<почта 2>;<телефон 1> в соответствии с запращиваемыми полями, для подходящих под запрос контактов
 * Возвращает контакты в порядке создания, а их почты/телефоны в порядке добавления
 * Возвращает имена и электронные почты как есть, а телефоны в виде +7 (555) 666-77-88
 * Не возвращает ничего на пустой запрос (Покажи имя для контактов, где есть ;)
 * Пример: Покажи имя и почты и телефоны и почты для контактов, где есть Гр;
 *
 * Удали контакты, где есть <запрос>
 * Ищет вхождение <запрос> хотя бы в один из телефонов, либо в одну из почт, либо в имя контакта
 * Принимает <запрос> содержащий любые символы, кроме ;
 * Удаляет все подходящие контакты
 * Не удаляет ничего на пустой запрос (Удали контакты, где есть ;)
 * Пример: Удали контакты, где есть Гр;
 *
 * Другие особенности синтаксиса
 * pbQL регистрозависимый язык, поэтому покажи не является правильной командой
 * Команды в запросе разделяются и заканчиваются ;. Создай контакт Григорий;Удали контакт Григорий; – правильный запрос
 * Каждое слово отделяется ровно одним пробелом, поэтому большое количество подряд идущих пробелов это ошибка синтаксиса
 * <запрос> не является частью языка, а является аргументом, поэтому может содержать любое количество подряд идущих пробелов
 * Ваша функция run должна
 * Принимать на вход запрос в виде строки
 * Возвращать массив строк с ответом
 * Конкатенировать в один массив результаты всех Покажи
 * Вызывать вспомогательную функцию syntaxError на первую обнаруженную ошибку синтаксиса
 * Вызывать syntaxError c двумя аргументами – номер команды и номер символа, с которого начинается ошибка синтаксиса
 * Считать команды и символы с единицы, а не с нуля
 * Примеры ошибок синтаксиса
 * покажи имя для контактов, где есть Гр; – команда c маленькой буквы, ошибка с символа 1
 * Покжи имя для контактов, где есть Гр; – опечатка в команде, ошибка с символа 1
 * Покажи  имя для контактов, где есть Гр; – лишний пробел, ошибка с символа 8 (второй пробел)
 * Удали телефон 55566677 для контакта Григорий; – недостаточно цифр в телефоне, ошибка с символа 15 (первый символ телефона)
 * Покажи имя для контактов, где есть Гр – отсутствует точка с запятой, ошибка с символа 38 (отсутствующий символ в конце команды)
 * Используйте заготовку для написания своего кода.
 */

'use strict';

/**
 * Телефонная книга
 */
const phoneBook = new Map();

/**
 * Вызывайте эту функцию, если есть синтаксическая ошибка в запросе
 * @param {number} lineNumber – номер строки с ошибкой
 * @param {number} charNumber – номер символа, с которого запрос стал ошибочным
 */
function syntaxError(lineNumber, charNumber) {
    throw new Error(`SyntaxError: Unexpected token at ${lineNumber}:${charNumber}`);
}

function createContact(contact) {
    if (phoneBook[contact]) return;
    phoneBook[contact] = {
        phones: [],
        mails: [],
    }
    return phoneBook[contact];
}

function deleteContact(contact) {
    if (!phoneBook[contact]) return;
    phoneBook.delete(contact);
    return contact;
}

function add_phone_mail(contact) {
    if (!phoneBook[contact]) return;
    phoneBook.delete(contact);
    return contact;
}

function getLastProcessedChar(str, regex) {
    const pattern = new RegExp(regex, 'g');
    let match;
    let lastProcessedIndex = 0;

    while ((match = pattern.exec(str)) !== null) {
        // Обновляем последний просмотренный индекс после совпадения
        lastProcessedIndex = pattern.lastIndex;
    }

    // Если lastProcessedIndex не превышает длину строки:
    if (lastProcessedIndex > 0 && lastProcessedIndex <= str.length) {
        return str[lastProcessedIndex - 1]; // Возвращаем последний просмотренный символ
    }

    // Если ничего не найдено или строка закончилась:
    return null;
}


/**
 * извлечь команду
 * @param {string} command - команда
 * @param {number} line - строка выполнения
 */
function execCommand(command, line) {
    let final_char = 0;

    const mapCommands = new Map([
        ['create_syntax', /^Создай\s+контакт\s+(.+?);$/],
        ['delete_syntax', /^Удали\s+контакт\s+(.+?);$/],
        ['add_phone_mail', /^Добавь\s+((?:телефон\s+\d{10}|почту\s+[\S]+)(?:\s+и\s+(?:телефон\s+\d{10}|почту\s+[\S]+))*)\s+для\s+контакта\s+(.+?);$/],
        ['delete_phone_mail', /^Удали\s+((?:телефон\s+\d{10}|почту\s+[\S]+)(?:\s+и\s+(?:телефон\s+\d{10}|почту\s+[\S]+))*)\s+для\s+контакта\s+(.+?);$/],
        ['show_phone_mail', /^Покажи\s+(имя|почты|телефоны)(?:\s+и\s+(имя|почты|телефоны))*\s+для\s+контактов,\s+где\s+есть\s+([^;]+);$/],
        ['delete_contacts_syntax', /^Удали\s+контакты,\s+где\s+есть\s+(.+?);$/],
    ]);

    mapCommands.forEach((regex, key, map) => {
        const match = regex.exec(command);
        if (match) {
            console.log(match, regex);
            console.log('matched: ', regex)
        } else {
            let error_symb = command.length;
            const list_words_command = command.split(' ');

            //проверка на лишние ;
            if (command.split('').filter(el => el === ';').length > 1) {
                error_symb = Math.min(error_symb, command.indexOf(';'));
            }
            //проверка на пустые ;
            if (command.split('').filter(el => el === ';').length === 0) {
                error_symb = Math.min(error_symb, command.length);
            }
            //проверка на порядок ;
            if (command.split('').filter(el => el === ';').length === 1 && command.indexOf(';') !== command.length) {
                error_symb = Math.min(error_symb, command.indexOf(';'));
            }

            // проверка на пробелы
            if (command[0] === ' ') {
                error_symb = 0;
            }
            if (command.trim() !== command) {
                error_symb = Math.min(error_symb, command.indexOf('  '));
            }

            //проверка на слова команды
            let arr_command_words = ['Удали', 'Создай', 'Добавь', "Покажи"];
            const word_check = arr_command_words.filter(el => command.includes(el));

            //если слов команды нет
            if (word_check.length === 0) {
                error_symb = 0;
            }
            //если их больше 1
            if (word_check.length > 1) {
                word_check.forEach(el => {
                    error_symb = Math.min(error_symb, command.indexOf(el));
                })
            }
            if (list_words_command[0] === 'Создай') {
                //проверка порядка для команды create_syntax
                const create_syntax_words = ['Создай', 'контакт'];
                list_words_command.forEach((el, idx) => {
                    if (idx !== create_syntax_words.indexOf(el) && idx < list_words_command.length) {
                        error_symb = Math.min(error_symb, list_words_command.indexOf(el));
                    }
                })
            } else if (list_words_command[0] === 'Удали') {
                const delete_syntax_words_v1 = ['Удали', 'контакт'];
                const delete_syntax_words_v2 = ['Удали', 'телефон', 'почту', 'и', "для", "контакта"];
                delete_syntax_words_v2.concat('контакт').every((el, idx) => list_words_command.includes(el))

                //проверка порядка для команды delete_syntax_v1
                if (
                    !delete_syntax_words_v2
                        .filter((el, idx) => idx > 0)
                        .find(el => list_words_command.includes(el))
                ) {
                    list_words_command.forEach((el, idx) => {
                        if (idx !== delete_syntax_words_v1.indexOf(el)) {
                            error_symb = Math.min(error_symb, list_words_command.indexOf(el));
                        }
                    })
                } else {
                    const casted_list_comands = list_words_command
                        .filter(el => ['телефон', 'почту', 'и'].includes(el));
                    const ord_correct = casted_list_comands.map((el, idx) => {
                        if (idx > 0 && idx < casted_list_comands.length) {
                            const first = casted_list_comands[idx - 1] === 'телефон';
                            const sec = el === 'и';
                            const third = casted_list_comands[idx + 1] === 'почту';

                            const tot1 = first && sec && third;

                            const first_rev = casted_list_comands[idx - 1] === 'почту';
                            const third_rev = casted_list_comands[idx + 1] === 'телефон';

                            const tot2 = first_rev && sec && third_rev;

                            if (tot1 || tot2) {
                                return null;
                            } else {
                                return idx;
                            }
                        }
                    });
                }

            }
        }
    })


}

/**
 * Выполнение запроса на языке pbQL
 * @param {string} query
 * @returns {string[]} - строки с результатами запроса
 */
function run(query) {
    const answ = [];
    const split_lines = query.split('\n');
    /*
    line1;
    line2;
     */
    const mapped_commands = split_lines.map(el => {
        let r = el.split(';');
        r.pop();
        return r;
    });
    /*
    [
        [command1, command2, command3],
        [command4],
    ]
     */

    mapped_commands.forEach((line_commands, idx) => {
        line_commands.forEach((command) => {
            console.log(command)
            execCommand(`${command};`, idx + 1);
        })
    })

    return [];
}

run(
    'Создай кнтакт Григорий;' +
    'Создай контакт Василий;' +
    'Создай контакт Иннокентий;' +
    'Покажи имя для контактов, где есть ий;' +
    'Добавь телефон 5556667788 и телефон 5556667787 и почту grisha@example.com для контакта Григорий;' +
    'Добавь почту gris1ha@example.com и телефон 5556667787 и почту grisha@example.com для контакта Григорий;'
)

module.exports = {phoneBook, run};

