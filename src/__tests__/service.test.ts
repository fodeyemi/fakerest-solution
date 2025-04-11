import {Services} from "../services";
import {myUsers} from "../users";
import {User} from "../userType";

describe('Service tests', () => {
    test('Should calculate average age of all users per city', async () => {
        const service = new Services();
        const record: Record<string, number> = service.calculateAgeOfUsersPerCity(myUsers);
        expect(record['Charleston']).toBe(25);
        expect(record['Branson']).toBe(30);
        expect(record['Miami']).toBe(28.5);
        expect(record['Seattle']).toBe(35);
        expect(record['Austin']).toBe(22);
    });

    test('Should calculate average number of friends per city', async () => {
        const service = new Services();
        const record: Record<string, number> = service.calculateAverageFriendsPerCity(myUsers);
        expect(record['Charleston']).toBe(3);
        expect(record['Branson']).toBe(6);
        expect(record['Miami']).toBe(2.5);
        expect(record['Seattle']).toBe(3);
        expect(record['Austin']).toBe(2);
    });

    test('Should get users from the API', async () => {
        const service = new Services();
        const users: User[] = await service.getUsers('http://test.brightsign.io:3000/');
        expect(users.length).toBeGreaterThan(0);
    }, 10000); // 10 seconds timeout
});
