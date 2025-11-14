const request = require("supertest");
const app =  require("../app");

describe("API Test", () => {
  it("GET /ping should return pong", async () => {
    const res = await request(app).get("/ping");
    
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: "pong" });
  });
});
