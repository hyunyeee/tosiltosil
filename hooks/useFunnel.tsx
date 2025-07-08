"use client";

import { ReactElement, ReactNode, useState } from "react";

type NonEmptyTuple<T> = readonly [T, ...T[]];

interface StepProps<StepKey extends string> {
  name: StepKey;
  children: ReactNode;
}
interface FunnelProps<StepKey extends string> {
  children: ReactElement<StepProps<StepKey>>[];
}

export default function useFunnel<Steps extends NonEmptyTuple<string>>(
  steps: Steps
) {
  type StepKey = Steps[number];

  const [currentStep, setCurrentStep] = useState<StepKey>(steps[0]);

  const idx = steps.indexOf(currentStep);
  const isFirst = idx === 0;
  const isLast = idx === steps.length - 1;

  const nextStep = () => {
    if (!isLast) setCurrentStep(steps[idx + 1]);
  };

  const prevStep = () => {
    if (!isFirst) setCurrentStep(steps[idx - 1]);
  };

  const setStep = (step: StepKey) => {
    if (steps.includes(step)) {
      setCurrentStep(step);
    }
  };

  const Funnel = ({ children }: FunnelProps<StepKey>) => {
    const targetStep = children.find(
      (childStep) => childStep.props.name === currentStep
    );
    return <>{targetStep}</>;
  };

  const Step = (props: StepProps<StepKey>) => {
    return <>{props.children}</>;
  };

  return {
    currentStep,
    isFirst,
    isLast,
    nextStep,
    prevStep,
    setStep,
    Funnel,
    Step,
  } as const;
}
