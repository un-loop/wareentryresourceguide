import { Action } from "redux";
import { GenderOption } from "../State/GenderOption";

export class SetGenderOptionAction implements Action
{
    public readonly type: string =  "SetGenderOptionAction";

    public constructor(public readonly gender: GenderOption)
    {
    }
}
