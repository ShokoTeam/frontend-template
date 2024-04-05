<template>
  <div
    class="flex flex-col w-full items-center justify-center"
  >
    <LayoutSearchBar
      v-model="query"
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
    <div class="grid grid-cols-3 px-4">
      <!-- TODO: Project Card -->
      <div
        v-for="item in projects"
        :key="item.uid"
        class="bg-gray-100 rounded-sm w-full py-4"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProject } from '../entities/project/model'

const { getAllProjets } = useProject()

onMounted(async () => {
  await getAllProjets()
})

const query = ref<string>('')

const form = ref({
  customer: '',
  status: '',
  team: ''
})

const projects = ref([
  {
    uid: '3e08c3b1-0833-441f-8061-ad3f2a7161f8',
    name: 'Some project',
    team_uid: 'a1814d82-9131-42c0-995e-00d321247b98',
    consumer_uid: null,
    inspector_uid: null,
    created_at: '2024-04-05T10:11:10.152217+00:00',
    tasksCount: 2
  },
  {
    uid: '3e08c3b1-3434-441f-8061-ad3f2a7161f8',
    name: 'Some project 2',
    team_uid: 'a1814d82-9131-42c0-995e-00d321247b98',
    consumer_uid: null,
    inspector_uid: null,
    created_at: '2024-04-05T10:11:10.152217+00:00',
    tasksCount: 2
  }
])
</script>
