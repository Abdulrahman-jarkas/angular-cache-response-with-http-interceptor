import { UserModel } from './user.model';

export interface UserResponseModel {
  data: UserModel[];
  total: number;
  per_page: number;
  total_pages: number;
  page: number;
}
