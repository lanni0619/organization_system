const request = require("supertest");
const app = require("../app");

describe("Holders API", () => {
  it("POST holder 1", async () => {
    const res = await request(app).post("/api/policyholders").send({
      name: "holders001",
      date: "2024-01-01",
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body.id).toEqual(1);
    expect(res.body.name).toBe("holders001");
    expect(res.body.date).toBe("2024-01-01");
  });
  it("POST holder 2", async () => {
    const res = await request(app).post("/api/policyholders").send({
      name: "holders002",
      date: "2024-01-02",
      referrer: 1,
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body.id).toEqual(2);
    expect(res.body.parent_id).toBe(1);
  });
  it("POST holder 3", async () => {
    const res = await request(app).post("/api/policyholders").send({
      name: "holders003",
      date: "2024-01-03",
      referrer: 1,
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body.id).toEqual(3);
    expect(res.body.parent_id).toBe(1);
  });
  it("POST holder 4", async () => {
    const res = await request(app).post("/api/policyholders").send({
      name: "holders004",
      date: "2024-01-04",
      referrer: 1,
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body.id).toEqual(4);
    expect(res.body.parent_id).toBe(2);
  });
  it("POST holder 5", async () => {
    const res = await request(app).post("/api/policyholders").send({
      name: "holders005",
      date: "2024-01-05",
      referrer: 2,
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body.id).toEqual(5);
    expect(res.body.parent_id).toBe(2);
  });
  it("POST holder 6", async () => {
    const res = await request(app).post("/api/policyholders").send({
      name: "holders006",
      date: "2024-01-06",
      referrer: 3,
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body.id).toEqual(6);
    expect(res.body.parent_id).toBe(3);
  });
  it("POST holder 7", async () => {
    const res = await request(app).post("/api/policyholders").send({
      name: "holders007",
      date: "2024-01-07",
      referrer: 3,
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body.id).toEqual(7);
    expect(res.body.parent_id).toBe(3);
  });
  it("POST holder 8", async () => {
    const res = await request(app).post("/api/policyholders").send({
      name: "holders008",
      date: "2024-01-08",
      referrer: 2,
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body.id).toEqual(8);
    expect(res.body.parent_id).toBe(4);
  });
});

