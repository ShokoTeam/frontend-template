<template>
  <aside
    :class="sidebarState ? 'w-16 px-2' : 'w-[290px] px-4'"
    class="border-r border-gray-200 h-screen bg-zinc-50 transition-[width] duration-100 ease-in-out"
  >
    <!-- Profile -->
    <div class="py-3 flex justify-between">
      <Transition name="fade">
        <UiDropdownMenu>
          <UiDropdownMenuTrigger as-child>
            <NuxtImg
              v-show="!sidebarState"
              src="/profile_fallback.png"
              class="size-9 rounded-full cursor-pointer"
              alt="profile image"
            />
          </UiDropdownMenuTrigger>
          <UiDropdownMenuContent class="w-44">
            <!-- <UiDropdownMenuLabel>Panel Position</UiDropdownMenuLabel> -->
            <!-- <UiDropdownMenuSeparator /> -->
            <!-- <UiDropdownMenuRadioGroup v-model="">
              <UiDropdownMenuRadioItem value="top">
                A
              </UiDropdownMenuRadioItem>
              <UiDropdownMenuRadioItem value="bottom">
                B
              </UiDropdownMenuRadioItem>
              <UiDropdownMenuRadioItem value="right">
                C
              </UiDropdownMenuRadioItem>
            </UiDropdownMenuRadioGroup> -->
            <UiButton
              size="sm"
              class="text-red-500 hover:bg-red-300/40 bg-white  w-full py-1"
              @click="mockLogout()"
            >
              Выйти
            </UiButton>
          </UiDropdownMenuContent>
        </UiDropdownMenu>
      </Transition>
      <UiButton
        variant="secondary"
        size="icon"
        @click="sidebarState = !sidebarState"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm11-2v16" />
            <path d="m10 10l-2 2l2 2" />
          </g>
        </svg>
      </UiButton>
    </div>
    <!-- <div class="h-[0.5px] my-2 bg-gray-200/80 rounded-full" /> -->
    <div class="mt-7">
      <ul class="flex flex-col gap-y-1">
        <li
          v-for="item in data"
          :key="item.url"
          :class="sidebarState ? 'items-center bg-zinc-100' : ''"
          class="list-none py-2 hover:bg-zinc-200 flex px-2 rounded-md transition-all duration-150 ease-linear "
        >
          <NuxtLink
            :to="item.url"
            class="flex items-center gap-x-2 w-full"
          >
            <component
              :is="item.icon"
              v-if="sidebarState"
            />
            <Transition name="fade">
              <span
                v-show="!sidebarState"
                class="w-fit"
              >
                {{ item.label }}
              </span>
            </Transition>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup lang="ts">
// import { useLocalStorage } from '@vueuse/core'
import IconsProjects from '../icons/Projects.vue'
// import { useAuthStore } from '~/entities/auth/model'
interface SidebarItem {
    url: string
    label: string
    icon: any
}

const data = ref<SidebarItem[]>([
  {
    url: '/',
    label: 'Проекты',
    icon: IconsProjects
  },
  {
    url: '/tasks',
    label: 'Задачи',
    icon: IconsProjects
  },
  {
    url: '/boards ',
    label: 'Доски',
    icon: IconsProjects
  },
  {
    url: '/reports',
    label: 'Отчеты',
    icon: IconsProjects
  }
])

const sidebarState = ref<boolean>(false)

const mockLogout = () => {
  // token.value = null
  localStorage.setItem('token', null)
  navigateTo('/login')
}
</script>

<style>
 .fade-enter-active,
    .fade-leave-active {
        transition: opacity 150ms ease-out;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }
</style>
