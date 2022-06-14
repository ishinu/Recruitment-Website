'use strict'

class CreateUser {
  get rules () {
    return {
      'username' : 'required|unique:users',
      'email' : 'required|unique:users',
      'password' : 'required'
    }
  }
  
  get messages() {
    return { 
      'required' : 'Woah Now, {{ field }} is required.',
      'unique' : 'Wait a second, the {{ field }} already exist.'
    }
}

  async fails(error) {
    this.ctx.session.withErrors(error)
      .flashAll();

    return this.ctx.response.redirect('back');
  }
}

module.exports = CreateUser
