import {describe, expect, it} from "vitest"
import sayMyName from "./index";


describe("it return name", () => {

    it("must be string", () => {
        expect(sayMyName('alyreza')).toBe("alyreza")
    })

})