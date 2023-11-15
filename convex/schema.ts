import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  shops: defineTable({
    shopName: v.string(),
    userId: v.string(),
  }).index("by_user", ["userId"]),
});
