import { Given, When, Then } from "@cucumber/cucumber";
import * as assert from "assert";
import { get } from "../utils/apiHelper";
import { setResponse, getResponse } from "./commonSteps";

let endpoint: string;

Given("I have the users endpoint", function () {
  endpoint = "/users";
});

When(
  "I send a GET request to fetch users on page {int}",
  async function (page: number) {
    try {
      const res = await get(`${endpoint}?page=${page}`);
      setResponse(res);
    } catch (error: any) {
      setResponse(error.response);
    }
  }
);

When(
  "I send a GET request to fetch user with id {int}",
  async function (id: number) {
    try {
      const res = await get(`${endpoint}/${id}`);
      setResponse(res);
    } catch (error: any) {
      setResponse(error.response);
    }
  }
);

Then("the response should contain a list of users", function () {
  assert.ok(getResponse().data.data, "Data field should exist");
  assert.ok(
    getResponse().data.data.length > 0,
    "User list should not be empty"
  );
});

Then("the response should contain user details", function () {
  assert.ok(getResponse().data.data.id, "User id should exist");
  assert.ok(getResponse().data.data.email, "User email should exist");
});