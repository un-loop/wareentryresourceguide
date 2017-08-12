import { County } from "./County";
import { ServiceCategory } from "./ServiceCategory";

export class Organization
{
    public constructor(
        public readonly name: string,
        public readonly countiesServed: County[],
        public readonly address: string,
        public readonly phone: string,
        public readonly website: string,
        public readonly email: string,
        public readonly description: string,
        public readonly servicesCategories: ServiceCategory[],
        public readonly servesMale: boolean,
        public readonly servesFemale: boolean,
        public readonly childrenAllowed: boolean,
    )
    {
    }
}
