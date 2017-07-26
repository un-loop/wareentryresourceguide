export default class Organization {
    public name: string;
    public countiesServed: string[];
    public address: string;
    public phone: string;
    public website: string;
    public email: string;
    public description: string;
    public serviceTags: string[];
    public servesMale: boolean;
    public servesFemale: boolean;

    public constructor(
        name: string,
        countiesServed: string[],
        address: string,
        phone: string,
        website: string,
        email: string,
        description: string,
        serviceTags: string[],
        servesMale: boolean = true,
        servesFemale: boolean =true,
    ) {
        this.name = name;
        this.countiesServed = countiesServed;
        this.address = address;
        this.phone = phone;
        this.website = website;
        this.email = email;
        this.description = description;
        this.serviceTags = serviceTags;
        this.servesMale = servesMale;
        this.servesFemale = servesFemale;
    }
}
