import { ref, toValue, computed, readonly, provide, inject } from 'vue';
import { u as useRouter } from './server.mjs';
import { y as klona } from '../runtime.mjs';

const injectionKey = Symbol("multi-step-form-context");
function provideMultiStepForm(rules) {
  const data = ref(klona(toValue(rules.initialState)));
  const errors = ref({
    message: "",
    fields: {}
  });
  const router = useRouter();
  const loading = ref(false);
  const complete = ref(false);
  const steps = computed(() => rules.steps.map((step, id) => ({ ...step, id })));
  const totalSteps = computed(() => steps.value.length);
  const progress = computed(
    () => (currentStepId.value + 1) / totalSteps.value * 100
  );
  const currentStepId = computed(() => steps.value.find(
    (step) => step.to === router.currentRoute.value.path
  )?.id ?? 0);
  const currentStep = computed(() => steps.value[currentStepId.value]);
  const isLastStep = computed(() => currentStepId.value === totalSteps.value - 1);
  const context = {
    steps,
    totalSteps,
    currentStepId,
    currentStep,
    isLastStep,
    data,
    progress,
    errors: readonly(errors),
    loading: readonly(loading),
    complete: readonly(complete),
    getStep,
    getNextStep,
    getPrevStep,
    goToStep,
    reset,
    setErrorMessage,
    setFieldError,
    resetFieldError,
    validateStep,
    handleSubmit,
    checkPreviousSteps
  };
  function getNextStep(id = currentStepId.value) {
    return getStep(id + 1);
  }
  function getPrevStep(id = currentStepId.value) {
    return getStep(id - 1);
  }
  function getStep(id = currentStepId.value) {
    return steps.value[id];
  }
  async function goToStep(step) {
    if (step) {
      await router.push(step.to);
    }
  }
  function setFieldError(field, error) {
    errors.value.fields[field] = error;
  }
  function resetFieldError(field) {
    if (Array.isArray(field)) {
      field.forEach((key) => {
        errors.value.fields[key] = void 0;
      });
    } else if (field) {
      errors.value.fields[field] = void 0;
    } else {
      errors.value.fields = {};
    }
  }
  function setErrorMessage(error = "") {
    errors.value.message = error;
  }
  async function validateStep(step = currentStep.value) {
    if (step.validate) {
      try {
        const success = await step.validate(context);
        const hasErrors = Object.values(errors.value.fields).filter(Boolean).length > 0 || errors.value.message;
        if (success === false || hasErrors) {
          return false;
        }
      } catch (error) {
        if (rules.onError) {
          await rules.onError(error, context);
        }
        return false;
      }
    }
    return true;
  }
  function reset(initialState = rules.initialState) {
    data.value = klona(toValue(initialState));
    loading.value = false;
    complete.value = false;
    errors.value = {
      message: "",
      fields: {}
    };
  }
  async function checkPreviousSteps() {
    let current = 0;
    while (current < currentStepId.value) {
      const step = getStep(current);
      if (!step)
        break;
      if (!await validateStep(step)) {
        await goToStep(step);
        return;
      }
      current++;
    }
  }
  async function handleSubmit() {
    if (loading.value)
      return;
    loading.value = true;
    resetFieldError();
    if (!await validateStep()) {
      loading.value = false;
      return;
    }
    const nextStep = getNextStep();
    if (nextStep) {
      await goToStep(nextStep);
      loading.value = false;
      return;
    }
    try {
      if (rules.onSubmit) {
        await rules.onSubmit(data.value, context);
      }
      complete.value = true;
    } catch (error) {
      if (rules.onError) {
        await rules.onError(error, context);
      }
    } finally {
      loading.value = false;
    }
  }
  provide(injectionKey, context);
  return context;
}
function useMultiStepForm() {
  const context = inject(
    injectionKey,
    null
  );
  if (!context) {
    throw new Error(
      "MultiStepForm: \u0647\u06CC\u0686 \u0645\u062A\u0646\u06CC \u06CC\u0627\u0641\u062A \u0646\u0634\u062F\u060C \u0622\u06CC\u0627 \u0641\u0631\u0627\u0645\u0648\u0634 \u06A9\u0631\u062F\u0647\u200C\u0627\u06CC\u062F provideMultiStepForm \u0631\u0627 \u0641\u0631\u0627\u062E\u0648\u0627\u0646\u06CC \u06A9\u0646\u06CC\u062F\u061F"
    );
  }
  return context;
}

export { provideMultiStepForm as p, useMultiStepForm as u };
