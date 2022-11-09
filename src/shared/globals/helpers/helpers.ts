import startCase from 'lodash/startCase';

export class Helpers {
  static firstLetterUppercase(str: string): string {
    return startCase(str);
  }

  static generateRandomIntegers(integerLen: number): number {
    const chars = '0123456789';
    let result = ' ';

    const charsLength = chars.length;
    for (let i = 0; i < integerLen; i++) {
      result += chars.charAt(Math.floor(Math.random() * charsLength));
    }

    return parseInt(result, 10);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static parseJson(prop: string): any {
    try {
      return JSON.parse(prop);
    } catch (error) {
      return prop;
    }
  }
}
