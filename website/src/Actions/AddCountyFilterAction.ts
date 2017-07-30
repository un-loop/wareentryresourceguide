import { Action } from "redux";
import { County } from "../State/County";

export class AddCountyFilterAction implements Action
{
    public readonly type: string =  "AddCountyFilterAction";

    public constructor(public readonly county: County)
    {
    }
}
