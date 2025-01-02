const request = require("supertest");
const app = require("../app");

describe("Holders API", () => {
  it("POST holder 1", async () => {
    const res = await request(app).post("/api/policyholders").send({
      name: "holder-001",
      date: "2024-01-01",
    });
    expect(res.statusCode).toBe(201);
    expect(res.body.id).toBe(1);
    expect(res.body.name).toBe("holder-001");
    expect(res.body.date).toBe("2024-01-01");
  });
  it("POST holder 2", async () => {
    const res = await request(app).post("/api/policyholders").send({
      name: "holder-002",
      date: "2024-01-02",
      referrer: 1,
    });
    expect(res.statusCode).toBe(201);
    expect(res.body.id).toBe(2);
    expect(res.body.parent_id).toBe(1);
  });
  it("POST holder 3", async () => {
    const res = await request(app).post("/api/policyholders").send({
      name: "holder-003",
      date: "2024-01-03",
      referrer: 1,
    });
    expect(res.statusCode).toBe(201);
    expect(res.body.id).toBe(3);
    expect(res.body.parent_id).toBe(1);
  });
  it("POST holder 4", async () => {
    const res = await request(app).post("/api/policyholders").send({
      name: "holder-004",
      date: "2024-01-04",
      referrer: 1,
    });
    expect(res.statusCode).toBe(201);
    expect(res.body.id).toBe(4);
    expect(res.body.parent_id).toBe(2);
  });
  it("POST holder 5", async () => {
    const res = await request(app).post("/api/policyholders").send({
      name: "holder-005",
      date: "2024-01-05",
      referrer: 2,
    });
    expect(res.statusCode).toBe(201);
    expect(res.body.id).toBe(5);
    expect(res.body.parent_id).toBe(2);
  });
  it("POST holder 6", async () => {
    const res = await request(app).post("/api/policyholders").send({
      name: "holder-006",
      date: "2024-01-06",
      referrer: 3,
    });
    expect(res.statusCode).toBe(201);
    expect(res.body.id).toBe(6);
    expect(res.body.parent_id).toBe(3);
  });
  it("POST holder 7", async () => {
    const res = await request(app).post("/api/policyholders").send({
      name: "holder-007",
      date: "2024-01-07",
      referrer: 3,
    });
    expect(res.statusCode).toBe(201);
    expect(res.body.id).toBe(7);
    expect(res.body.parent_id).toBe(3);
  });
  it("POST holder 8", async () => {
    const res = await request(app).post("/api/policyholders").send({
      name: "holder-008",
      date: "2024-01-08",
      referrer: 2,
    });
    expect(res.statusCode).toBe(201);
    expect(res.body.id).toBe(8);
    expect(res.body.parent_id).toBe(4);
  });
  it("POST holder 9", async () => {
    const res = await request(app).post("/api/policyholders").send({
      name: "holder-009",
      date: "2024-01-09",
      referrer: 4,
    });
    expect(res.statusCode).toBe(201);
    expect(res.body.id).toBe(9);
    expect(res.body.parent_id).toBe(4);
  });
  it("POST holder 10", async () => {
    const res = await request(app).post("/api/policyholders").send({
      name: "holder-010",
      date: "2024-01-10",
      referrer: 2,
    });
    expect(res.statusCode).toBe(201);
    expect(res.body.id).toBe(10);
    expect(res.body.parent_id).toBe(5);
  });
  it("POST holder 11", async () => {
    const res = await request(app).post("/api/policyholders").send({
      name: "holder-011",
      date: "2024-01-11",
      referrer: 2,
    });
    expect(res.statusCode).toBe(201);
    expect(res.body.id).toBe(11);
    expect(res.body.parent_id).toBe(5);
  });
  it("POST holder 12", async () => {
    const res = await request(app).post("/api/policyholders").send({
      name: "holder-012",
      date: "2024-01-12",
      referrer: 3,
    });
    expect(res.statusCode).toBe(201);
    expect(res.body.id).toBe(12);
    expect(res.body.parent_id).toBe(6);
  });
  it("POST holder 13", async () => {
    const res = await request(app).post("/api/policyholders").send({
      name: "holder-013",
      date: "2024-01-13",
      referrer: 6,
    });
    expect(res.statusCode).toBe(201);
    expect(res.body.id).toBe(13);
    expect(res.body.parent_id).toBe(6);
  });
  it("POST holder 14", async () => {
    const res = await request(app).post("/api/policyholders").send({
      name: "holder-014",
      date: "2024-01-14",
      referrer: 3,
    });
    expect(res.statusCode).toBe(201);
    expect(res.body.id).toBe(14);
    expect(res.body.parent_id).toBe(7);
  });
  it("POST holder 15", async () => {
    const res = await request(app).post("/api/policyholders").send({
      name: "holder-015",
      date: "2024-01-15",
      referrer: 3,
    });
    expect(res.statusCode).toBe(201);
    expect(res.body.id).toBe(15);
    expect(res.body.parent_id).toBe(7);
  });
});

