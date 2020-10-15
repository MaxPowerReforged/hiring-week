'use strict'

const app = require("../../index");
const request = require("../../modules/node_modules/supertest");

describe("Test public routes", () => {
  it("should respond with a 200 response and a 'Hello World' body in / route", () => {
    return request(app)
      .get("/")
      .expect(200, "Hello World!")
  })
})