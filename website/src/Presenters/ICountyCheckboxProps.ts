import { County } from "../State/County";

export interface ICountyCheckboxProps {
      onCheck: (county: County) => void;
      onUncheck: (county: County) => void;
      checked: boolean;
      county: County;
}
