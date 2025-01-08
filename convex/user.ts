import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const updateUser = mutation({
  args: {
    userId: v.string(),
    name: v.string(),
    email: v.string(),
  },
  handler: async (ctx, { userId, name, email }) => {
    // Check If the user Exists
    const existingUser = await ctx.db
      .query("users")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .first();

    if(existingUser){
        //Update the existing User
        ctx.db.patch(existingUser._id,{
            name,
            email
        });
        return existingUser._id
    }
    //Create new user
    const newUserId = await ctx.db.insert("users",{
        userId,
        name,
        email,
        stripeConnectId:undefined
    })
    return newUserId
  },
});
