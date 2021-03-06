import { chaiWithHttp } from '../..';

export function createUser(app: any, baseUrl: string, userObj: any) {
  return chaiWithHttp
    .request(app.app)
    .post(`${baseUrl}/users`)
    .set('Accept', 'application/json')
    .send(userObj);
}

export function updateUser(
  app: any,
  baseUrl: string,
  updateObj: any,
  userId: any,
  token: string,
) {
  return chaiWithHttp
    .request(app.app)
    .patch(`${baseUrl}/users/${userId}`)
    .set('Accept', 'application/json')
    .set('authorization', `Bearer ${token}`)
    .send(updateObj);
}

export function deleteUser(
  app: any,
  baseUrl: string,
  userId: any,
  token: string,
) {
  return chaiWithHttp
    .request(app.app)
    .delete(`${baseUrl}/users/${userId}`)
    .set('authorization', `Bearer ${token}`);
}

const UserObjectWithLessThanRequiredParams = {
  username: 'test-user',
  email: 'somerandomemail@test.now',
};

const UserObjectWithMoreThanRequiredParams = {
  username: 'test-user',
  email: 'somerandomemail@test.now',
  password: 'somEraNdom#pass62',
  hobbies: '',
};

const UserObjectWithNameAsEmptyString = {
  username: '',
  email: 'somerandomemail@test.now',
  password: 'somEraNdom#pass62',
};

const UserObjectWithEmailAsEmptyString = {
  username: 'test-user',
  email: '',
  password: 'somEraNdom#pass62',
};

const userWithInvalidEmailFormat = {
  username: 'test-user',
  email: 'somerandomemailtest.now',
  password: 'somEraNdom#pass62',
};

const userWithInvalidPasswordFormat = {
  username: 'test-user',
  email: 'somerandomemail@test.now',
  password: 'somEraNdompass',
};

const userWithInvalidUsernameType = {
  username: 34567,
  email: 'somerandomemail@test.now',
  password: 'somEraNdompass',
};

const validUserObject = {
  username: 'test-user',
  email: 'somerandomemail@test.now',
  password: 'somEraNdom#pass62',
};

const validUpdateObject = {
  username: 'updateduser',
  email: 'updatedemail@test.now',
};

const invalidUpdateObject = {
  email: 'updatedemailtest.now',
};

const invalidUserObject = {
  username: 'test-user',
  email: 'somerandomemail@test.now',
  password: 'somEraNdom#pass62',
  profile: {
    bio: 'this is a test bio and probably the shortest ever',
  },
};

export default {
  UserObjectWithLessThanRequiredParams,
  UserObjectWithMoreThanRequiredParams,
  UserObjectWithNameAsEmptyString,
  UserObjectWithEmailAsEmptyString,
  userWithInvalidEmailFormat,
  userWithInvalidPasswordFormat,
  userWithInvalidUsernameType,
  validUserObject,
  invalidUserObject,
  validUpdateObject,
  invalidUpdateObject,
};
