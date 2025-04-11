export type User = {
    id: number;
    name: string;
    age: number;
    city: string;
    friends: { name: string; hobbies: string[] }[];
};
