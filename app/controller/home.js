'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this; // 这是固定的写法
    ctx.body = 'hi, egg';
  }

  async list() {
    const { ctx } = this;
    ctx.body = '<h1>hi list</h1>'
  }
}

module.exports = HomeController;
