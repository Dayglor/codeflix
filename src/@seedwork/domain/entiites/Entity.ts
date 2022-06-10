import InvalidIdError from "@seedwork/errors/invalid-id-error";
import IdentificationGeneratorInterface from "../identificationGenerator/identificationGeneratorInterface";
import Uuid from "../identificationGenerator/implementations/uuid";

export interface EntityProps {
    id?: string;
    createdAt: Date;
    updatedAt: Date;
    removedAt?: Date;
}

export default abstract class Entity<T> {
    private _id: string;
    private _createdAt: Date;
    private _updatedAt: Date;
    private _removedAt: Date | null;
    // private props: any

    constructor(private readonly _props: any, private _identificationGenerator?: IdentificationGeneratorInterface) {
        const identificationGenerator = _identificationGenerator || new Uuid();
        this._id = _props.id || identificationGenerator.generateId();
        this._createdAt = _props.createdAt || new Date();
        this._updatedAt = _props.updatedAt || new Date();
        this._removedAt = _props.removedAt || null;
    }

    get id() : string {
        return this._id;
    }

    get createdAt(): Date {
        return this._createdAt;
    }

    get updatedAt(): Date {
        return this._updatedAt;
    }

    get removedAt(): Date {
        return this._removedAt;
    }

    public set removedAt(date: Date|null) {
        this._removedAt =  date || new Date();
    }

    public toJSON(): T {
        return {
            id: this.id,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            removedAt: this.removedAt,
            ...this.props
        };
    }
}