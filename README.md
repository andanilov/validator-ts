# Validator

Validate data by rules

## Import

```
import validator, { rules } from './validator';
```

## How to validate data

```
validate(
    rules.isRequired({ msg: 'Empty!' }),
    rules.min({ len: 6, msg: 'Too short!' }),
    rules. ...
    ...
)(data);
```

## Rules

```
rules.isRequired()
rules.isEmail()
rules.isYearBorn()
rules.isLink()
rules.min()
rules.max()
```

## Return

Validator returns first error message or empty string if data is correct
