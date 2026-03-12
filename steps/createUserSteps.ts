import { Given, When, Then } from "@cucumber/cucumber";
import { post } from "../utils/apiHelper";
import * as assert from "assert";
import { setResponse, getResponse } from "./commonSteps";

let endpoint: string;

Given("I have the create user endpoint", function () {
  endpoint = "/users";
});

When(
  "I send a POST request to create a user with name {string} and job {string}",
  async function (name: string, job: string) {
    try {
      const res = await post(endpoint, { name, job });
      setResponse(res);
    } catch (error: any) {
      setResponse(error.response);
    }
  }
);

Then("the response should contain the created user details", function () {
  assert.ok(getResponse().data.id, "Id should be present");
  assert.ok(getResponse().data.name, "Name should be present");
  assert.ok(getResponse().data.job, "Job should be present");
  assert.ok(getResponse().data.createdAt, "CreatedAt should be present");
});