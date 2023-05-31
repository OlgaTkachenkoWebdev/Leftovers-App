const fixtures = {
  regUser: {
    "email": { email: "test@test" },
    "password": { password: "123" }
  },
  newUser: {
    "email": { email: "test@test" },
    "name": {name: "New"},
    "password": { password: "123" }
  }
};

export default {
  defaults: { baseURL: "" },
  post: jest.fn(url => {
    if (url.includes("/login")) {
      return Promise.resolve({
        data: fixtures.regUser
      })
    } else if (url.includes("/signup")) {
      return Promise.resolve({
        data: fixtures.newUser
      })
    }
  })
};