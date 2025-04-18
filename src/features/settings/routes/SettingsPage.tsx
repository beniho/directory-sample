"use client";

import { Button } from "@chakra-ui/react";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { SettingsForm } from "../components/SettingsForm";
import { useSettings } from "../hooks/useSettings";

export const SettingsPage = () => {
  const { settings, updateSettings } = useSettings();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center mb-6">
          <Link href="/">
            <Button
              variant="ghost"
              colorScheme="gray.400"
              size="sm"
              className="mr-4"
            >
              <FiArrowLeft />
            </Button>
          </Link>
          <h1 className="text-2xl font-bold dark:text-gray-100">設定</h1>
        </div>
        <SettingsForm settings={settings} onUpdate={updateSettings} />
      </div>
    </div>
  );
};
