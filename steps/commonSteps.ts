import { Then } from "@cucumber/cucumber";
import * as assert from "assert";

let sharedResponse: any;

export const setResponse = (res: any) => {
  sharedResponse = res;
};

export const getResponse = () => sharedResponse;

Then(
  "the response status code should be {int}",
  function (statusCode: number) {
    assert.strictEqual(sharedResponse.status, statusCode);
  }
);