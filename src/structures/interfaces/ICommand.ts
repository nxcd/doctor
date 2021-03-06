import { DoctorConfig } from '../../DoctorConfig'

export interface IArgument {
  name: string,
  description: string
}

export interface IOption {
  name: string,
  description: string,
  validator?: any,
  default?: any
}

export interface IMongoCommandHandler {
  (
    config: DoctorConfig,
    args: { [k: string]: any },
    options: { [k: string]: any },
    logger: Logger
  ): Promise<string | void>;
}

export interface ICommand {
  name: string,
  description: string,
  arguments?: IArgument[],
  options?: IOption[],
  handler: IMongoCommandHandler
}
