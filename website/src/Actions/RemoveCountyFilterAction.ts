import { Action } from "redux";
import { County } from "../State/County";

export class RemoveCountyFilterAction implements Action
{
    public readonly type: string =  "RemoveCountyFilterAction";

    public constructor(public readonly county: County)
    {
    }
}
