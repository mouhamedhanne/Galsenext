"use client";

import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { PropsWithChildren } from "react";
import { Toaster } from "react-hot-toast";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { I18nProviderClient } from "@/locales/client";
import { usePathname } from "next/navigation";

const queryClient = new QueryClient();

export const Providers = (props: PropsWithChildren<{ locale: string }>) => {
  const pathname = usePathname();
  const isLandingPage = pathname === "/";

  return (
    <>
      <SessionProvider>
        <Toaster />
        <ProgressBar
          height="3px"
          color="#FFA500"
          options={{ showSpinner: false }}
          shallowRouting
        />
        <QueryClientProvider client={queryClient}>
          <I18nProviderClient locale={props.locale}>
            {isLandingPage ? (
              props.children
            ) : (
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
              >
                {props.children}
              </ThemeProvider>
            )}
          </I18nProviderClient>
        </QueryClientProvider>
      </SessionProvider>
    </>
  );
};

{
  /**
  "use client";

import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { PropsWithChildren } from "react";
import { Toaster } from "react-hot-toast";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { I18nProviderClient } from "@/locales/client";

const queryClient = new QueryClient();

export const Providers = (props: PropsWithChildren<{ locale: string }>) => {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <SessionProvider>
          <Toaster />

          <ProgressBar
            height="3px"
            color="#FFA500"
            options={{ showSpinner: false }}
            shallowRouting
          />
          <QueryClientProvider client={queryClient}>
            <I18nProviderClient locale={props.locale}>
              {props.children}
            </I18nProviderClient>
          </QueryClientProvider>
        </SessionProvider>
      </ThemeProvider>
    </>
  );
}; */
}
