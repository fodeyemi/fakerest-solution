import axios from "axios";
import {myUsers} from "./users";
import {User} from "./userType";

export class Services {
    calculateAgeOfUsersPerCity = (users: User[]): Record<string, number> => {
        const cityAgeMap: Record<string, { totalAge: number; count: number }> = {};

        for (const user of users) {
            if (!user.city || !user.age) {
                console.error('User is missing city or age:', user);
                throw new Error('User is missing city or age');
            }
            if (!cityAgeMap[user.city]) {
                cityAgeMap[user.city] = { totalAge: 0, count: 0 };
            }
            cityAgeMap[user.city].totalAge += user.age;
            cityAgeMap[user.city].count += 1;
        }

        const averageAgePerCity: Record<string, number> = {};
        for (const city in cityAgeMap) {
            averageAgePerCity[city] = cityAgeMap[city].totalAge / cityAgeMap[city].count;
        }

        return averageAgePerCity;
    }

    calculateAverageFriendsPerCity = (users: User[]): Record<string, number> => {
        const cityFriendCounts: Record<string, { totalFriends: number; userCount: number }> = {};

        for (const user of users) {
            if (!user.city || !user.friends) {
                console.error('User is missing city or friends', user);
                throw new Error('User is missing city or friends');
            }
            if (!cityFriendCounts[user.city]) {
                cityFriendCounts[user.city] = { totalFriends: 0, userCount: 0 };
            }
            cityFriendCounts[user.city].totalFriends += user.friends.length;
            cityFriendCounts[user.city].userCount++;
        }

        const averageFriendsPerCity: Record<string, number> = {};
        for (const city in cityFriendCounts) {
            const { totalFriends, userCount } = cityFriendCounts[city];
            averageFriendsPerCity[city] = totalFriends / userCount;
        }

        return averageFriendsPerCity;
    }

    getUsers = async (url: string = 'http://test.brightsign.io:3000/'): Promise<User[]> => {
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.warn('Error fetching users:', error);
            return myUsers; // Fallback to local data
        }
    }
}
