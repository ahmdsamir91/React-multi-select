import MenuItem from "@material-ui/core/MenuItem";
import React from "react";
import Select from "@material-ui/core/Select";
import withStyles from "@material-ui/core/styles/withStyles";
import withTheme from "@material-ui/core/styles/withTheme";

const CustomSelect = ({
  label,
  id,
  state,
  classes,
  value,
  onChange,
  values,
  includeEmptyValue,
  idProperty,
  nameProperty,
  onBlur,
  fieldname,
  styles,
  style
}) => {
  return (
    <Select
      MenuProps={{
        className: classes.selectMenu
      }}
      classes={{
        select: classes.select
      }}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      multiple
      inputProps={{
        name: `${id}Select`,
        id: `${id}-select`
      }}
    >
      {includeEmptyValue && (
        <MenuItem
          disabled
          classes={{
            root: classes.selectMenuItem,
            selected: classes.selectMenuItemSelected
          }}
          value={""}
          key={null}
          data-filename={fieldname}
        >
          Please Select
        </MenuItem>
      )}
      {values.map((val) => {
        return (
          <MenuItem
            classes={{
              root: classes.selectMenuItem,
              selected: classes.selectMenuItemSelectedMultiple
            }}
            custom-fieldname={fieldname}
            value={idProperty ? val[idProperty] : val}
            key={idProperty ? val[idProperty] : val}
            fieldname={fieldname}
          >
            {nameProperty ? val[nameProperty] : val}
          </MenuItem>
        );
      })}
    </Select>
  );
};

export default CustomSelect;
