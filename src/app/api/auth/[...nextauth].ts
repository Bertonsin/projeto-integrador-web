import NextAuth from "next-auth"
import Twitter from "next-auth/providers/twitter"

export const authOptions = {
  providers: [
    Twitter({
      clientId: process.env.TWITTER_ID as string,
      clientSecret: process.env.NEXTAUTH_SECRET as string,
      version: '2.0'
    }),
  ],
}

export default NextAuth(authOptions)