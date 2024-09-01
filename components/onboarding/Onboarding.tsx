"use client";

import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CheckCircle, Circle, Loader2, XCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  currentStep,
  totalSteps,
}) => {
  const progress = ((currentStep - 1) / (totalSteps - 1)) * 100;
  // const progress =  totalSteps > 0 && currentStep > 0 ? (currentStep / totalSteps) * 100 : 0;

  const getIcon = (index: number) => {
    if (index < currentStep - 1) {
      return <CheckCircle className="w-6 h-6 text-green-500" />;
    } else if (index === currentStep - 1) {
      return <Circle className="w-6 h-6 text-blue-500" />;
    } else {
      return <XCircle className="w-6 h-6 text-gray-400" />;
    }
  };

  return (
    <div className="w-full relative  ">
      <div className="h-2 bg-gray-200 mt-3">
        <div
          className="absolute top-0 left-0 h-full bg-green-500 transition-all duration-300 ease-in-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="absolute flex w-full justify-between top-1/2 transform -translate-y-1/2">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-8 h-8 bg-white rounded-full border-2"
          >
            {getIcon(index)}
          </div>
        ))}
      </div>
    </div>
  );
};

interface OnboardingStepProps {
  image: string;
  description: string;
  onNext: () => void;
  stepNumber: number;
  totalSteps: number;
}

const OnboardingStep: React.FC<OnboardingStepProps> = ({
  image,
  description,
  onNext,
  stepNumber,
  totalSteps,
}) => (
  <div
    className="max-w-5xl flex items-center justify-center min-h-screen 
      mx-auto"
  >
    <Card className="p-10">
      <CardHeader>
        <CardTitle>Onboarding</CardTitle>
        <div className="mb-4">
          <ProgressBar currentStep={stepNumber} totalSteps={totalSteps} />
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center space-x-20">
          <div>
            <p className="mb-4">
              Étape {stepNumber} sur {totalSteps}
            </p>
            <Image src={image} alt="Onboarding" width={300} height={300} />
          </div>
          <div>
            <p className="text-center mt-4 mb-8">{description}</p>
            <div className="flex justify-end">
              <Button onClick={onNext} className="bg-home_secondary text-white">
                Next
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);

interface OnboardingFormProps {
  onComplete: (userData: { username: string; bio: string }) => Promise<void>;
  stepNumber: number;
  totalSteps: number;
}

const OnboardingForm: React.FC<OnboardingFormProps> = ({
  onComplete,
  stepNumber,
  totalSteps,
}) => {
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await onComplete({ username, bio });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="max-w-5xl flex items-center justify-center min-h-screen
       mx-auto"
    >
      <Card className="p-10">
        <CardHeader>
          <CardTitle>Onboarding</CardTitle>
          <div className="mb-4">
            <ProgressBar currentStep={stepNumber} totalSteps={totalSteps} />
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center mt-4 space-x-10">
            <div>
              <p className="text-lg font-medium">
                Veuillez remplir les informations ci-dessous <br /> pour
                compléter votre inscription.
              </p>
            </div>
            <div>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col items-start space-y-3"
              >
                <Input
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <Input
                  placeholder="Bio"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  required
                />
                <div className="flex justify-end w-full">
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="bg-home_secondary text-white"
                  >
                    {isLoading ? <Loader2 /> : "Terminer"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

interface OnboardingStep {
  image: string;
  description: string;
}

export default function Onboarding() {
  const { data: session, update } = useSession();
  const [step, setStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const onboardingSteps: OnboardingStep[] = [
    {
      image: "/galsenext.png",
      description: "Bienvenue sur notre plateforme !",
    },
    {
      image: "/galsenext.png",
      description:
        "Découvrez des cours adaptés à votre niveau et à votre spécialité.",
    },
  ];

  const totalSteps = onboardingSteps.length + 1;
  const handleComplete = async (userData: {
    username: string;
    bio: string;
  }) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/user/onboard", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const { user } = await response.json();
        //console.log("User data updated:", user);

        const updatedSession = await update({
          ...session,
          user: { ...session?.user, isOnboarded: true },
        });
        //console.log("Session updated:", updatedSession);

        router.push("/");
      } else {
        //console.error("Failed to update user data");
      }
    } catch (error) {
      //console.error("Error during onboarding:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {step < onboardingSteps.length ? (
        <OnboardingStep
          {...onboardingSteps[step]}
          onNext={() => setStep(step + 1)}
          stepNumber={step + 1}
          totalSteps={totalSteps}
        />
      ) : (
        <OnboardingForm
          onComplete={handleComplete}
          stepNumber={step + 1}
          totalSteps={totalSteps}
        />
      )}
      {isLoading && <Loader2 />}
    </>
  );
}
