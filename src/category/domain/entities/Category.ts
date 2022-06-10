import Entity from "../../../@seedwork/domain/entiites/Entity";
import InvalidIdError from "../../../@seedwork/errors/invalid-id-error";
import IdentificationGeneratorInterface from "../../../@seedwork/identificationGenerator/identificationGeneratorInterface";



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
    constructor(private props: CategoryProps, private identificationGenerator?: IdentificationGeneratorInterface) {
        super(props, identificationGenerator);
        // this.id = props.id || identificationGenerator.generateId();
        this.name = props.name;
        this.description = props.description || '';
        // this.createdAt = this.props.createdAt || new Date();
        // this.updatedAt = this.props.updatedAt || new Date();
        this.isActive = this.props.isActive || false;

        this.validate()
    }

    private validate() {
        if (!this.id) { 
            throw new InvalidIdError('empty id')
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
        return this.props.description;
    }

    get isActive(): boolean | undefined {
        return this.props.isActive;
    }

    get name(): string {
        return this.props.name;
    }

    set name(value: string) {
        this.props.name = value;
    }



    // get createdAt(): Date {
    //     return this.props.createdAt;
    // }

    // get updatedAt(): Date {
    //     return this.props.updatedAt;
    // }

    private set isActive(value: boolean) {
        this.props.isActive = value;
    }

    // private set updatedAt(date: Date) {
    //     this.props.updatedAt = date;
    // }

    // private set createdAt(date:Date) {
    //     this.props.createdAt = date;
    // }

    private set description (value:string) {
        this.props.description = value;
    }

    // private set id (value: string) {
    //     this.props.id = value;
    // }
}