# Validator

String, number, Object and Object[] validate

## Import

import validator, { rules } from './validator';

## How to validate data

```
validate(
    rules.isRequired('Error text'),
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
```
