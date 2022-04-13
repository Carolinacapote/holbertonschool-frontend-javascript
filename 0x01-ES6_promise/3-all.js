import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return uploadPhoto().then((info) => {
    const message = info.body;
    createUser().then((info) => {
      console.log(message.concat(' ', info.firstName, ' ', info.lastName));
    }).catch((/**/) => {
      console.log('Signup system offline');
    });
  }).catch((/**/) => {
    console.log('Signup system offline');
  });
}
