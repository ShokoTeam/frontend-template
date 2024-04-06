<template>
  <div
    class="flex flex-col w-full px-6 py-7"
  >
    <div v-if="!isLoading">
      <div class="text-gray-800 font-bold text-2xl">
        {{ project?.name }}
      </div>
      <div class="mt-4 mb-3 w-1/4">
        <div class="flex gap-x-8 flex-col w-full">
          <div class="flex items-center gap-x-11 w-full">
            <div class="flex items-center gap-x-2 w-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 48 48"
              ><g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
              ><circle
                cx="24"
                cy="12"
                r="8"
                fill="currentColor"
              /><path d="M42 44c0-9.941-8.059-18-18-18S6 34.059 6 44m13-5h10" /></g></svg>
              <span>
                Заказчик
              </span>
            </div>
            <div>{{ project && project.consumer ? project.consumer.lastname + ' ' + project.consumer.name : 'нет заказчика' }}</div>
          </div>
          <div class="flex gap-x-8 flex-col w-full">
            <div class="flex items-center gap-x-11 w-full">
              <div class="flex items-center gap-x-2 w-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                ><path
                  fill="currentColor"
                  d="M17 15q-1.05 0-1.775-.725T14.5 12.5q0-1.05.725-1.775T17 10q1.05 0 1.775.725T19.5 12.5q0 1.05-.725 1.775T17 15m-5 5v-1.4q0-.6.313-1.112t.887-.738q.9-.375 1.863-.562T17 16q.975 0 1.938.188t1.862.562q.575.225.888.738T22 18.6V20zm-2-8q-1.65 0-2.825-1.175T6 8q0-1.65 1.175-2.825T10 4q1.65 0 2.825 1.175T14 8q0 1.65-1.175 2.825T10 12m-8 8v-2.8q0-.85.425-1.562T3.6 14.55q1.5-.75 3.113-1.15T10 13q.875 0 1.75.15t1.75.35l-.85.85l-.85.85q-.45-.125-.9-.162T10 15q-1.45 0-2.838.35t-2.662 1q-.25.125-.375.35T4 17.2v.8h6v2zm8-10q.825 0 1.413-.587T12 8q0-.825-.587-1.412T10 6q-.825 0-1.412.588T8 8q0 .825.588 1.413T10 10"
                /></svg>

                <span>
                  Проверяющий
                </span>
              </div>
              <div>{{ project && project.inspector ? project.inspector.lastname + ' ' + project.inspector.name : 'нет проверяющего' }}</div>
            </div>
          </div>

          <div class="flex gap-x-8 flex-col w-full">
            <div class="flex items-center gap-x-11 w-full">
              <div class="flex items-center gap-x-2 w-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                ><path
                  fill="currentColor"
                  d="M6.002 4a1.998 1.998 0 1 1 3.996 0a1.998 1.998 0 0 1-3.996 0M8 3.002a.998.998 0 1 0 0 1.996a.998.998 0 0 0 0-1.996M11 4.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0m1.5-.5a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m-9-1a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M3 4.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0M4.268 7A1.99 1.99 0 0 0 4 8H2v2.5a1.5 1.5 0 0 0 2.096 1.377c.074.331.19.647.34.942A2.5 2.5 0 0 1 1 10.5V8a1 1 0 0 1 1-1zm7.296 5.819A2.5 2.5 0 0 0 15 10.5V8a1 1 0 0 0-1-1h-2.268c.17.294.268.635.268 1h2v2.5a1.5 1.5 0 0 1-2.096 1.377c-.075.331-.19.647-.34.942M6 6.999a1 1 0 0 0-1 1V11a3 3 0 0 0 6 0V8a1 1 0 0 0-1-1zm0 1h4V11a2 2 0 0 1-4 0z"
                /></svg>

                <span>
                  Команда
                </span>
              </div>
              <div>{{ project && project.team ? project.team.name : 'нет команды' }}</div>
            </div>
          </div>
        </div>
      </div>

      <UiAccordion
        type="single"
        class="w-full"
        collapsible
        :default-value="defaultValue"
      >
        <UiAccordionItem
          v-for="item in accordionItems"
          :key="item.value"
          :value="item.value"
        >
          <UiAccordionTrigger><span class="text-xl">{{ item.title }}</span></UiAccordionTrigger>
          <UiAccordionContent>
            <div
              v-if="!isLoading"
              class="grid grid-cols-3 gap-4"
            >
              <div class="flex flex-col">
                <div class="my-2 text-md font-medium">
                  В очереди {{ inQueueTasks.length }}
                </div>
                <template v-if="!isLoading">
                  <div
                    v-for="item in inQueueTasks"
                    :key="item.uid"
                    class="bg-[#F3F3F3] hover:bg-[#E5E5E5] border border-transparent hover:border-accent transition-all duration-100 ease-linear cursor-pointer rounded-[5px] w-full py-6 px-6 mb-3"
                    @click="navigateTo(`/project/?uid=${'hello'}`)"
                  >
                    <div class="flex gap-x-2 text-xl font-semibold ">
                      <span class="max-w-[90%] ">
                        {{ item.number }}.
                      <!-- {{ item.name }} -->
                      </span>
                      <span>
                        {{ item.name }}
                      </span>
                    </div>
                    <div class="mt-3">
                    <!-- {{ item.created_at }}
                    {{ new Date() }} -->
                    <!-- 12.01.2024 - 12.03.2024 -->
                    </div>
                    <div
                      class="mt-10"
                    >
                      <div class="font-medium">
                        SP: {{ item.story_points ? item.story_points : 0 }}
                      </div>
                      <div class="mt-3 flex gap-x-2">
                        <div
                          v-if="item.importance === 'low'"
                          class="bg-zinc-200 px-2 py-[1px] w-fit rounded-sm"
                        >
                          Низкий
                        </div>
                        <div
                          v-if="item.importance === 'middle'"
                          class="bg-orange-200 px-2 py-[1px] w-fit rounded-sm"
                        >
                          Средний
                        </div>
                        <!--  -->
                        <div
                          v-if="item.importance === 'high'"
                          class="bg-red-200 text-red-600 px-2 py-[1px] w-fit rounded-sm"
                        >
                          Высокий
                        </div>
                        <div
                          v-if="item.category === 'new'"
                          class="bg-sky-300 px-2 py-[1px] w-fit rounded-sm"
                        >
                          Новая фича
                        </div>

                        <div
                          v-if="item.category === 'hotfix'"
                          class="bg-red-400 text-red-700 px-2 py-[1px] w-fit rounded-sm"
                        >
                          Ошибка
                        </div>

                        <div
                          v-if="item.category === 'changes'"
                          class="bg-yellow-400 px-2 py-[1px] w-fit rounded-sm"
                        >
                          Доработка
                        </div>
                      </div>
                    </div>
                  </div>
                </template>
                <div v-else>
                  <div class="mt-3 flex flex-col gap-y-3">
                    <UiSkeleton
                      v-for="i in 5"
                      :key="i"
                      class="h-18"
                    />
                  </div>
                </div>
              </div>
              <div class="flex flex-col">
                <div class="my-2 text-md font-medium">
                  В работе {{ inProgressTasks.length }}
                </div>

                <template v-if="!isLoading">
                  <div
                    v-for="item in inProgressTasks"
                    :key="item.uid"
                    class="bg-[#F3F3F3] hover:bg-[#E5E5E5] border border-transparent hover:border-accent transition-all duration-100 ease-linear cursor-pointer rounded-[5px] w-full py-7 px-6 mb-3"
                    @click="navigateTo(`/project/?uid=${'hello'}`)"
                  >
                    <div class="flex gap-x-2 text-xl font-semibold ">
                      <span class="max-w-[90%] ">
                        {{ item.number }}.
                      <!-- {{ item.name }} -->
                      </span>
                      <span>
                        {{ item.name }}
                      </span>
                    </div>
                    <div class="mt-3">
                      {{ item.created_at }}
                      {{ new Date() }}
                    <!-- 12.01.2024 - 12.03.2024 -->
                    </div>
                    <div
                      class="mt-10"
                    >
                      <div class="font-medium">
                        SP: {{ item.story_points ? item.story_points : 0 }}
                      </div>
                      <div class="mt-3 flex gap-x-2">
                        <div
                          v-if="item.importance === 'low'"
                          class="bg-zinc-200 px-2 py-[1px] w-fit rounded-sm"
                        >
                          Низкий
                        </div>
                        <div
                          v-if="item.importance === 'middle'"
                          class="bg-orange-200 px-2 py-[1px] w-fit rounded-sm"
                        >
                          Средний
                        </div>
                        <div
                          v-if="item.importance === 'high'"
                          class="bg-red-200 text-red-600 px-2 py-[1px] w-fit rounded-sm"
                        >
                          Высокий
                        </div>

                        <div
                          v-if="item.category === 'new'"
                          class="bg-sky-300 px-2 py-[1px] w-fit rounded-sm"
                        >
                          Новая фича
                        </div>

                        <div
                          v-if="item.category === 'hotfix'"
                          class="bg-red-400 text-red-700 px-2 py-[1px] w-fit rounded-sm"
                        >
                          Ошибка
                        </div>

                        <div
                          v-if="item.category === 'changes'"
                          class="bg-yellow-400 px-2 py-[1px] w-fit rounded-sm"
                        >
                          Доработка
                        </div>
                      </div>
                    </div>
                  </div>
                </template>
                <div v-else>
                  <div class="mt-3 flex flex-col gap-y-3">
                    <UiSkeleton
                      v-for="i in 5"
                      :key="i"
                      class="h-18"
                    />
                  </div>
                </div>
              </div>
              <div class="flex flex-col">
                <div class="my-2 text-md font-medium">
                  Завершена {{ doneTasks.length }}
                </div>

                <template v-if="!isLoading">
                  <div
                    v-for="item in doneTasks"
                    :key="item.uid"
                    class="bg-[#F3F3F3] hover:bg-[#E5E5E5] border border-transparent hover:border-accent transition-all duration-100 ease-linear cursor-pointer rounded-[5px] w-full py-7 px-6 mb-3"
                    @click="navigateTo(`/project/?uid=${'hello'}`)"
                  >
                    <div class="flex gap-x-2 text-xl font-semibold ">
                      <span class="max-w-[90%] ">
                        {{ item.number }}.
                      <!-- {{ item.name }} -->
                      </span>
                      <span>
                        {{ item.name }}
                      </span>
                    </div>
                    <div class="mt-3">
                      {{ item.created_at }}
                      {{ new Date() }}
                    <!-- 12.01.2024 - 12.03.2024 -->
                    </div>
                    <div
                      class="mt-10"
                    >
                      <div class="font-medium">
                        SP: {{ item.story_points ? item.story_points : 0 }}
                      </div>
                      <div class="mt-3 flex gap-x-2">
                        <div
                          v-if="item.importance === 'low'"
                          class="bg-zinc-200 px-2 py-[1px] w-fit rounded-sm"
                        >
                          Низкий
                        </div>
                        <div
                          v-if="item.importance === 'middle'"
                          class="bg-orange-200 px-2 py-[1px] w-fit rounded-sm"
                        >
                          Средний
                        </div>
                        <!-- v-if="item.importance === 'high'" -->
                        <div
                          v-if="item.importance === 'high'"
                          class="bg-red-200 text-red-600 px-2 py-[1px] w-fit rounded-sm"
                        >
                          Высокий
                        </div>

                        <div
                          v-if="item.category === 'new'"
                          class="bg-sky-300 px-2 py-[1px] w-fit rounded-sm"
                        >
                          Новая фича
                        </div>

                        <div
                          v-if="item.category === 'hotfix'"
                          class="bg-red-400 text-red-700 px-2 py-[1px] w-fit rounded-sm"
                        >
                          Ошибка
                        </div>

                        <div
                          v-if="item.category === 'changes'"
                          class="bg-yellow-400 px-2 py-[1px] w-fit rounded-sm"
                        >
                          Доработка
                        </div>
                      </div>
                    </div>
                  </div>
                </template>
                <div v-else>
                  <div class="mt-3 flex flex-col gap-y-3">
                    <UiSkeleton
                      v-for="i in 5"
                      :key="i"
                      class="h-18"
                    />
                  </div>
                </div>
              </div>
            </div>
          </UiAccordionContent>
        </UiAccordionItem>
      </UiAccordion>
    </div>

    <div v-else>
      <UiSkeleton class="h-7 w-[15%]" />
      <UiSkeleton class="h-4 w-[15%] mt-6" />
      <UiSkeleton class="h-4 w-[15%] mt-2" />
      <UiSkeleton class="h-4 w-[25%] mt-2" />
      <UiSkeleton class="h-6 w-[5%] mt-7" />
      <UiSkeleton class="h-4 w-[80%] mt-5" />
      <UiSkeleton class="h-4 w-[85%] mt-2" />
      <UiSkeleton class="h-4 w-[75%] mt-2" />

      <div
        class="grid grid-cols-3 gap-4"
      >
        <div class="mt-3 flex flex-col gap-y-3">
          <UiSkeleton
            v-for="i in 5"
            :key="i"
            class="h-18 w-[20%]"
          />
        </div>

        <div class="mt-3 flex flex-col gap-y-3">
          <UiSkeleton
            v-for="i in 5"
            :key="i"
            class="h-18 w-[20%]"
          />
        </div>

        <div class="mt-3 flex flex-col gap-y-3">
          <UiSkeleton
            v-for="i in 5"
            :key="i"
            class="h-18 w-[20%]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useProject } from '~/entities/project/model'

const defaultValue = 'item-1'

const accordionItems = [
  { value: 'item-1', title: 'Задачи', content: 'Yes. It adheres to the WAI-ARIA design pattern.' }
]

definePageMeta({
  middleware: [
    'auth'
  ]
})

const route = useRoute()
const project = ref(null)
const isLoading = ref(false)
const { getProject } = useProject()

const inProgressTasks = computed(() => {
  return project && project.value.tasks && project.value.tasks.filter(task => task.state === 'progress')
})

const inQueueTasks = computed(() => {
  return project && project.value.tasks && project.value.tasks.filter(task => task.state === 'queue')
})

const doneTasks = computed(() => {
  return project && project.value.tasks && project.value.tasks.filter(task => task.state === 'finally')
})

const handleProject = async () => {
  isLoading.value = true

  try {
    if (route.query.uid) {
      const res = await getProject(String(route.query.uid))
      project.value = res
    }
  } catch (e) {
    console.log(e)
  } finally {
    isLoading.value = false
  }
}

onMounted(async () => {
  await handleProject()
})
</script>
