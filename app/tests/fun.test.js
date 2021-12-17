import { assertEquals } from "https://deno.land/std@0.118.0/testing/asserts.ts";

import { laskuri } from "../fun.js";

Deno.test("Laskuri laskee oikein", () => {
  const tulos = laskuri(1, 3);
  assertEquals(tulos, 4);
});
