const functions = require("firebase-functions");
const express = require("express");
// const cors = require("cors");

const admin = require("firebase-admin");
admin.initializeApp();

const app = express();

app.get("/", async (request, response) => {
  const snapshot = await admin.firestore().collection("users").get();

  const users = [];
  snapshot.forEach((doc) => {
    const id = doc.id;
    const data = doc.data();

    users.push({id, ...data});
  });
  response.status(200).send(JSON.stringify(users));
});

app.get("/:id", async (request, response) => {
  const snapshot = await admin.firestore().collection("users")
      .doc(request.params.id).get();

  const userId = snapshot.id;
  const userData = snapshot.data();

  response.status(200).send(JSON.stringify({id: userId, ...userData}));
});

app.post("/", async (request, response) => {
  const user = request.body;
  await admin.firestore().collection("users").add(user);

  response.status(201).send();
});

app.delete("/:id", async (request, response) => {
  await admin.firestore().collection("users").doc(request.params.id).delete();

  response.status(200).send();
});

exports.user = functions.https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});
