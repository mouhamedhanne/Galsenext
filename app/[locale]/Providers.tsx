"use client";

import { ThemeProvider } from "next-themes";
import { PropsWithChildren, createContext, useContext } from "react";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { I18nProviderClient } from "@/locales/client";

const queryClient = new QueryClient();

const ThemeExclusionContext = createContext(false);

export const useThemeExclusion = () => useContext(ThemeExclusionContext);

export const ExcludeFromTheme = ({ children }: PropsWithChildren) => (
  <ThemeExclusionContext.Provider value={true}>
    {children}
  </ThemeExclusionContext.Provider>
);

const CustomThemeProvider = ({ children }: PropsWithChildren) => {
  const isExcluded = useThemeExclusion();

  if (isExcluded) {
    return <>{children}</>;
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
};

export const Providers = (props: PropsWithChildren<{ locale: string }>) => {
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
            <CustomThemeProvider>{props.children}</CustomThemeProvider>
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
