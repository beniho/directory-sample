"use client";

import { FormControl, FormLabel, Select, Stack } from "@chakra-ui/react";
import { ChangeEvent } from "react";
import { Settings } from "../types";

interface SettingsFormProps {
  settings: Settings;
  onUpdate: (settings: Partial<Settings>) => void;
}

export const SettingsForm = ({ settings, onUpdate }: SettingsFormProps) => {
  return (
    <Stack spacing={4}>
      <FormControl>
        <FormLabel>テーマ</FormLabel>
        <Select
          value={settings.theme}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            onUpdate({ theme: e.target.value as Settings["theme"] })
          }
        >
          <option value="light">ライト</option>
          <option value="dark">ダーク</option>
          <option value="system">システム設定に従う</option>
        </Select>
      </FormControl>

      <FormControl>
        <FormLabel>並び替え基準</FormLabel>
        <Select
          value={settings.sortBy}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            onUpdate({ sortBy: e.target.value as Settings["sortBy"] })
          }
        >
          <option value="createdAt">作成日時</option>
          <option value="title">タイトル</option>
          <option value="completed">完了状態</option>
        </Select>
      </FormControl>

      <FormControl>
        <FormLabel>並び替え順序</FormLabel>
        <Select
          value={settings.sortOrder}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            onUpdate({ sortOrder: e.target.value as Settings["sortOrder"] })
          }
        >
          <option value="asc">昇順</option>
          <option value="desc">降順</option>
        </Select>
      </FormControl>
    </Stack>
  );
};
