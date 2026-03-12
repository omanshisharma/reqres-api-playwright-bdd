import { Given, When, Then } from "@cucumber/cucumber";
import { post } from "../utils/apiHelper";
import { AxiosResponse } from "axios";
import * as assert from "assert";

let response: AxiosResponse;
let endpoint: string;

Given("I have the login endpoint", function () {
  endpoint = "/login";
});

When(
  "I send a POST request with email {string} and password {string}",
  async function (email: string, password: string) {
    try {
      response = await post(endpoint, { email, password });
    } catch (error: any) {
      response = error.response;
    }
  }
);

Then(
  "the response status code should be {int}",
  function (statusCode: number) {
    assert.strictEqual(response.status, statusCode);
  }
);

Then("the response should contain a token", function () {
  assert.ok(response.data.token, "Token should be present in response");
});

Then("the response should contain an error message", function () {
  assert.ok(response.data.error, "Error message should be present in response");
});