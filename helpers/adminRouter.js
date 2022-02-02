// const AdminJS = require('adminjs')
// const AdminJSExpress = require('@adminjs/express')
// const AdminJSMongoose = require('@adminjs/mongoose')

// AdminJS.registerAdapter(AdminJSMongoose)

// const User = require('../model/User');
// const Coaching = require('../model/Coaching');
// const Category = require('../model/Category');


// const express = require('express');
// const app = express()

// var buildAdminRouter=async()=> {

//   const adminJsOptions = {
//     resources: [User,Coaching,Category],
//     rootPath: '/admin',
//   }
  
//   var adminJS = new AdminJS(adminJsOptions)
  
//   const router = AdminJSExpress.buildRouter(adminJS)
  
//   app.use(adminJsOptions.rootPath, router);
// }

// module.exports=buildAdminRouter