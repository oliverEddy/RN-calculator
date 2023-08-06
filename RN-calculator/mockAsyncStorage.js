const mockAsyncStorage = {
  // Initialize an empty data object to simulate local storage
  data: {},

  getItem: jest.fn((key) => Promise.resolve(mockAsyncStorage.data[key])),

  setItem: jest.fn((key, value) => {
    mockAsyncStorage.data[key] = value;
    return Promise.resolve();
  }),

  removeItem: jest.fn((key) => {
    delete mockAsyncStorage.data[key];
    return Promise.resolve();
  }),

  clear: jest.fn(() => {
    mockAsyncStorage.data = {};
    return Promise.resolve();
  }),
};

export default mockAsyncStorage;
