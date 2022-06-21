import NextAuth from "next-auth"
import { getToken } from "next-auth/jwt";
import GoogleProvider from "next-auth/providers/google";
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
    
    
  ],
  callbacks: {
    async session({ session, token }) {
      session.user.firstName = session.user.name.split(" ")
      session.user.uid = token.sub;
      return session
  },
},
 secret:process.env.JWT_SECRET
});