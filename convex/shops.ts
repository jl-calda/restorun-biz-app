import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { Doc, Id } from "./_generated/dataModel";

export const create = mutation({
  args: {
    shopName: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) throw new Error("Unauthorized");

    const userId = identity.subject;

    const shop = await ctx.db.insert("shops", {
      shopName: args.shopName,
      userId,
    });

    return shop;
  },
});

export const getByUserId = query({
  args: {
    userId: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) throw new Error("Unauthorized");

    const userId = identity.subject;

    const shops = await ctx.db
      .query("shops")
      .withIndex("by_user", (q) => q.eq("userId", args.userId))
      .order("desc")
      .collect();
    return shops;
  },
});

export const getFirstByUserId = query({
  args: {
    userId: v.optional(v.string() || v.null()),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) throw new Error("Unauthorized");

    const shops = await ctx.db
      .query("shops")
      .withIndex("by_user", (q) =>
        q.eq("userId", args.userId ? args.userId : "")
      )
      .order("desc")
      .first();
    return shops;
  },
});

export const getByShopId = query({
  args: {
    shopId: v.string(),
  },
  handler: async (ctx, args) => {
    const shop = await ctx.db
      .query("shops")
      .filter((q) => q.eq(q.field("_id"), args.shopId))
      .first();
    return shop;
  },
});

export const getShops = query({
  handler: async (ctx) => {
    const shops = await ctx.db.query("shops").collect();
    return shops;
  },
});
