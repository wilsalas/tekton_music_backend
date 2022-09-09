import { IAuthModuleOptions } from '@nestjs/passport';

const PASSPORT_MODULE: IAuthModuleOptions = {
  defaultStrategy: 'jwt',
};

export default PASSPORT_MODULE;
