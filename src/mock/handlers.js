import { rest } from "msw";
import { adventureNFTs, userProfile, weeklyDosiInfo } from "./mockDB";

export const handlers = [
  rest.get("/adventure-nfts", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(adventureNFTs));
  }),
  rest.get("/user", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(userProfile));
  }),
  rest.get("/weekly-dosi-info", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(weeklyDosiInfo));
  }),
];
