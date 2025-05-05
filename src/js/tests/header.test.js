import { expect, test } from "vitest";
import header from "../header";

test('Does the header element contain a h1 tag', () => {
    const headerElm = header();
    const headerHTML = headerElm.innerHTML;
    expect(headerHTML).toContain("h1");
})