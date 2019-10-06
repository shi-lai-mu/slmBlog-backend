import { Service } from 'egg';

/**
 * Test Service
 */
export default class Test extends Service {

  /**
   * sayHi to you
   * @param name - your name
   */
  public async sayHi(name: string) {
    console.log(
      this.app
    );
    
    console.log(await this.app.mysql.select('bbs_user'))
    return `hi, ${name}`;
  }
}
