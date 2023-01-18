import { StylesConfig } from "react-select";
import { ISelectOption } from "types";
import { Color } from "ui";

const customSortStyles: StylesConfig<ISelectOption> = {
  control: (baseStyles) => ({
    ...baseStyles,
    height: 56,
    backgroundColor: `${Color.HEADER_BACKGROUND}`,
    outline: "none",
    borderRadius: 4,
    border: "none",
    boxShadow: "none",
  }),

  option: (baseStyles, state) => ({
    ...baseStyles,
    backgroundColor: `${Color.HEADER_BACKGROUND}`,
    color: `${Color.TEXT}`,
  }),

  menu: (baseStyles, state) => ({
    ...baseStyles,
    backgroundColor: `${Color.HEADER_BACKGROUND}`,
    color: `${Color.TEXT}`,
  }),

  singleValue: (baseStyles, state) => ({
    ...baseStyles,
    color: `${Color.TEXT}`,

    "&:before": {
      /* eslint-disable */
      content: '"Title: "',
      /* eslint-enable */
      color: `${Color.TEXT_FOOTER}`,
    },
  }),

  indicatorsContainer: (baseStyles, state) => ({
    ...baseStyles,
    paddingRight: 16,
    color: `${Color.TEXT}`,
  }),

  indicatorSeparator: (baseStyles) => ({
    ...baseStyles,
    display: "none",
  }),
};

export { customSortStyles };
