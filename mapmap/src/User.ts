import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export class User implements Mappable{
    name: string;
    location: {
        lat: number;
        lng: number;
    };
    constructor(){
        this.name = faker.internet.userName();
        this.location = {
            lat: faker.location.latitude(),
            lng: faker.location.longitude(),
        }
    }
    description(): string{
        return `vanakkam, this is ${this.name}`;
    }
}
