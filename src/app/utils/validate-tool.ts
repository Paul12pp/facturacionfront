export class ValidateTool {
    public static validDominicanID(dominicanID: string): boolean {
        if (dominicanID === null || dominicanID.length !== 11) {
            return false;
        }
        const id = dominicanID.replace(/-/g, '');
        const identification: any = id.substr(0, id.length - 1);
        const verification: any = id.substr(id.length - 1, 1);
        let checksum = 0;
        for (let i = 0; i < identification.length; i++) {
            let mod;
            if ((i % 2) === 0) {
                mod = 1;
            } else {
                mod = 2;
            }
            let res: number = identification.substr(i, 1) * mod;
            let resString;
            if (res > 9) {
                resString = res.toString();
                res = (Number(resString.substr(0, 1)) + Number(resString.substr(1, 1)));
            }
            checksum += Number(res);
        }
        const lastDigit = (10 - (checksum % 10)) % 10;
        return lastDigit === Number(verification) && identification.substr(0, 3) !== '000';
    }
}