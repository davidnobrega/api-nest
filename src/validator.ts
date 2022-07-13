import { ValidationError, ValidatorOptions } from "class-validator";

export interface ValidationPipeCupons extends ValidatorOptions {
  transform?: boolean;
  disableErrorMessages?: boolean;
  exceptionFactory?: (errors: ValidationError[]) => any;
}
