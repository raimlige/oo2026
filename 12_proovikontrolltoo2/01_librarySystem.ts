//Base class
class LibraryItem {
    id: string;
    title: string;
    author: string;
    year: number;

    constructor(inputId: string, inputTitle: string, inputAuthor: string, inputYear: number) {
        if (inputId.trim() === "") throw new Error("Id cannot be empty");
        this.id = inputId;
        this.title = inputTitle;
        this.author = inputAuthor;
        this.year = inputYear;
    }

    getId(): string { return this.id; }
    getTitle(): string { return this.title; }
    getAuthor(): string { return this.author; }
    getYear(): number { return this.year; }
    getSummary(): string { return `[Item] ${this.title}`; }

}

class Dvd extends LibraryItem {
    duration: number;

    constructor(inputId: string, inputTitle: string, inputAuthor: string, inputYear: number, inputDuration: number) {
        super(inputId, inputTitle, inputAuthor, inputYear);
        if (inputDuration <= 0) throw new Error("Duration must be positive");
        this.duration = inputDuration;
    }

    getDvdSummary(): string {
        return `[DVD] ${this.title} (${this.year}) - ${this.author}`;
    }
    toFillLine(): string {
        return `[DVD]|${this.id}|${this.title}|${this.author}|${this.year}|${this.duration}`;
    }
}

class Book extends LibraryItem {
    pages: number;
    ISBN: string;

    constructor(inputId: string, inputTitle: string, inputAuthor: string, inputYear: number, inputPages: number, inputISBN: string) {
        super(inputId, inputTitle, inputAuthor, inputYear);
        if (inputPages <= 0) throw new Error("Pages must be positive");
        this.pages = inputPages;
        this.ISBN = inputISBN;
    }

    getBookSummary(): string {
        return `[Book] ${this.title} (${this.year})`;
    }

    toFillLine(): string {
        return `[Book]|${this.id}|${this.title}|${this.author}|${this.year}|${this.pages}|${this.ISBN}`;
    }
}

class Library {
    items: LibraryItem[];

    constructor() {
        this.items = []
    }

    addItem(newItem: LibraryItem): void {
        this.items.push(newItem)
    }

    getAllItems(): LibraryItem[] {
        return this.items;
    }

    toText(): string {
        return this.items.map((i: any) => i.toFillLine()).join("\n");
    }

    loadFromText(text: string): string[] {
        const lines = text.split("\n");
        const errors: string[] = [];
        for (let line of lines) {
            try {
                const parts = line.split("|");
                if (parts[0] === "BOOK") {
                    this.addItem(new Book(
                        parts[1], parts[2], parts[3],
                        Number(parts[4]), Number(parts[5]), parts[6]
                    ));
                } else if (parts[0] === "DVD") {
                    this.addItem(new Dvd(
                        parts[1], parts[2], parts[3], Number(parts[4]), Number(parts[5])
                    ));
                }
            } catch (e) {
                errors.push("Error" + line);
            }
        }
        return errors;
    }
}

export{
    LibraryItem,
    Book,
    Dvd,
    Library
}

const item1 = new LibraryItem("1", "Generic Item", "unknown", 2020);
console.log(item1);
const book1 = new Book("2B", "Harry Potter", "J. K. Rowling", 1990, 300, "AA334455");
console.log(book1);