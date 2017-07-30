import { Action } from "redux";
import { ServiceCategory } from "../State/ServiceCategory";

export class AddServiceCategoryFilterAction implements Action
{
    public readonly type: string =  "AddServiceCategoryFilterAction";

    public constructor(public readonly serviceCategory: ServiceCategory)
    {
    }
}
