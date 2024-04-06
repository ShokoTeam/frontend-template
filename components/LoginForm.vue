<script setup lang="ts">
import { useAuthStore } from '~/entities/auth/model'

const form = ref({
  email: 'polina.polyakova@domain.dt',
  password: 'digitech'
})

const { login } = useAuthStore()

const handleLogin = async () => {
  await login(form.value)
  navigateTo('/')
}
</script>

<template>
  <UiCard class="mx-auto max-w-sm">
    <UiCardHeader>
      <UiCardTitle class="text-2xl">
        Вход
      </UiCardTitle>
      <UiCardDescription>
        Введите свою почту и пароль, чтобы войти в свой аккаунт
      </UiCardDescription>
    </UiCardHeader>
    <UiCardContent>
      <div class="grid gap-4">
        <div class="grid gap-2">
          <UiLabel for="email">
            Почта
          </UiLabel>
          <UiInput
            id="email"
            v-model="form.email"
            type="email"
            placeholder="m@example.ru"
            required
          />
        </div>
        <div class="grid gap-2">
          <div class="flex items-center">
            <UiLabel for="password">
              Пароль
            </UiLabel>
            <!-- <a
              href="#"
              class="ml-auto inline-block text-sm underline"
            >
              Forgot your password?
            </a> -->
          </div>
          <UiInput
            id="password"
            v-model="form.password"
            type="password"
            required
          />
        </div>
        <UiButton
          type="submit"
          class="w-full"
          @click="handleLogin"
        >
          Войти
        </UiButton>
      </div>
      <div class="mt-4 text-center text-sm">
        Нет аккаунта?
        <a
          href="/signup"
          class="underline"
        >
          Регистрация
        </a>
      </div>
    </UiCardContent>
  </UiCard>
</template>
