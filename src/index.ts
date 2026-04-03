import { createApp } from "./api/app";

const PORT = Number(process.env.PORT ?? 3000);

const app = createApp();

app.listen(PORT, () => {
  // Keep startup logging explicit for quick demo feedback.
  console.log(`payment-workflow listening on port ${PORT}`);
});
