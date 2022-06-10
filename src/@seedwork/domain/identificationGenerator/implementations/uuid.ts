import { v4 as uuidv4 } from 'uuid';


import IdentificationGeneratorInterface from "../identificationGeneratorInterface";



export default class Uuid implements IdentificationGeneratorInterface {
    generateId(): string {
        return uuidv4();
    }
}