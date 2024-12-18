import { defineAction } from "astro:actions";
import { z } from "astro:schema";

export const server = {
  secretcode: defineAction({
    accept: "form",
    input: z.object({
        secret1: z.string({ message: "We need your secret -- whisper it here!" }),
        secret2: z.string({ message: "We need your secret -- second word here." }),
        secret3: z.string({ message: "We need your secret -- last word, please." }),
    }),

    handler: async (input) => {
      // do something here
      console.log("DATA: ",JSON.stringify(input));

      // we need to query the 'Member' endpoint for the id matching this code
      const joinedCode = input.secret1 + '-' + input.secret2 + '-' + input.secret3;
      console.log("JOINED: ",joinedCode);
    },
  }),
};