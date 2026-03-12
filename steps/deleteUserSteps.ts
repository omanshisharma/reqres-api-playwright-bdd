import { Given, When } from "@cucumber/cucumber";
import { del } from "../utils/apiHelper";
import { setResponse } from "./commonSteps";

let endpoint: string;

Given("I have the delete user endpoint", function () {
  endpoint = "/users";
});

When(
  "I send a DELETE request for user with id {int}",
  async function (id: number) {
    try {
      const res = await del(`${endpoint}/${id}`);
      setResponse(res);
    } catch (error: any) {
      setResponse(error.response);
    }
  }
);