import express from "express"; //modulejs

const app = express();

//by this way server is creared that the things
app.get("/", (req, res) => {
  res.send("server is ready");
});
//Playing wwth basic routes
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: "1",
      question: "What do you call a fish wearing a bowtie?",
      answer: "Sofishticated",
    },
    {
      id: "2",
      question: "How do you make a tissue dance?",
      answer: "You put a little boogie in it",
    },
    {
      id: "3",
      question: "What do you get when you cross a snowman with a vampire?",
      answer: "Frostbite",
    },
    {
      id: "4",
      question: "Why did the math book look so sad?",
      answer: "Because it had so many problems",
    },
    {
      id: "5",
      question: "What do you call a bear with no teeth?",
      answer: "A gummy bear",
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 5000; //hard coded code firstcheck from env file if not there use it

app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
