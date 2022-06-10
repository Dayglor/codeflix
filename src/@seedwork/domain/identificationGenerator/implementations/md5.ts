// import { md5 } from 'md5';

import md5 from "md5";
import IdentificationGeneratorInterface from "../identificationGeneratorInterface";

export default class Md5 implements IdentificationGeneratorInterface {
    public generateId(): string {
        return md5(`${new Date().getTime() + Math.random()}`);
    }
}