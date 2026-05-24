enum ProgramStatus {
    DRAFT = "DRAFT",
    PUBLISHED = "PUBLISHED",
    ARCHIVED = "ARCHIVED"
}

abstract class User {
    private id: number;
    private name: string;
    private email: string;
    private password: string;

    constructor(id: number, name: string, email: string, password: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    public getName(): string {
        return this.name;
    }
}

class CulturalInstitution {
    private id: number;
    private name: string;
    private registryCode: string;
    private programs: Program[];

    constructor(id: number, name: string, registryCode: string) {
        this.id = id;
        this.name = name;
        this.registryCode = registryCode;
        this.programs = [];
    }

    public addProgramToList(p: Program): void {
        this.programs.push(p);
    }

    public getPrograms(): Program[] {
        return this.programs;
    }

    public findProgram(id: number): Program | undefined {
        return this.programs.find(p => p.getId() === id);
    }

    public getName(): string {
        return this.name;
    }
}

class Curator extends User {
    private institution: CulturalInstitution;

    constructor(id: number, name: string, email: string, password: string, institution: CulturalInstitution) {
        super(id, name, email, password);
        this.institution = institution;
    }

    public addProgram(p: Program): void {
        this.institution.addProgramToList(p);
    }

    public editProgram(p: Program, title: string, description: string, price: number): void {
        p.updateDetails(title, description, price);
    }
}

class Program {
    private id: number;
    private title: string;
    private description: string;
    private price: number;
    private location: string;
    private status: ProgramStatus;

    constructor(id: number, title: string, description: string, price: number, location: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.location = location;
        this.status = ProgramStatus.DRAFT;
    }

    public updateDetails(title: string, description: string, price: number): void {
        this.title = title;
        this.description = description;
        this.price = price;
    }

    public getId(): number {
        return this.id;
    }

    public getTitle(): string {
        return this.title;
    }

    public getDescription(): string {
        return this.description;
    }

    public getPrice(): number {
        return this.price;
    }

    public getStatus(): ProgramStatus {
        return this.status;
    }

    public setStatus(status: ProgramStatus): void {
        this.status = status;
    }

    public getLocation(): string {
        return this.location;
    }
}