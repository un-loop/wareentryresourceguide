import { Set } from "immutable";
import { County } from "./County";
import { ServiceCategory } from "./ServiceCategory";

export class Organization
{
    public constructor(
        public readonly name: string,
        public readonly countiesServed: Set<County>,
        public readonly address: string,
        public readonly phone: string,
        public readonly website: string,
        public readonly email: string,
        public readonly description: string,
        public readonly servicesCategories: Set<ServiceCategory>,
        public readonly servesMale: boolean,
        public readonly servesFemale: boolean,
        public readonly childrenAllowed: boolean,
    )
    {
    }
}
