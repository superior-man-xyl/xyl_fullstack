interface User {
    type: "user";
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    type: "admin";
    name: string;
    age: number;
    role: string;
}

export type Person = User | Admin

export const persons: Person[] = [
    {
        type: "user",
        name: "Max Mustermann",
        age: 25,
        occupation: "Chimney sweep",
    },
    { type: "admin", name: "Jane Doe", age: 32, role: "Administrator" },
    { type: "user", name: "Kate Müller", age: 23, occupation: "Astronaut" },
    { type: "admin", name: "Bruce Willis", age: 64, role: "World saver" },
]
//类型如果是管理员
export function isAdmin(person:Person):person is Admin{
    return person.type==="admin";
}
//类型如果是user
//参数和返回值都可以做类型的声明
//:void    ``:person is User``
export function isUser(person:Person):person is User{
    return person.type==="user";
}

export function logPerson(person:Person){
    let additionalInformation:string="";
    if(isAdmin(person)){
        additionalInformation=person.role;
    }
    if(isUser(person)){
        additionalInformation=person.occupation;
    }
    console.log(`${person.name} ${person.age} ${additionalInformation}`);
}