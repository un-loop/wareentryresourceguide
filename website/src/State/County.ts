
import { Set } from "immutable";

export enum County
{
    Benton,
    Chelan,
    Clark,
    Cowlitz,
    Douglas,
    Grant,
    GraysHarbor,
    Island,
    Jefferson,
    King,
    Kitsap,
    Kittitas,
    Lewis,
    Mason,
    Okanogan,
    Pierce,
    Snohomish,
    Spokane,
    Stevens,
    Thurston,
    WallaWalla,
    Whatcom,
    Whitman,
    Yakima,
};

export const ALL_COUNTIES = Set.of<County>(County.Benton, County.Chelan, County.Clark);
