// export type Photo = {
//   albumId: number;
//   id: number;
//   title: string;
//   url: string;
//   thumbnailUrl: string;
// };

import { z } from "zod";

export const Photo = z.object({
  albumId: z.number(),
  id: z.number(),
  title: z.string(),
  url: z.string(),
  thumbnailUrl: z.optional(z.string()),
});

export type Photo = z.infer<typeof Photo>;
