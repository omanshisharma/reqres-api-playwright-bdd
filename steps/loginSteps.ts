import { Given, When, Then } from "@cucumber/cucumber";
import { post } from "../utils/apiHelper";
import * as assert from "assert";
import { setResponse, getResponse } from "./commonSteps";

let endpoint: string;

Given("I have the login endpoint", function () {
  endpoint = "/login";
});

When(
  "I send a POST request with email {string} and password {string}",
  async function (email: string, password: string) {
    try {
      const res = await post(endpoint, { email, password });
      setResponse(res);
    } catch (error: any) {
      setResponse(error.response);
    }
  }
);

Then("the response should contain a token", function () {
  assert.ok(getResponse().data.token, "Token should be present");
});

Then("the response should contain an error message", function () {
  assert.ok(getResponse().data.error, "Error should be present");
});