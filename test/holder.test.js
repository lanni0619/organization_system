const request = require("supertest");
const app = require("../app");

describe("Initaliz", () => {
  it("Reset DB API", async () => {
    const res = await request(app).get("/api/policyholders/resetDB");
    expect(res.statusCode).toBe(200);
  });
});

describe("Create holders API", () => {
  it("Create holder 1", async () => {
    const res = await request(app).post("/api/policyholders").send({
      name: "holder-001",
      date: "2024-01-01",
    });

    const { id, name, date } = res.body;

    expect(res.statusCode).toBe(201);
    expect(id).toBe(1);
    expect(name).toBe("holder-001");
    expect(date).toBe("2024-01-01");
  });
  it("Create holder without referrer", async () => {
    const res = await request(app).post("/api/policyholders").send({
      name: "holder-002",
      date: "2024-01-02",
    });

    expect(res.statusCode).toBe(401);
    expect(res.body).toBe("Invalid name, date or referrer");
  });
  it("Create holder 2", async () => {
    const res = await request(app).post("/api/policyholders").send({
      name: "holder-002",
      date: "2024-01-02",
      referrer: 1,
    });

    const { id, parent_id } = res.body;

    expect(res.statusCode).toBe(201);
    expect(id).toBe(2);
    expect(parent_id).toBe(1);
  });
  it("Create holder 3", async () => {
    const res = await request(app).post("/api/policyholders").send({
      name: "holder-003",
      date: "2024-01-03",
      referrer: 1,
    });

    const { id, parent_id } = res.body;

    expect(res.statusCode).toBe(201);
    expect(id).toBe(3);
    expect(parent_id).toBe(1);
  });
  it("Create holder 4", async () => {
    const res = await request(app).post("/api/policyholders").send({
      name: "holder-004",
      date: "2024-01-04",
      referrer: 1,
    });

    const { id, parent_id } = res.body;

    expect(res.statusCode).toBe(201);
    expect(id).toBe(4);
    expect(parent_id).toBe(2);
  });
  it("Create holder 5", async () => {
    const res = await request(app).post("/api/policyholders").send({
      name: "holder-005",
      date: "2024-01-05",
      referrer: 2,
    });

    const { id, parent_id } = res.body;

    expect(res.statusCode).toBe(201);
    expect(id).toBe(5);
    expect(parent_id).toBe(2);
  });
  it("Create holder 6", async () => {
    const res = await request(app).post("/api/policyholders").send({
      name: "holder-006",
      date: "2024-01-06",
      referrer: 3,
    });

    const { id, parent_id } = res.body;

    expect(res.statusCode).toBe(201);
    expect(id).toBe(6);
    expect(parent_id).toBe(3);
  });
  it("Create holder 7", async () => {
    const res = await request(app).post("/api/policyholders").send({
      name: "holder-007",
      date: "2024-01-07",
      referrer: 3,
    });

    const { id, parent_id } = res.body;

    expect(res.statusCode).toBe(201);
    expect(id).toBe(7);
    expect(parent_id).toBe(3);
  });
  it("Create holder 8", async () => {
    const res = await request(app).post("/api/policyholders").send({
      name: "holder-008",
      date: "2024-01-08",
      referrer: 2,
    });

    const { id, parent_id } = res.body;

    expect(res.statusCode).toBe(201);
    expect(id).toBe(8);
    expect(parent_id).toBe(4);
  });
  it("Create holder 9", async () => {
    const res = await request(app).post("/api/policyholders").send({
      name: "holder-009",
      date: "2024-01-09",
      referrer: 4,
    });

    const { id, parent_id } = res.body;

    expect(res.statusCode).toBe(201);
    expect(id).toBe(9);
    expect(parent_id).toBe(4);
  });
  it("Create holder 10", async () => {
    const res = await request(app).post("/api/policyholders").send({
      name: "holder-010",
      date: "2024-01-10",
      referrer: 2,
    });

    const { id, parent_id } = res.body;

    expect(res.statusCode).toBe(201);
    expect(id).toBe(10);
    expect(parent_id).toBe(5);
  });
  it("Create holder 11", async () => {
    const res = await request(app).post("/api/policyholders").send({
      name: "holder-011",
      date: "2024-01-11",
      referrer: 2,
    });

    const { id, parent_id } = res.body;

    expect(res.statusCode).toBe(201);
    expect(id).toBe(11);
    expect(parent_id).toBe(5);
  });
  it("Create holder 12", async () => {
    const res = await request(app).post("/api/policyholders").send({
      name: "holder-012",
      date: "2024-01-12",
      referrer: 3,
    });

    const { id, parent_id } = res.body;

    expect(res.statusCode).toBe(201);
    expect(id).toBe(12);
    expect(parent_id).toBe(6);
  });
  it("Create holder 13", async () => {
    const res = await request(app).post("/api/policyholders").send({
      name: "holder-013",
      date: "2024-01-13",
      referrer: 6,
    });
    expect(res.statusCode).toBe(201);

    const { id, parent_id } = res.body;

    expect(res.statusCode).toBe(201);
    expect(id).toBe(13);
    expect(parent_id).toBe(6);
  });
  it("Create holder 14", async () => {
    const res = await request(app).post("/api/policyholders").send({
      name: "holder-014",
      date: "2024-01-14",
      referrer: 3,
    });
    expect(res.statusCode).toBe(201);

    const { id, parent_id } = res.body;

    expect(res.statusCode).toBe(201);
    expect(id).toBe(14);
    expect(parent_id).toBe(7);
  });
  it("Create holder 15", async () => {
    const res = await request(app).post("/api/policyholders").send({
      name: "holder-015",
      date: "2024-01-15",
      referrer: 3,
    });

    const { id, parent_id } = res.body;

    expect(res.statusCode).toBe(201);
    expect(id).toBe(15);
    expect(parent_id).toBe(7);
  });
});

describe("Query holder API", () => {
  it("Query existing holder", async () => {
    const queryID = 1;
    const res = await request(app)
      .get("/api/policyholders")
      .query({ id: queryID });

    const { id, left, right } = res.body;

    expect(res.statusCode).toBe(200);
    expect(id).toBe(queryID);
    expect(left.parent_id).toBe(queryID);
    expect(right.parent_id).toBe(queryID);
  });
  it("Query non-existent holder", async () => {
    const queryID = 100;
    const res = await request(app)
      .get("/api/policyholders")
      .query({ id: queryID });

    const { error } = res.body;

    expect(res.statusCode).toBe(404);
    expect(error).toBe("Policyholder not found");
  });
});

describe("Query holder's parent API", () => {
  it("test case 1", async () => {
    const id = 1;
    const res = await request(app).get(`/api/policyholders/${id}/top`);

    expect(res.statusCode).toBe(404);
  });

  it("test case 2", async () => {
    for (let i = 2; i <= 15; i++) {
      const res = await request(app).get(`/api/policyholders/${i}/top`);
      expect(res.statusCode).toBe(200);
      const { left, right } = res.body;
      expect([left.id, right.id]).toEqual(expect.arrayContaining([i]));
    }
  });
});

