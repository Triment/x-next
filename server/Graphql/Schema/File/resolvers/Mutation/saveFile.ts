import fs from "fs";
import path from "path";
import { cwd } from "process";
import type { MutationResolvers } from "./../../../types.generated.js";
export const saveFile: NonNullable<MutationResolvers["saveFile"]> = async (
  _parent,
  { file }: { file: File },
  _ctx,
) => {
  /* Implement Mutation.saveFile resolver logic here */
  try {
    const fileArrayBuffer = await file.arrayBuffer();
    await fs.promises.writeFile(
      path.join(cwd(), file.name),
      Buffer.from(fileArrayBuffer),
    );
  } catch (e) {
    return false;
  }
  return true;
};
