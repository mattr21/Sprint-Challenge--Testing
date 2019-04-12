const db = require('../data/dbConfig.js');
const Games = require('./games-model.js');

describe('games model', () => {
    beforeEach(async () => {
        await db('games').truncate();
    });

    describe('insert', () => {
        it('should insert the provided games', async () => {
            await Games.insert({ title: 'DAoC', genre: 'mmorpg', releaseYear: '1995' });
            await Games.insert({ title: 'The Last Of Us 2', genre: 'action', releaseYear: '2020' });

            const games = await db('games');
            expect(games).toHaveLength(2);
        });

        it('should return the added game', async () => {
            const game = await Games.insert({ title: 'DAoC', genre: 'mmorpg', releaseYear: '1995' });

            expect(game.title).toBe('DAoC');
            expect(game.genre).toBe('mmorpg');
            expect(game.releaseYear).toBe('1995');
        })
    });

    describe('get', () => {
        it('should get all games', () => {
            await Games.insert({ title: 'DAoC', genre: 'mmorpg', releaseYear: '1995' });
            await Games.insert({ title: 'The Last Of Us 2', genre: 'action', releaseYear: '2020' });

            const games = await Games.getAll();
            expect(games.length).toBe(1)
        });
    });
});