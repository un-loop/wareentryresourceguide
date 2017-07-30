import { Action } from "redux";
import { ServiceCategory } from "../State/ServiceCategory";

export class RemoveServiceCategoryFilterAction implements Action
{
    public readonly type: string =  "RemoveServiceCategoryFilterAction";

    public constructor(public readonly serviceCategory: ServiceCategory)
    {
    }
}
