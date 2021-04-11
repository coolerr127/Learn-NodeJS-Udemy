const path = require('path');
const fs = require('fs');

// Второй способ прописать абсолютный путь, вместо (path.join(__dirname, '..', 'data', 'card.json'))
const p = path.join(
    path.dirname(require.main.filename),
    'data',
    'card.json'
);

class Card {
    static async add(course) {
        const card = await Card.fetch();

        const idx = card.courses.findIndex(c => c.id === course.id);
        const candidate = card.courses[idx];

        if (candidate) {
            // Курс уже есть в корзине
            candidate.count++;
            card.courses[idx] = candidate;
        } else {
            // Курса еще нет в корзине
            course.count = 1;
            card.courses.push(course);
        }

        card.price += +course.price;

        return new Promise((resolve, reject) => {
            fs.writeFile(p, JSON.stringify(card), err => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }

    static async remove(id) {
        const card = await Card.fetch();

        const idx = card.courses.findIndex(c => c.id === id);
        const course = card.courses[idx];

        if (course.count === 1) {
            card.courses = card.courses.filter(c => c.id !== id);
        } else {
            card.courses[idx].count--;
        }

        card.price -= course.price;

        return new Promise((resolve, reject) => {
            fs.writeFile(p, JSON.stringify(card), err => {
                if (err) {
                    reject(err);
                } else {
                    resolve(card);
                }
            });
        });
    }

    static async fetch() {
        return new Promise((resolve, reject) => {
            fs.readFile(p, 'utf-8', (err, content) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(JSON.parse(content));
                }
            });
        });
    }
}

module.exports = Card;