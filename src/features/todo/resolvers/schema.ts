import { PRIORITY, STATUS } from "@/constants";
import { z } from "zod";

export const todoSchema = z.object({
  title: z
    .string()
    .min(1, { message: "タイトルは必須です" })
    .max(100, { message: "タイトルは100文字以内で入力してください" }),
  description: z
    .string()
    .max(500, { message: "説明は500文字以内で入力してください" })
    .optional(),
  priority: z.enum([PRIORITY.HIGH, PRIORITY.MEDIUM, PRIORITY.LOW], {
    required_error: "優先度を選択してください",
  }),
  status: z.enum([STATUS.NOT_STARTED, STATUS.IN_PROGRESS, STATUS.COMPLETED], {
    required_error: "ステータスを選択してください",
  }),
});
