type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};

const expect = (val: any): ToBeOrNotToBe => ({
    toBe: (val2) => {
        if (val === val2) {
            return true;
        }
        throw "Not Equal";
    },
    notToBe: (val2) => {
        if (val !== val2) {
            return true;
        }
        throw "Equal";
    }
});

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
