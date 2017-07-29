export default class Organization
{
    public constructor(
        public readonly name: string,
        public readonly countiesServed: string[],
        public readonly address: string,
        public readonly phone: string,
        public readonly website: string,
        public readonly email: string,
        public readonly description: string,
        public readonly serviceTags: string[],
        public readonly servesMale: boolean = true,
        public readonly servesFemale: boolean = true,
    )
    {
    }
}
