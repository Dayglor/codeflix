import IdentificationGeneratorInterface from "@seedwork/domain/identificationGenerator/identificationGeneratorInterface";
import Entity from "../../../@seedwork/domain/entiites/Entity";
import InvalidIdError from "../../../@seedwork/errors/invalid-id-error";
// import IdentificationGeneratorInterface from "../../../@seedwork/identificationGenerator/identificationGeneratorInterface";



export type CategoryProps = {
    id?: string;
    name: string;
    description?: string;
    createdAt?: Date;
    updatedAt?: Date;
    isActive?: boolean;
}

export type CategoryPropsOutput = {
    id: string;
    name: string;
    description:string;
    createdAt: Date;
    updatedAt: Date;
    isActive: boolean;
    removedAt: Date | null;
}

export class Category extends Entity<Category> {
    // private description: string
    private _name: string;
    private _description: string;
    private _isActive: boolean;

    constructor(props: CategoryProps, private readonly identificationGenerator?: IdentificationGeneratorInterface) {
        super(props, identificationGenerator);
        // this.id = props.id || identificationGenerator.generateId();
        this._name = props.name;
        this._description = typeof props.description !== 'string' ? '' : props.description;
        // this.createdAt = this.props.createdAt || new Date();
        // this.updatedAt = this.props.updatedAt || new Date();
        this._isActive = this.props.isActive || false;

        this.validate()
    }

    private validate() {
        if (!this.id) { 
            throw new InvalidIdError('empty id')
        }
    }


    toJSON(): CategoryPropsOutput {
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            isActive: this.isActive,
            removedAt: this.removedAt,
        }
    }

    // public toJSON(): CategoryPropsOutput {
    //     // console.log(this)
    //     return {
    //         id: this.id,
    //         name: this.name,
    //         description: this.description,
    //         createdAt: this.createdAt,
    //         updatedAt: this.updatedAt,
    //         isActive: this.isActive,
    //         removedAt: this.removedAt
    //     };
    // }
    // get id() : string {
    //     return this.props.id;
    // }

    public get description(): string {
        return typeof this._description !== 'string' ? '' : this._description;
    }

    get isActive(): boolean | undefined {
        return this._isActive;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    // changeName(value:string) {
    //     this._name = value;
    // }



    // get createdAt(): Date {
    //     return this.props.createdAt;
    // }

    // get updatedAt(): Date {
    //     return this.props.updatedAt;
    // }

    private set isActive(value: boolean) {
        this._isActive = value;
    }

    // private set updatedAt(date: Date) {
    //     this.props.updatedAt = date;
    // }

    // private set createdAt(date:Date) {
    //     this.props.createdAt = date;
    // }

    private set description (value:string) {
        this._description = value;
    }

    // private set id (value: string) {
    //     this.props.id = value;
    // }
}