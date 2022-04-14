import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const newObj = {};
  newObj.photo = await uploadPhoto();
  newObj.user = await createUser();
  return newObj;
}
