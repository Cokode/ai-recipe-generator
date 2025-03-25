import { defineAuth } from '@aws-amplify/backend';

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: {
      verificationEmailStyle: "CODE",
      verificationEmailSubject: "Welcome to the AI-Powered Recipe Generator!",
      verificationEmailBody: (createCode) => 
        `🎉 Welcome aboard! Use this code to verify your account: ${createCode()} ✅  

        I'm excited to have you! If you need any help, I'm here for you.  

        Cheers,  
        Collins Mr 🍀🚀`
    }
  }
})