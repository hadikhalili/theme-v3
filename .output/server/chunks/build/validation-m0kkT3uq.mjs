const validation = `<template>
  <div class="max-w-lg">
    <BaseCard class="p-6">
      <form
        action=""
        method="POST"
        novalidate
        @submit.prevent="onSubmit"
      >
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-12 sm:col-span-6">
            <Field v-slot="{ field, errorMessage, handleChange, handleBlur }" name="firstName">
              <BaseInput
                label="\u0646\u0627\u0645"
                placeholder="\u0645\u062B\u0627\u0644: \u062C\u0627\u0646"
                :model-value="field.value"
                :error="errorMessage"
                :disabled="isSubmitting"
                type="text"
                @update:model-value="handleChange"
                @blur="handleBlur"
              />
            </Field>
          </div>

          <div class="col-span-12 sm:col-span-6">
            <Field v-slot="{ field, errorMessage, handleChange, handleBlur }" name="lastName">
              <BaseInput
                label="\u0646\u0627\u0645 \u062E\u0627\u0646\u0648\u0627\u062F\u06AF\u06CC"
                placeholder="ex: Doe"
                :model-value="field.value"
                :error="errorMessage"
                :disabled="isSubmitting"
                type="text"
                @update:model-value="handleChange"
                @blur="handleBlur"
              />
            </Field>
          </div>

          <div class="col-span-12">
            <Field v-slot="{ field, errorMessage, handleChange, handleBlur }" name="email">
              <BaseInput
                type="email"
                label="\u0622\u062F\u0631\u0633 \u0627\u06CC\u0645\u06CC\u0644"
                placeholder="ex: ghasem@eltheme.ir"
                :model-value="field.value"
                :error="errorMessage"
                :disabled="isSubmitting"
                @update:model-value="handleChange"
                @blur="handleBlur"
              />
            </Field>
          </div>

          <div class="col-span-12">
            <Field v-slot="{ field, errorMessage, handleChange, handleBlur }" name="message">
              <BaseTextarea
                label="\u067E\u06CC\u0627\u0645"
                placeholder="\u067E\u06CC\u0627\u0645 \u062E\u0648\u062F \u0631\u0627 \u0628\u0646\u0648\u06CC\u0633\u06CC\u062F..."
                :model-value="field.value"
                :error="errorMessage"
                :disabled="isSubmitting"
                @update:model-value="handleChange"
                @blur="handleBlur"
              />
            </Field>
          </div>

          <div class="col-span-12">
            <BaseButton
              type="submit"
              class="w-full"
              color="primary"
              :disabled="isSubmitting"
              :loading="isSubmitting"
            >
              \u0627\u0631\u0633\u0627\u0644 \u067E\u06CC\u0627\u0645
            </BaseButton>
          </div>
        </div>
      </form>
    </BaseCard>
  </div>
</template>

<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { Field, useForm } from 'vee-validate'
import { z } from 'zod'

// This is the object that will contain the validation messages
const VALIDATION_TEXT = {
  FIRSTNAME_REQUIRED: '\u0646\u0627\u0645 \u0646\u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u062F \u062E\u0627\u0644\u06CC \u0628\u0627\u0634\u062F',
  LASTNAME_REQUIRED: '\u0646\u0627\u0645 \u062E\u0627\u0646\u0648\u0627\u062F\u06AF\u06CC \u0646\u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u062F \u062E\u0627\u0644\u06CC \u0628\u0627\u0634\u062F',
  EMAIL_REQUIRED: '\u0644\u0637\u0641\u0627\u064B \u06CC\u06A9 \u0622\u062F\u0631\u0633 \u0627\u06CC\u0645\u06CC\u0644 \u0645\u0639\u062A\u0628\u0631 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F',
  MESSAGE_REQUIRED: '\u067E\u06CC\u0627\u0645 \u0646\u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u062F \u062E\u0627\u0644\u06CC \u0628\u0627\u0634\u062F',
}

// This is the Zod schema for the form input
// It's used to define the shape that the form data will have
const zodSchema = z.object({
  firstName: z.string().min(1, VALIDATION_TEXT.FIRSTNAME_REQUIRED),
  lastName: z.string().min(1, VALIDATION_TEXT.LASTNAME_REQUIRED),
  email: z.string().email(VALIDATION_TEXT.EMAIL_REQUIRED),
  message: z.string().min(1, VALIDATION_TEXT.MESSAGE_REQUIRED),
})

// Zod has a great infer method that will
// infer the shape of the schema into a TypeScript type
type FormInput = z.infer<typeof zodSchema>

const validationSchema = toTypedSchema(zodSchema)
const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  message: '',
} satisfies FormInput

const {
  handleSubmit,
  isSubmitting,
  setFieldError,
  meta,
  values,
  errors,
  resetForm,
  setFieldValue,
  setErrors,
} = useForm({
  validationSchema,
  initialValues,
})

const success = ref(false)

// Ask the user for confirmation before leaving the page if the form has unsaved changes
onBeforeRouteLeave(() => {
  if (meta.value.dirty) {
    return confirm('\u062A\u063A\u06CC\u06CC\u0631\u0627\u062A \u0630\u062E\u06CC\u0631\u0647 \u0646\u0634\u062F\u0647 \u062F\u0627\u0631\u06CC\u062F. \u0622\u06CC\u0627 \u0645\u0637\u0645\u0626\u0646\u06CC\u062F \u06A9\u0647 \u0645\u06CC\u200C\u062E\u0648\u0627\u0647\u06CC\u062F \u062A\u0631\u06A9 \u06A9\u0646\u06CC\u062F\u061F')
  }
})

const toaster = useToaster()

// This is where you would send the form data to the server
const onSubmit = handleSubmit(
  async (values) => {
    success.value = false

    // here you have access to the validated form values
    console.log('message-send-success', values)

    try {
      // fake delay, this will make isSubmitting value to be true
      await new Promise((resolve, reject) => {
        if (values.firstName === 'Hanzo') {
          // simulate a backend error
          setTimeout(() => reject(new Error('\u062E\u0637\u0627\u06CC \u0627\u0639\u062A\u0628\u0627\u0631\u0633\u0646\u062C\u06CC \u062C\u0639\u0644\u06CC \u062F\u0631 \u0628\u06A9\u200C\u0627\u0646\u062F')), 2000)
        }
        setTimeout(resolve, 4000)
      })

      toaster.clearAll()
      toaster.show({
        title: '\u0645\u0648\u0641\u0642\u06CC\u062A',
        message: \`\u067E\u06CC\u0627\u0645 \u0627\u0631\u0633\u0627\u0644 \u06AF\u0631\u062F\u06CC\u062F!\`,
        color: 'success',
        icon: 'ph:check',
        closable: true,
      })
    }
    catch (error: any) {
      // this will set the error on the form
      if (error.message === '\u062E\u0637\u0627\u06CC \u0627\u0639\u062A\u0628\u0627\u0631\u0633\u0646\u062C\u06CC \u062C\u0639\u0644\u06CC \u062F\u0631 \u0628\u06A9\u200C\u0627\u0646\u062F') {
        setFieldError('firstName', '\u0627\u06CC\u0646 \u0646\u0627\u0645 \u0645\u062C\u0627\u0632 \u0646\u06CC\u0633\u062A')

        document.documentElement.scrollTo({
          top: 0,
          behavior: 'smooth',
        })

        toaster.clearAll()
        toaster.show({
          title: 'Oops!',
          message: '\u0644\u0637\u0641\u0627\u064B \u062E\u0637\u0627\u0647\u0627\u06CC \u0641\u0631\u0645 \u0631\u0627 \u0628\u0631\u0631\u0633\u06CC \u06A9\u0646\u06CC\u062F',
          color: 'danger',
          icon: 'lucide:alert-triangle',
          closable: true,
        })
      }
      return
    }

    resetForm()

    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth',
    })

    success.value = true
    setTimeout(() => {
      success.value = false
    }, 3000)
  },
  (error) => {
    // this callback is optional and called only if the form has errors
    success.value = false

    // here you have access to the error
    console.log('message-send-error', error)

    // you can use it to scroll to the first error
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  },
)
<\/script>
`;

export { validation as default };
