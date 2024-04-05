<script setup lang="ts">

import { useAuthStore } from '~/entities/auth/model'

const form = ref({
  email: 'test2@mail.ru',
  password: 'test',
  name: 'Peperoni 2',
  lastname: 'Italiano'
})

const { register } = useAuthStore()

const handleRegister = async () => {
  await register(form.value)
  navigateTo('/')
}
</script>

<template>
  <UiCard class="mx-auto max-w-sm">
    <UiCardHeader>
      <UiCardTitle class="text-2xl">
        Регистрация
      </UiCardTitle>
      <UiCardDescription>
        Чтобы создать новый аккаунт введите данные ниже
      </UiCardDescription>
    </UiCardHeader>
    <UiCardContent>
      <div class="grid gap-4">
        <div class="grid gap-2">
          <UiLabel for="lastname">
            Фамилия
          </UiLabel>
          <UiInput
            id="name"
            v-model="form.lastname"
            type="text"
            placeholder="Иванов"
            required
          />
        </div>
        <div class="grid gap-2">
          <UiLabel for="name">
            Имя
          </UiLabel>
          <UiInput
            id="name"
            v-model="form.name"
            type="text"
            placeholder="Иван"
            required
          />
        </div>
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
          @click="handleRegister"
        >
          Регистрация
        </UiButton>
      </div>
      <div class="mt-4 text-center text-sm">
        Уже есть аккаунт?
        <a
          href="/login"
          class="underline"
        >
          Войти
        </a>
      </div>
    </UiCardContent>
  </UiCard>
</template>
