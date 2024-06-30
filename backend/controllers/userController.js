const express = require("express");
const fs = require("fs");

const users = JSON.parse(fs.readFileSync(`${__dirname}/../data/users.json`));

exports.getAllUsers = (request, response) => {
  response.status(200).json({
    status: "success",
    results: users.length,
    data: {
      users,
    },
  });
};

exports.getUser = (request, response) => {
  // // convert the string to number,
  // // use this trick to convert string to number.
  const id = request.params.id * 1;
  const user = users.find((element) => element.id === id);

  response.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
};

exports.createUser = (request, response) => {
  const newId = users[users.length - 1].id + 1;
  const newUser = Object.assign({ id: newId }, request.body);
  users.push(newUser);
  fs.writeFile(
    `${__dirname}/../data/users.json`,
    JSON.stringify(users),
    (error) => {
      response.status(201).json({
        status: "success",
        data: {
          user: newUser,
        },
      });
    }
  );
};

exports.updateUser = (request, response) => {
  const id = request.params.id * 1;

  response.status(200).json({
    status: "success",
    newData: "Updated user here...",
  });
};

exports.deleteUser = (request, response) => {
  const newUsers = users.filter(
    (element) => element.id !== request.params.id * 1
  );

  response.status(402).json({
    status: "success",
    body: newUsers,
  });
};
