<template>
  <div
    class="flex flex-col w-full items-center justify-center"
  >
    <LayoutSearchBar
      v-model="query"
      icon
      placeholder="Поиск"
    >
      <template #options>
        <div class="flex gap-x-4">
          <UiDropdownMenu>
            <UiDropdownMenuTrigger as-child>
              <UiButton
                variant="ghost"
                class="max-w-[90px]"
              >
                Заказчик

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  viewBox="0 0 24 24"
                ><path
                  fill="currentColor"
                  d="m7 10l5 5l5-5z"
                /></svg>
              </UiButton>
            </UiDropdownMenuTrigger>
            <UiDropdownMenuContent class="w-56">
              <UiDropdownMenuRadioGroup v-model="form.customer">
                <UiDropdownMenuRadioItem value="top">
                  A
                </UiDropdownMenuRadioItem>
                <UiDropdownMenuRadioItem value="bottom">
                  B
                </UiDropdownMenuRadioItem>
                <UiDropdownMenuRadioItem value="right">
                  C
                </UiDropdownMenuRadioItem>
              </UiDropdownMenuRadioGroup>
            </UiDropdownMenuContent>
          </UiDropdownMenu>

          <UiDropdownMenu>
            <UiDropdownMenuTrigger as-child>
              <UiButton
                variant="ghost"
                class="max-w-[90px]"
              >
                Команда
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  viewBox="0 0 24 24"
                ><path
                  fill="currentColor"
                  d="m7 10l5 5l5-5z"
                /></svg>
              </UiButton>
            </UiDropdownMenuTrigger>
            <UiDropdownMenuContent class="w-56">
              <UiDropdownMenuRadioGroup v-model="form.team">
                <UiDropdownMenuRadioItem value="top">
                  A
                </UiDropdownMenuRadioItem>
                <UiDropdownMenuRadioItem value="bottom">
                  B
                </UiDropdownMenuRadioItem>
                <UiDropdownMenuRadioItem value="right">
                  C
                </UiDropdownMenuRadioItem>
              </UiDropdownMenuRadioGroup>
            </UiDropdownMenuContent>
          </UiDropdownMenu>

          <UiDropdownMenu>
            <UiDropdownMenuTrigger as-child>
              <UiButton
                variant="ghost"
                class="max-w-[90px] flex"
              >
                <span>
                  Статус
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  viewBox="0 0 24 24"
                ><path
                  fill="currentColor"
                  d="m7 10l5 5l5-5z"
                /></svg>
              </UiButton>
            </UiDropdownMenuTrigger>
            <UiDropdownMenuContent class="w-56">
              <!-- <UiDropdownMenuLabel>Panel Position</UiDropdownMenuLabel> -->
              <!-- <UiDropdownMenuSeparator /> -->
              <UiDropdownMenuRadioGroup v-model="form.status">
                <UiDropdownMenuRadioItem value="top">
                  A
                </UiDropdownMenuRadioItem>
                <UiDropdownMenuRadioItem value="bottom">
                  B
                </UiDropdownMenuRadioItem>
                <UiDropdownMenuRadioItem value="right">
                  C
                </UiDropdownMenuRadioItem>
              </UiDropdownMenuRadioGroup>
            </UiDropdownMenuContent>
          </UiDropdownMenu>
        </div>
        <div>
          <UiDropdownMenu>
            <UiDropdownMenuTrigger as-child>
              <UiButton
                variant="ghost"
                class="flex gap-x-2"
              >
                <span>
                  Сначала новые
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18px"
                  height="18px"
                  viewBox="0 0 24 24"
                ><path
                  fill="currentColor"
                  d="M10 18v-2h4v2zm-4-5v-2h12v2zM3 8V6h18v2z"
                /></svg>
              </UiButton>
            </UiDropdownMenuTrigger>
            <UiDropdownMenuContent class="w-56">
              <!-- <UiDropdownMenuLabel>Panel Position</UiDropdownMenuLabel> -->
              <!-- <UiDropdownMenuSeparator /> -->
              <UiDropdownMenuRadioGroup v-model="form.status">
                <UiDropdownMenuRadioItem value="top">
                  A
                </UiDropdownMenuRadioItem>
                <UiDropdownMenuRadioItem value="bottom">
                  B
                </UiDropdownMenuRadioItem>
                <UiDropdownMenuRadioItem value="right">
                  C
                </UiDropdownMenuRadioItem>
              </UiDropdownMenuRadioGroup>
            </UiDropdownMenuContent>
          </UiDropdownMenu>
        </div>
      </template>
    </LayoutSearchBar>
    <div
      v-if="isLoading"
      class="w-full px-5 flex items-center justify-center h-28"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22px"
        height="22px"
        viewBox="0 0 24 24"
      ><path
        fill="currentColor"
        d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
        opacity=".25"
      /><path
        fill="currentColor"
        d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
      ><animateTransform
        attributeName="transform"
        dur="0.75s"
        repeatCount="indefinite"
        type="rotate"
        values="0 12 12;360 12 12"
      />
      </path>
      </svg>
    </div>
    <div
      v-else
      class="grid grid-cols-3 px-4 w-full gap-x-2 gap-y-2"
    >
      <!-- TODO: Project Card -->
      <div
        v-for="item in projects"
        :key="item.uid"
        class="bg-[#F3F3F3] hover:bg-[#E5E5E5] border border-transparent hover:border-accent transition-all duration-100 ease-linear cursor-pointer rounded-[5px] w-full py-7 px-6"
        @click="navigateTo(`/project/?uid=${item.uid}`)"
      >
        <div class="flex justify-between">
          <span class="text-xl font-semibold block max-w-[90%] bg-accent">
            {{ item.name }}
          </span>
          <NuxtImg
            src="/profile_fallback.png"
            class="size-9 rounded-full"
            alt="profile image"
          />
        </div>
        <div
          class="mt-10"
        >
          <div
            v-if="item.tasksCount"
          >
            Количество задач: {{ item.tasksCount }}
          </div>
          <div>
            {{ item.team.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProject } from '~/entities/project/model'

definePageMeta({
  middleware: [
    'auth'
  ]
})

const projects = ref([])
const isLoading = ref(false)

const query = ref<string>('')

const form = ref({
  customer: '',
  status: '',
  team: ''
})

const { getAllProjets } = useProject()

const handleProjects = async () => {
  isLoading.value = true

  try {
    const res = await getAllProjets()
    projects.value = res
  } catch (e) {
    console.log(e)
  } finally {
    isLoading.value = false
  }
}

onMounted(async () => {
  await handleProjects()
})
</script>
