import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const user = await signUpUser(firstName, lastName).then((user) => ({
    status: 'fullfilled', value: user,
  }));
  const file = await uploadPhoto(fileName).catch((error) => ({
    status: 'rejected', value: error.toString(),
  }));
  return Promise.resolve([user, file]);
}
