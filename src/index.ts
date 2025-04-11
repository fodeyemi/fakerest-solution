import express, { Request, Response } from 'express';
import {Services} from './services';

const app = express();
const PORT = 3000;

const service = new Services();

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

app.get('/averageAge', async (req: Request, res: Response) => {
    const users = await service.getUsers();
    try {
        const record = service.calculateAgeOfUsersPerCity(users);
        res.json(record);
    } catch (err) {
        res.status(500).json({ message: 'Error calculating average age' });
    }
});

app.get("/averageFriends", async (req: Request, res: Response) => {
    const users = await service.getUsers();
    try {
        const record = service.calculateAverageFriendsPerCity(users);
        res.json(record);
    } catch (err) {
        res.status(500).json({ message: 'Error calculating average friends' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
