var models  = require('../models');
var moment = require('moment');

var roleAtt = ['title', 'description', 'identifier', 'email', 'active', 'id'];
var userAtt = ['first_name', 'last_name', 'email', 'kthid', 'ugkthid'];
var groupAtt = ['name', 'identifier'];
var mandateAtt = ['start', 'end'];

exports.rolesFindAllTypeCurrent = function (groupIdentifier) {
  var now = new moment().format('YYYY-MM-DD');
  return models.Role.findAll({
    attributes: roleAtt,
    include: [{
      attributes: mandateAtt,
      model: models.Mandate, 
      required: false,
      where: {start: {$lte: now}, end: {$gte: now}},
      include: [{
        attributes: userAtt,
        model: models.User,
      }],
    },{
      attributes: groupAtt,
      required:   true,
      where:      {identifier: groupIdentifier},
      model:      models.Group,
    }],
    order: [
      [models.Group, 'name'],
      ['title'],
    ] 
  });
};

exports.rolesFindAllType = function (groupIdentifier) {
  return models.Role.findAll({
    attributes: roleAtt,
    include: [{
      attributes: mandateAtt,
      model: models.Mandate, 
      required: false,
      include: [{
        attributes: userAtt,
        model: models.User,
      }],
    },{
      attributes: groupAtt,
      required:   true,
      where:      {identifier: groupIdentifier},
      model:      models.Group,
    }],
    order: [
      [models.Group, 'name'],
      ['title'],
    ] 
  });
};

exports.rolesFindAll = function() {
  return models.Role.findAll({
    attributes: roleAtt,
    include: [{
      attributes: mandateAtt,
      model: models.Mandate, 
      required: false,
      include: [{
        attributes: userAtt,
        model: models.User,
      }],
    },{
      attributes: groupAtt,
      model: models.Group, 
    }],
    order: [
      [models.Group, 'name'],
      ['title'],
    ] 
  });
};

exports.rolesFindAllCurrent = function() {
  var now = new moment().format('YYYY-MM-DD');
  return models.Role.findAll({
    attributes: roleAtt,
    include: [{
      attributes: mandateAtt,
      model: models.Mandate, 
      required: false,
      where: {start: {$lte: now}, end: {$gte: now}},
      include: [{
        attributes: userAtt,
        model: models.User,
      }],
    },{
      attributes: groupAtt,
      model: models.Group, 
    }],
    order: [
      [models.Group, 'name'],
      ['title'],
    ] 
  });
};
